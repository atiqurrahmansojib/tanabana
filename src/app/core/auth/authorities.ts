import { NAV } from '../nav/nav.data';
import { sectionCode } from '../nav/landing';
import { Role } from '../models/role.model';
import { SECTION_GRANTS } from './section-grants';

/**
 * What a role may see and change, with no server to ask.
 *
 * The real backend grants per **module and section** — `M1_COSTING_READ`,
 * not `M1_READ` — because a General Manager reads the T&A board and must not
 * read the costing sheet. `SECTION_GRANTS` extends the pattern
 * `DEVELOPMENT.md` documents for M1 to the other twelve modules, reasoned
 * from how a Bangladeshi RMG factory actually separates the work.
 *
 * A role absent from a module's `SECTION_GRANTS` entry (or a module with no
 * entry at all) reads every section — that is deliberate for a module's own
 * owner, for OWNER and ADMIN, and for the two single-section modules where
 * there is nothing to narrow. Write follows ownership: only the module's
 * declared owner, OWNER, or ADMIN can change a record; every other role that
 * reads a section reads it for visibility, not for editing.
 *
 * An **explicit empty list** (`SCM: []` in M8, for one) is different from no
 * entry at all: `nav.data.ts` still lists the role under that module's
 * `roles` — the coarse, module-only statement of who may ever open it — but
 * this role reads nothing inside it. That has to deny the module itself
 * (no `${module}_READ`, no sections), not just produce an empty section
 * list, or the rail's "nothing narrowed" fallback shows it whole anyway.
 * This is the mechanism a Supply Chain Manager seeing the Finance ledger
 * traced back to: the section loop was correctly empty, but nothing had
 * told the module-level check to also stay closed.
 */
export function authoritiesFor(role: Role): string[] {
  const authorities: string[] = [];
  for (const module of NAV) {
    if (!module.roles.includes(role)) continue;
    const narrowTo = SECTION_GRANTS[module.module]?.[role];
    if (narrowTo?.length === 0) continue;

    const isOwner = role === module.owner || role === 'OWNER' || role === 'ADMIN';
    authorities.push(`${module.module}_READ`);
    if (isOwner) authorities.push(`${module.module}_WRITE`);

    for (const section of module.sections) {
      if (narrowTo && !narrowTo.includes(section.name)) continue;
      const code = `${module.module}_${sectionCode(section.name)}`;
      authorities.push(`${code}_READ`);
      if (isOwner) authorities.push(`${code}_WRITE`);
    }
  }
  return authorities;
}
