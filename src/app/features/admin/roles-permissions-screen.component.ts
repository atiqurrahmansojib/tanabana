import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { NAV } from '../../core/nav/nav.data';
import { sectionCode } from '../../core/nav/landing';
import { authoritiesFor } from '../../core/auth/authorities';
import { Role } from '../../core/models/role.model';
import { ScreenHeaderComponent } from '../../shared/screens/screen-header.component';
import { TPipe } from '../../core/i18n/t.pipe';

interface GrantRow {
  role: Role;
  moduleLabel: string;
  sections: string;
  owner: boolean;
}

const ALL_ROLES: Role[] = ['OWNER', 'MERCH', 'SCM', 'STORE', 'IE', 'GM', 'QC', 'COMM', 'FIN', 'HR',
  'DYE', 'ADMIN', 'FLOOR', 'BUYERP', 'SUPP'];

/**
 * M13.4 Roles & Permissions.
 *
 * The generic form archetype could not serve this screen honestly: its
 * fields ("Role name", "Description", "Module name") had nothing behind
 * them, so the mock generator filled them with fabricated job titles and
 * random notes — a screen that looked like access configuration and was
 * not. There is nothing to configure here in the first place: access is
 * decided in code, by `section-grants.ts` (reasoned from how a Bangladeshi
 * RMG factory actually separates duties) and read at sign-in by
 * `authoritiesFor()`. This screen's honest job is to show that decision,
 * not pretend to be a form for changing it.
 *
 * Every row here is derived the same way a real login's authorities are —
 * this table cannot drift from what the app actually grants, because it
 * calls the same function.
 */
@Component({
  selector: 'app-roles-permissions-screen',
  standalone: true,
  imports: [CommonModule, ScreenHeaderComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <p class="hint" style="margin-bottom: 12px;">
        {{ 'Read-only. Access is decided in code (section-grants.ts) and shown here exactly '
         + 'as authoritiesFor() computes it at sign-in — not a form that changes it.' | t }}
      </p>

      <table class="grid">
        <thead>
          <tr>
            <th>{{ 'Role' | t }}</th>
            <th>{{ 'Module' | t }}</th>
            <th>{{ 'Sections granted' | t }}</th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngFor="let role of roles">
            <tr *ngFor="let row of grantsFor(role); let first = first">
              <td class="ident">{{ first ? role : '' }}</td>
              <td>{{ row.moduleLabel }}</td>
              <td>
                {{ row.sections }}
                <span class="pill" *ngIf="row.owner" data-state="ACTIVE" style="margin-left: 6px;">
                  {{ 'owner — write' | t }}
                </span>
              </td>
            </tr>
            <tr *ngIf="!grantsFor(role).length">
              <td class="ident">{{ role }}</td>
              <td colspan="2" class="empty">
                {{ 'No modules — a separate app (shop-floor or external portal), not this ERP.' | t }}
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </section>
  `,
})
export class RolesPermissionsScreenComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly roles = ALL_ROLES;

  /**
   * One row per module this role can open, in `NAV` order. Built from the
   * exact authority strings `authoritiesFor()` issues — a module appears
   * only if `${module}_READ` is granted, and "owner — write" only if
   * `${module}_WRITE` is too, the same checks `canWrite()` makes on every
   * real screen.
   */
  protected grantsFor(role: Role): GrantRow[] {
    const granted = authoritiesFor(role);
    const rows: GrantRow[] = [];
    for (const m of NAV) {
      if (!granted.includes(`${m.module}_READ`)) continue;
      const sections = m.sections
        .filter(s => granted.includes(`${m.module}_${sectionCode(s.name)}_READ`))
        .map(s => s.name);
      rows.push({
        role,
        moduleLabel: m.label,
        sections: sections.join(', '),
        owner: granted.includes(`${m.module}_WRITE`),
      });
    }
    return rows;
  }
}
