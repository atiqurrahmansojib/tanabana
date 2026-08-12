import { NAV, NavScreen } from './nav.data';
import { CurrentUser } from '../models/role.model';

/** "T&A" -> "T_AND_A". Mirrors Section.code() on the Java side. */
export function sectionCode(label: string): string {
  return label.toUpperCase()
    .replace(/&/g, '_AND_')
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

/**
 * `NAV`'s own order (M1..M13, generated from the class diagrams) puts
 * Reports & Analytics before Administration because M12 sorts before M13.
 * ADMIN is the one role that opens both, and for them Administration —
 * users, roles, system settings — is the primary workspace; Reports reads
 * as secondary. Shared between here (which module to land on) and the
 * rail (which order to list them in) so the two agree. Everyone else sees
 * at most one of the two, so this only ever reorders those two entries
 * relative to each other.
 */
const RAIL_RANK_OVERRIDE: Record<string, number> = { M12: 13, M13: 12 };
export function railRank(module: string): number {
  return RAIL_RANK_OVERRIDE[module] ?? NAV.findIndex(m => m.module === module);
}

/**
 * Where to land, given what this role may actually open.
 *
 * A fixed redirect to the first screen of the first module sends Finance to the
 * Buyer Master and Finance cannot read the Master section — the user's first
 * sight of the system is then a refusal. This walks the same grants the rail
 * uses and lands on the first screen that will answer.
 *
 * Pass a module to find the landing screen inside it; omit it to find the
 * landing screen for the whole application.
 *
 * Without a module, the role's **own** module — the one it owns, its actual
 * workspace — is tried first, before the rest in `NAV` order. A General
 * Manager reads a slice of Merchandising for the order book, but Production
 * is their job; landing them on Buyer Master because M1 happens to sit
 * first in `NAV` reads as a bug, not a feature. OWNER and ADMIN own no
 * single module, so they fall straight to the `NAV`-order scan.
 *
 * The user is passed in rather than injected. This is called from inside a
 * subscribe callback, which is not an injection context — `inject()` there
 * throws NG0203, the navigation never runs, and the sign-in button spins
 * forever with no error in sight.
 */
export function firstVisiblePath(user: CurrentUser | null, module?: string): string {
  const role = user?.role;
  const granted = user?.authorities ?? [];
  if (!role) {
    return '/login';
  }

  let modules;
  if (module) {
    modules = NAV.filter(m => m.module === module);
  } else {
    // `NAV.roles` is the coarse, module-only statement of who may ever open
    // a module; `granted` (built by `authoritiesFor()`) is what actually
    // decides, and can deny a module `NAV.roles` still lists — Supply Chain
    // reads nothing in Finance despite being named there. Filtering on the
    // real grant here, not `m.roles.includes(role)`, is what keeps a denied
    // module from being tried at all.
    const accessible = NAV.filter(m => granted.includes(`${m.module}_READ`));
    const own = accessible.filter(m => m.owner === role)
      .sort((a, b) => railRank(a.module) - railRank(b.module));
    const rest = accessible.filter(m => m.owner !== role)
      .sort((a, b) => railRank(a.module) - railRank(b.module));
    modules = [...own, ...rest];
  }

  for (const m of modules) {
    // `authoritiesFor()` issues an explicit `_READ` for every section this
    // role may open — a direct membership check, not an inferred "has this
    // been narrowed" guess.
    for (const section of m.sections) {
      if (!granted.includes(`${m.module}_${sectionCode(section.name)}_READ`)) {
        continue;
      }
      const screen = section.screens[0];
      if (screen) {
        return objectPath(screen);
      }
    }
  }
  return '/denied';
}

/**
 * The object archetype has no list to land on — it is a single record,
 * reached by drilling in from somewhere else, so its only route is
 * `path/:id`. A bare `path` 404s and the router falls through to the
 * wildcard route, which silently redirects to Merchandising — the exact
 * "every role somehow lands in Merchandising" bug this file exists to
 * prevent. Opening record `1` (the mock data always has one) is the
 * closest a landing screen can get to "show me my workspace" for a screen
 * that is fundamentally a detail view, not a register.
 */
function objectPath(screen: NavScreen): string {
  return screen.archetype === 'object' ? `${screen.path}/1` : screen.path;
}
