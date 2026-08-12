import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { FormField, ResourceMeta, resourceFor } from '../../core/data/resource.registry';
import { AuthService } from '../../core/auth/auth.service';
import { ScreenHeaderComponent } from './screen-header.component';
import { RecordFormComponent } from './record-form.component';
import { TPipe } from '../../core/i18n/t.pipe';

type Row = Record<string, unknown>;

/**
 * The object archetype — one record, in full.
 *
 * Every list promises row drill-down, and this is where a row lands. It shows
 * the whole record rather than the columns the list had room for, which is why
 * a buyer's address and phone number belong here and not in the table: they are
 * looked up when you are dealing with that one buyer, not scanned across forty.
 *
 * Print is the prototype's second action for this archetype and is not
 * decoration — a buyer sheet gets printed and put in the file, and a browser
 * print of a screen full of chrome is not that. The print stylesheet drops the
 * rail, the top bar and the buttons.
 */
@Component({
  selector: 'app-object-screen',
  standalone: true,
  imports: [CommonModule, RouterLink, ScreenHeaderComponent, RecordFormComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <div class="toolbar noprint">
        <a class="btn" [routerLink]="['..']">← {{ 'Back to the list' | t }}</a>
        <span class="count">{{ headline() }}</span>
        <button type="button" class="btn" (click)="print()">{{ 'Print' | t }}</button>
        <button type="button" class="btn primary" *ngIf="canWrite()" (click)="edit()">
          {{ 'Edit record' | t }}
        </button>
      </div>

      <p class="error" *ngIf="error() as e">{{ e }}</p>
      <p class="load" *ngIf="loading()">{{ 'Loading…' | t }}</p>

      <dl class="fields recordview" *ngIf="record() as r">
        <ng-container *ngFor="let f of fields()">
          <div class="field">
            <dt class="label">{{ f.label | t }}</dt>
            <dd [class.ident]="f.key.endsWith('Code')">{{ display(r[f.key]) }}</dd>
          </div>
        </ng-container>
      </dl>
    </section>

    <app-record-form
      *ngIf="editing()"
      [entity]="meta()!.entity"
      [meta]="resource()!"
      [record]="record()"
      (saved)="afterSave()"
      (cancelled)="editing.set(false)" />
  `,
})
export class ObjectScreenComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly data = inject(ScreenDataService);
  private readonly auth = inject(AuthService);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly record = signal<Row | null>(null);
  protected readonly resource = signal<ResourceMeta | undefined>(undefined);
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly editing = signal(false);

  ngOnInit(): void {
    const meta = this.meta();
    if (!meta) return;
    this.resource.set(resourceFor(meta.entity));
    this.load();
  }

  private load(): void {
    const meta = this.meta();
    const id = this.route.snapshot.paramMap.get('id');
    if (!meta || !id) return;

    this.loading.set(true);
    this.error.set(null);
    this.data.get<Row>(meta.entity, id).subscribe({
      next: r => { this.record.set(r); this.loading.set(false); },
      error: err => {
        this.loading.set(false);
        this.error.set(err?.error?.message ?? 'This record could not be opened.');
      },
    });
  }

  /**
   * Every field the registry knows, plus the audit trail. The list shows what
   * fits; this shows what there is.
   */
  protected fields(): { key: string; label: string }[] {
    const registered = (this.resource()?.fields ?? []).map((f: FormField) =>
      ({ key: f.key, label: f.label }));
    if (registered.length) {
      return [...registered,
        { key: 'createdBy', label: 'Created by' },
        { key: 'updatedBy', label: 'Last changed by' }];
    }
    // Nothing registered yet: show what the record actually has, so the screen
    // is still worth opening while a module is being built.
    const r = this.record();
    return r ? Object.keys(r).filter(k => k !== 'id').map(k => ({ key: k, label: k })) : [];
  }

  /** The first two columns name a record the way its list does. */
  protected headline(): string {
    const r = this.record();
    const cols = this.resource()?.columns ?? [];
    if (!r || !cols.length) return '';
    return [r[cols[0].key], cols[1] ? r[cols[1].key] : null]
      .filter(Boolean).join(' — ');
  }

  protected display(value: unknown): string {
    if (value === null || value === undefined || value === '') return '—';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  }

  protected canWrite(): boolean {
    const authority = this.resource()?.writeAuthority;
    return !!authority && !!this.resource()?.fields?.length && this.auth.has(authority);
  }

  protected edit(): void {
    this.editing.set(true);
  }

  protected afterSave(): void {
    this.editing.set(false);
    this.load();
  }

  protected print(): void {
    window.print();
  }
}
