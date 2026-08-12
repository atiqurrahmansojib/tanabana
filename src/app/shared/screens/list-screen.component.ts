import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Column, ScreenMeta } from '../../core/models/screen.model';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { ResourceMeta, resourceFor } from '../../core/data/resource.registry';
import { ExportFormat, exportAs } from '../../core/data/export';
import { AuthService } from '../../core/auth/auth.service';
import { ScreenHeaderComponent } from './screen-header.component';
import { RecordFormComponent } from './record-form.component';
import { Kpi, KpiBandComponent } from './kpi-band.component';
import { ExportMenuComponent } from './export-menu.component';
import { I18nService } from '../../core/i18n/i18n.service';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * The list archetype. Every list screen in the information architecture routes
 * here; the difference between them lives in the route's `data` and in the
 * resource registry.
 *
 * A registered entity gets labelled columns, a status filter and typed
 * formatting. An unregistered one falls back to the keys of the first row,
 * which is enough to see that a screen works and not enough to hand to a user.
 */
@Component({
  selector: 'app-list-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ScreenHeaderComponent, RecordFormComponent,
            KpiBandComponent, ExportMenuComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <app-kpi-band [kpis]="kpis()" />

    <section class="panel">
      <div class="toolbar">
        <input
          type="search"
          class="search"
          [ngModel]="term()"
          (ngModelChange)="onSearch($event)"
          [attr.aria-label]="'Search ' + (meta()?.title ?? 'records')"
          [placeholder]="'Search…' | t" />

        <select
          *ngIf="statuses().length"
          class="filter"
          [ngModel]="status()"
          (ngModelChange)="onStatus($event)"
          aria-label="Filter by status">
          <option value="">{{ 'All statuses' | t }}</option>
          <option *ngFor="let s of statuses()" [value]="s">{{ s }}</option>
        </select>

        <span class="count" *ngIf="!loading()">{{ total() }} {{ 'record(s)' | t }}</span>

        <app-export-menu [disabled]="!rows().length" [busy]="exporting()"
                         (chosen)="download($event)" />

        <button type="button" class="btn primary" *ngIf="canWrite()" (click)="add()">
          + {{ resource()?.noun ?? 'record' | t }}
        </button>
      </div>

      <p class="error" *ngIf="error() as e">{{ e }}</p>

      <table class="grid">
        <thead>
          <tr>
            <th *ngIf="canWrite()" class="rowactions"></th>
            <th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()" (click)="open(row)" tabindex="0">
            <td class="rowactions" *ngIf="canWrite()" (click)="$event.stopPropagation()">
              <button type="button" class="btn" (click)="edit(row)">{{ 'Edit' | t }}</button>
              <button type="button" class="btn" (click)="confirmRemove(row)">
                {{ 'Remove' | t }}
              </button>
            </td>
            <td *ngFor="let c of columns()"
                [class.right]="c.align === 'r'"
                [class.ident]="c.type === 'ident'">
              <ng-container [ngSwitch]="c.type">
                <span *ngSwitchCase="'status'" class="pill"
                      [attr.data-state]="row[c.key]">{{ row[c.key] }}</span>

                <!-- A colour is recognised by eye long before it is read. -->
                <span *ngSwitchCase="'swatch'" class="swatch-cell">
                  <span class="swatch"
                        [style.background]="asText(row[c.key]) || 'transparent'"
                        [class.none]="!row[c.key]"></span>
                  {{ row[c.key] ?? '—' }}
                </span>

                <ng-container *ngSwitchDefault>{{ row[c.key] ?? '—' }}</ng-container>
              </ng-container>
            </td>
          </tr>
          <tr *ngIf="!loading() && rows().length === 0">
            <td [attr.colspan]="(columns().length || 1) + (canWrite() ? 1 : 0)" class="empty">
              {{ 'Nothing to show for the current search and unit scope.' | t }}
            </td>
          </tr>
        </tbody>
      </table>

      <p class="error" *ngIf="removeError() as e">{{ e }}</p>

      <div class="pager" *ngIf="pages() > 1">
        <button type="button" [disabled]="page() === 0" (click)="goto(page() - 1)">
          {{ 'Previous' | t }}
        </button>
        <span>Page {{ page() + 1 }} of {{ pages() }}</span>
        <button type="button" [disabled]="page() + 1 >= pages()" (click)="goto(page() + 1)">{{ 'Next' | t }}</button>
      </div>
    </section>

    <app-record-form
      *ngIf="editing() !== undefined"
      [entity]="meta()!.entity"
      [meta]="resource()!"
      [record]="editing()!"
      (saved)="afterSave()"
      (cancelled)="editing.set(undefined)" />
  `,
})
export class ListScreenComponent implements OnInit {
  private static readonly PAGE_SIZE = 25;

  protected readonly route = inject(ActivatedRoute);
  protected readonly router = inject(Router);
  protected readonly data = inject(ScreenDataService);
  private readonly auth = inject(AuthService);
  private readonly i18n = inject(I18nService);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly rows = signal<Record<string, unknown>[]>([]);
  protected readonly columns = signal<Column[]>([]);
  protected readonly statuses = signal<string[]>([]);
  protected readonly total = signal(0);
  protected readonly page = signal(0);
  protected readonly term = signal('');
  protected readonly status = signal('');
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly removeError = signal<string | null>(null);
  protected readonly exporting = signal(false);
  protected readonly kpis = signal<Kpi[]>([]);
  protected readonly resource = signal<ResourceMeta | undefined>(undefined);

  /** undefined = closed, null = adding, a row = editing that row. */
  protected readonly editing = signal<Record<string, unknown> | null | undefined>(undefined);

  protected readonly pages = computed(() =>
    Math.ceil(this.total() / ListScreenComponent.PAGE_SIZE));

  private searchTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const meta = this.meta();
    if (!meta) return;
    const resource = resourceFor(meta.entity);
    this.resource.set(resource);
    if (resource) {
      this.columns.set(resource.columns);
      this.statuses.set(resource.statuses ?? []);
    }
    this.load();
  }

  /**
   * Counts for the band, asked of the server rather than derived from the page
   * on screen — a page holds 25 rows and the answer is about all of them.
   *
   * One count query per status, each asking for a single row, so the cost is
   * the count and not the data. A status the entity does not have produces no
   * tile at all: three true tiles beat four with one invented.
   */
  private loadKpis(): void {
    const meta = this.meta();
    if (!meta) return;

    const statuses = this.statuses();
    const tiles: Kpi[] = [{
      label: this.i18n.t('Records in scope'),
      value: this.total(),
      note: this.i18n.t(this.term() || this.status()
        ? 'matching the current filter' : 'all records'),
      lead: true,
    }];

    if (!statuses.length) {
      this.kpis.set(tiles);
      return;
    }

    let pending = statuses.length;
    const counts = new Map<string, number>();
    for (const status of statuses) {
      this.data.list<Record<string, unknown>>(meta.entity, { page: 0, size: 1, status })
        .subscribe({
          next: page => counts.set(status, page.totalElements),
          error: () => counts.set(status, 0),
          complete: () => {
            if (--pending > 0) return;
            for (const status of statuses) {
              tiles.push({
                label: this.i18n.t(this.statusLabel(status)),
                value: counts.get(status) ?? 0,
                tone: this.statusTone(status),
              });
            }
            this.kpis.set(tiles.slice(0, 4));
          },
        });
    }
  }

  private statusLabel(status: string): string {
    return status.charAt(0) + status.slice(1).toLowerCase().replace(/_/g, ' ');
  }

  private statusTone(status: string): Kpi['tone'] {
    if (status === 'ACTIVE') return 'good';
    if (status === 'BLACKLISTED') return 'bad';
    if (status === 'INACTIVE' || status === 'DISCONTINUED' || status === 'ARCHIVED') return 'warn';
    return undefined;
  }

  /**
   * Whether this user may change these records.
   *
   * The API decides; this only keeps the screen from offering a button that
   * would come back 403. An entity with no write rules registered is read-only
   * for everybody, which is the safe direction to be wrong in.
   */
  protected canWrite(): boolean {
    const authority = this.resource()?.writeAuthority;
    return !!authority && !!this.resource()?.fields?.length && this.auth.has(authority);
  }

  /**
   * Exports every row the current search and filter select, not just the page
   * on screen — a merchandiser sending the buyer list means all of it. The
   * columns are the ones displayed, so the file matches what was asked for.
   */
  protected download(format: ExportFormat): void {
    const meta = this.meta();
    if (!meta) return;

    this.exporting.set(true);
    this.error.set(null);
    this.data.list<Record<string, unknown>>(meta.entity, {
      page: 0,
      size: Math.max(this.total(), ListScreenComponent.PAGE_SIZE),
      q: this.term() || undefined,
      status: this.status() || undefined,
    }).subscribe({
      next: page => {
        const filter = [this.term() && `search "${this.term()}"`,
                       this.status() && `status ${this.status()}`]
          .filter(Boolean).join(', ');
        exportAs(format, {
          title: meta.title,
          columns: this.columns(),
          rows: page.content,
          subtitle: filter ? `Filtered by ${filter}` : `${page.totalElements} records`,
        })
          .catch(() => this.error.set(this.i18n.t('This list could not be exported.')))
          .finally(() => this.exporting.set(false));
      },
      error: err => {
        this.exporting.set(false);
        this.error.set(err?.error?.message ?? 'This list could not be exported.');
      },
    });
  }

  protected add(): void {
    this.removeError.set(null);
    this.editing.set(null);
  }

  protected edit(row: Record<string, unknown>): void {
    this.removeError.set(null);
    this.editing.set(row);
  }

  protected afterSave(): void {
    this.editing.set(undefined);
    this.load();
  }

  /**
   * Removal is soft on the server and refused where the record is in use, but
   * it is still the one action a user cannot undo from this screen — so it
   * asks, naming the record rather than saying "this item".
   *
   * It asks for a reason rather than a yes. The record stays recoverable for
   * ninety days, and the only thing the person deciding whether to restore it
   * will have is this sentence — so the prompt is where the sentence gets
   * written. A confirmation box that only takes "OK" produces nothing at all,
   * and asking afterwards never happens.
   *
   * The server enforces the same rule and rejects an empty or throwaway
   * reason. This prompt is the convenience; the refusal is the control.
   */
  protected confirmRemove(row: Record<string, unknown>): void {
    const label = this.identify(row);
    const reason = prompt(
      `Remove ${label}?\n\n`
      + `It stays in the history of everything that already used it, and can be `
      + `restored for 90 days.\n\n`
      + `Why is it being removed? Whoever considers restoring it will read this.`);

    // Cancel returns null. An empty string is someone pressing OK on an empty
    // box, which is the same intent and gets the same answer.
    if (reason === null || !reason.trim()) {
      return;
    }

    this.removeError.set(null);
    this.data.remove(this.meta()!.entity, row['id'] as number, reason.trim()).subscribe({
      next: () => this.load(),
      // The server refuses a record that is in use and says what to do instead
      // — deactivate it. It also refuses a reason too short to mean anything.
      // Both messages are the useful ones, so they are shown as they arrive.
      error: err => this.removeError.set(
        err?.error?.message ?? `${label} could not be removed.`),
    });
  }

  private identify(row: Record<string, unknown>): string {
    const cols = this.columns();
    const code = cols[0] ? row[cols[0].key] : undefined;
    const name = cols[1] ? row[cols[1].key] : undefined;
    return [code, name].filter(Boolean).join(' — ') || 'this record';
  }

  /** Typing should not fire a request per keystroke. */
  protected onSearch(value: string): void {
    this.term.set(value);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => { this.page.set(0); this.load(); }, 300);
  }

  protected onStatus(value: string): void {
    this.status.set(value);
    this.page.set(0);
    this.load();
  }

  protected goto(page: number): void {
    this.page.set(page);
    this.load();
  }

  private load(): void {
    const meta = this.meta();
    if (!meta) return;

    this.loading.set(true);
    this.error.set(null);
    this.data.list<Record<string, unknown>>(meta.entity, {
      page: this.page(),
      size: ListScreenComponent.PAGE_SIZE,
      q: this.term() || undefined,
      status: this.status() || undefined,
    }).subscribe({
      next: page => {
        this.rows.set(page.content);
        this.total.set(page.totalElements);
        // Only guess at columns when the registry has nothing to say.
        if (!this.columns().length && page.content.length) {
          this.columns.set(Object.keys(page.content[0]).slice(0, 8)
            .map(key => ({ key, label: key, type: 'text' as const })));
        }
        this.loading.set(false);
        this.loadKpis();
      },
      error: err => {
        this.error.set(err?.error?.message ?? 'This list could not be loaded.');
        this.rows.set([]);
        this.total.set(0);
        this.loading.set(false);
      },
    });
  }

  /** Templates cannot narrow `unknown`; the swatch binding needs a string. */
  protected asText(value: unknown): string {
    return typeof value === 'string' ? value : '';
  }

  protected open(row: Record<string, unknown>): void {
    if (row['id'] === undefined || row['id'] === null) return;
    this.router.navigate([String(row['id'])], { relativeTo: this.route });
  }
}
