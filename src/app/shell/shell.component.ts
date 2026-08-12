import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { NAV, NavModule, NavSection } from '../core/nav/nav.data';
import { railRank, sectionCode } from '../core/nav/landing';
import { I18nService } from '../core/i18n/i18n.service';
import { TPipe } from '../core/i18n/t.pipe';

/**
 * The shell: top bar, the three-level rail, and the routed screen.
 *
 * The rail shows only the modules this role may open — the same rule the
 * backend enforces, so navigation never offers a screen that would 403.
 * Every visible module starts expanded, so opening the app is enough to see
 * everything this role can reach; a click still collapses one back down if
 * the list runs long.
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TPipe],
  template: `
    <div class="shell">
      <header class="bar">
        <button class="btn hamburger" (click)="railOpen.set(!railOpen())" [attr.aria-label]="'Menu' | t">☰</button>
        <span class="brand">{{ 'Tanabana' | t }}</span>
        <span class="role">{{ auth.user()?.fullName }} · {{ auth.user()?.role }}</span>
        <span class="unit">{{ 'Unit scope' | t }} {{ unitScopeLabel() }}</span>
        <button class="btn lang" (click)="i18n.toggle()" [attr.aria-label]="'Language' | t">
          {{ i18n.isBangla() ? 'EN' : 'বাংলা' }}
        </button>
        <button class="btn" (click)="auth.logout()">{{ 'Sign out' | t }}</button>
      </header>

      <div class="rail-backdrop" *ngIf="railOpen()" (click)="railOpen.set(false)"></div>

      <nav class="rail" [class.open]="railOpen()">
        <div class="grp" *ngFor="let m of visibleModules()">
          <button class="glbl" (click)="toggle(m.module)">
            <span class="tw">{{ isOpen(m.module) ? '▾' : '▸' }}</span>
            {{ m.label | t }}
            <span class="gn">{{ count(m) }}</span>
          </button>

          <ng-container *ngIf="isOpen(m.module)">
            <ng-container *ngFor="let sec of visibleSections(m)">
              <div class="slbl" *ngIf="sec.name !== 'General'">{{ sec.name | t }}</div>
              <a class="nav" *ngFor="let s of sec.screens"
                 [routerLink]="screenPath(s)" routerLinkActive="on"
                 (click)="railOpen.set(false)">
                {{ s.title | t }}
                <span class="star" *ngIf="s.flagship">★</span>
              </a>
            </ng-container>
          </ng-container>
        </div>
      </nav>

      <main class="main"><router-outlet /></main>
    </div>
  `,
})
export class ShellComponent {
  protected readonly auth = inject(AuthService);
  protected readonly i18n = inject(I18nService);

  /** Off-canvas rail state below the 900px breakpoint; irrelevant above it,
   *  where the rail is always shown inline regardless of this flag. */
  protected readonly railOpen = signal(false);

  /**
   * Ownership is not exclusivity: a role reads more modules than it writes.
   *
   * Driven by granted authorities, not `NAV[].roles` directly — `NAV.roles`
   * is the coarse, module-only statement of who may *ever* open a module;
   * `authoritiesFor()` is what actually decides, and can deny a module
   * outright even for a role `NAV.roles` still lists (Supply Chain is
   * listed under Finance for the same historical reason `Prototype/index.html`
   * models access per module — the section table is the current decision).
   *
   * Ordered by `railRank()`, not raw `NAV` position: `NAV` lists Reports
   * before Administration because that is M12 before M13, but for the one
   * role that opens both (ADMIN), Administration reads as the primary
   * workspace and belongs first.
   */
  protected readonly visibleModules = computed(() => {
    const granted = this.auth.user()?.authorities ?? [];
    return NAV.filter(m => granted.includes(`${m.module}_READ`))
      .sort((a, b) => railRank(a.module) - railRank(b.module));
  });

  /**
   * Every module the role can open starts expanded — nobody should have to
   * click each one just to see what's there. Computed once at construction,
   * the same moment `visibleModules` first has an answer (auth is already
   * set by the time the shell mounts, behind `authGuard`). Held as a set
   * rather than one selected module, so more than one stays open at once;
   * `toggle()` still lets a user collapse one back if the rail gets long.
   */
  protected readonly open = signal<Set<string>>(
    new Set(this.visibleModules().map(m => m.module)));

  /** "ALL", "U4", or "U4 +2" when the list is too long for the bar. */
  protected unitScopeLabel(): string {
    const units = this.auth.user()?.unitScope ?? [];
    if (!units.length) return '';
    return units.length <= 2 ? units.join(' ') : `${units[0]} +${units.length - 1}`;
  }

  protected isOpen(module: string): boolean {
    return this.open().has(module);
  }

  protected toggle(module: string): void {
    this.open.update(current => {
      const next = new Set(current);
      if (next.has(module)) next.delete(module); else next.add(module);
      return next;
    });
  }

  /**
   * Sections of a module this role may read.
   *
   * A module is not one thing. Merchandising holds the T&A board a General
   * Manager runs the floor from and the costing sheets that carry the quoted
   * price — so the grant is per section, and the rail must not offer a screen
   * the API would refuse. The backend still decides; this only saves a
   * wasted navigation.
   *
   * A direct membership check, not an inferred "has this been narrowed at
   * all" guess: `authoritiesFor()` always issues an explicit `_READ` for
   * every section this role may actually open, for every module it visits —
   * an owner's full access and a narrowed role's partial access look the
   * same here, a list of what is actually granted.
   */
  protected visibleSections(m: NavModule): NavSection[] {
    const granted = this.auth.user()?.authorities ?? [];
    return m.sections.filter(sec =>
      granted.includes(`${m.module}_${sectionCode(sec.name)}_READ`));
  }

  protected count(m: NavModule): number {
    return this.visibleSections(m).reduce((n, s) => n + s.screens.length, 0);
  }

  /**
   * The object archetype is a single record with no register to list it —
   * its only real route is `path/:id`. Linking the rail at the bare path
   * 404s and falls through to the wildcard route, which lands back on
   * Merchandising no matter what was clicked. Opening record `1` is the
   * closest a menu link can get to "open this screen" for a detail view.
   */
  protected screenPath(s: { path: string; archetype: string }): string {
    return s.archetype === 'object' ? `${s.path}/1` : s.path;
  }
}
