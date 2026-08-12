import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Column, ScreenMeta } from '../../core/models/screen.model';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { FormField, resourceFor } from '../../core/data/resource.registry';
import { AuthService } from '../../core/auth/auth.service';
import { ScreenHeaderComponent } from './screen-header.component';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * The form archetype — an entry sheet, submitted rather than kept open like
 * the list archetype's add form. Every form screen in the information
 * architecture routes here; the difference between them lives in the
 * route's `data` and the resource registry's `fields`.
 */
@Component({
  selector: 'app-form-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ScreenHeaderComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <p class="error" *ngIf="error() as e">{{ e }}</p>
      <p class="load" *ngIf="justSaved()">{{ 'Saved as a new record.' | t }}</p>
      <p class="hint" *ngIf="!canWrite()">
        {{ 'Your role can read this screen but not submit against it.' | t }}
      </p>

      <div class="fields">
        <label class="field" *ngFor="let f of fields()">
          <span class="label">
            {{ f.label | t }}<span class="req" *ngIf="f.required" aria-hidden="true"> *</span>
          </span>

          <select *ngIf="f.type === 'select'" [disabled]="!canWrite()"
                  [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)">
            <option value="">—</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <textarea *ngIf="f.type === 'textarea'" rows="2" [disabled]="!canWrite()"
                    [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"></textarea>

          <input *ngIf="f.type !== 'select' && f.type !== 'textarea'"
                 [type]="f.type" [disabled]="!canWrite()"
                 [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"
                 [placeholder]="f.placeholder ?? ''" />

          <small class="hint" *ngIf="f.hint">{{ f.hint }}</small>
        </label>
        <p class="hint" *ngIf="!fields().length">
          {{ 'This entity has no fields registered yet.' | t }}
        </p>
      </div>

      <footer class="actions">
        <button type="button" class="btn" [disabled]="busy()" (click)="discard()">
          {{ 'Discard' | t }}
        </button>
        <button type="button" class="btn primary"
                [disabled]="busy() || !fields().length || !canWrite()"
                (click)="submit()">
          {{ (busy() ? 'Saving…' : 'Submit for approval') | t }}
        </button>
      </footer>
    </section>

    <section class="panel" *ngIf="rows().length">
      <div class="toolbar"><span class="count">{{ 'Recent entries' | t }}</span></div>
      <table class="grid">
        <thead>
          <tr><th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()">
            <td *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ row[c.key] ?? '—' }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
})
export class FormScreenComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(ScreenDataService);
  private readonly auth = inject(AuthService);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly draft = signal<Record<string, unknown>>({});
  protected readonly fields = signal<FormField[]>([]);
  protected readonly columns = signal<Column[]>([]);
  protected readonly rows = signal<Record<string, unknown>[]>([]);
  protected readonly busy = signal(false);
  protected readonly justSaved = signal(false);
  protected readonly error = signal<string | null>(null);
  private writeAuthority: string | undefined;

  ngOnInit(): void {
    const meta = this.meta();
    if (!meta) return;
    const resource = resourceFor(meta.entity);
    this.fields.set(resource?.fields ?? []);
    this.columns.set((resource?.columns ?? []).slice(0, 6));
    this.writeAuthority = resource?.writeAuthority;
    this.load();
  }

  /** Same rule as the list and object archetypes: read is not write. */
  protected canWrite(): boolean {
    return !!this.writeAuthority && this.auth.has(this.writeAuthority);
  }

  private load(): void {
    const meta = this.meta();
    if (!meta) return;
    this.data.list<Record<string, unknown>>(meta.entity, { page: 0, size: 8 })
      .subscribe(page => this.rows.set(page.content));
  }

  protected value(key: string): unknown {
    return this.draft()[key] ?? '';
  }

  protected set(key: string, value: unknown): void {
    this.draft.update(d => ({ ...d, [key]: value }));
    this.justSaved.set(false);
  }

  protected discard(): void {
    this.draft.set({});
    this.justSaved.set(false);
    this.error.set(null);
  }

  protected submit(): void {
    const meta = this.meta();
    if (!meta || !this.canWrite()) return;
    this.busy.set(true);
    this.error.set(null);

    const body: Record<string, unknown> = {};
    for (const f of this.fields()) {
      const raw = this.draft()[f.key];
      if (raw === '' || raw === null || raw === undefined) continue;
      body[f.key] = f.type === 'number' ? Number(raw) : raw;
    }

    this.data.create(meta.entity, body).subscribe({
      next: () => {
        this.busy.set(false);
        this.justSaved.set(true);
        this.draft.set({});
        this.load();
      },
      error: () => {
        this.busy.set(false);
        this.error.set('This could not be saved.');
      },
    });
  }
}
