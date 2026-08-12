import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Column, ScreenMeta } from '../../core/models/screen.model';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { resourceFor } from '../../core/data/resource.registry';
import { ScreenHeaderComponent } from './screen-header.component';
import { Kpi, KpiBandComponent } from './kpi-band.component';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * The board archetype — a monitoring screen, not a register. Every board
 * screen in the information architecture routes here; the difference
 * between them lives in the route's `data`.
 *
 * There is nothing to drill into from a board (most carry no `/:id` route),
 * so unlike the list archetype this shows figures and a read-only recent
 * table, never a row click or an add button.
 */
@Component({
  selector: 'app-board-screen',
  standalone: true,
  imports: [CommonModule, ScreenHeaderComponent, KpiBandComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <app-kpi-band [kpis]="kpis()" />

    <section class="panel">
      <div class="toolbar">
        <span class="count">{{ meta()?.title }}</span>
      </div>
      <table class="grid">
        <thead>
          <tr><th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()">
            <td *ngFor="let c of columns()" [class.right]="c.align === 'r'">
              <span class="pill" *ngIf="c.type === 'status'" [attr.data-state]="row[c.key]">
                {{ row[c.key] }}
              </span>
              <ng-container *ngIf="c.type !== 'status'">{{ row[c.key] ?? '—' }}</ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && !rows().length">
            <td [attr.colspan]="columns().length || 1" class="empty">
              {{ 'Nothing to show for the current search and unit scope.' | t }}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class BoardScreenComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(ScreenDataService);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly columns = signal<Column[]>([]);
  protected readonly rows = signal<Record<string, unknown>[]>([]);
  protected readonly kpis = signal<Kpi[]>([]);
  protected readonly loading = signal(false);

  ngOnInit(): void {
    const meta = this.meta();
    if (!meta) return;

    const resource = resourceFor(meta.entity);
    const columns = (resource?.columns ?? []).slice(0, 7);
    this.columns.set(columns);

    this.loading.set(true);
    this.data.list<Record<string, unknown>>(meta.entity, { page: 0, size: 200 }).subscribe(page => {
      this.loading.set(false);
      this.rows.set(page.content.slice(0, 8));

      const tiles: Kpi[] = [{ label: 'Records in scope', value: page.totalElements, lead: true }];
      const numericCols = columns.filter(c =>
        c.type === 'num' || c.type === 'money' || c.type === 'pct' || c.type === 'qty');

      if (numericCols.length) {
        for (const c of numericCols.slice(0, 3)) {
          const values = page.content.map(r => Number(r[c.key]) || 0);
          const avg = values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
          tiles.push({
            label: c.label,
            value: c.type === 'pct' ? `${avg.toFixed(1)}%`
              : c.type === 'money' ? avg.toLocaleString(undefined, { maximumFractionDigits: 2 })
              : Math.round(avg).toLocaleString(),
          });
        }
      } else if (resource?.statuses?.length) {
        for (const status of resource.statuses.slice(0, 3)) {
          const count = page.content.filter(r => r['status'] === status).length;
          tiles.push({ label: status, value: count,
            tone: status === 'Overdue' || status === 'At risk' ? 'warn' : undefined });
        }
      }
      this.kpis.set(tiles.slice(0, 4));
    });
  }
}
