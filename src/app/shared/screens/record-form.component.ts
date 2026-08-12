import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormField, ResourceMeta } from '../../core/data/resource.registry';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { I18nService } from '../../core/i18n/i18n.service';
import { TPipe } from '../../core/i18n/t.pipe';

type Row = Record<string, unknown>;

/**
 * Add and edit, driven by the field metadata in the resource registry.
 *
 * One form serves every registered entity for the same reason one list does:
 * the difference between adding a buyer and adding a colour is the fields, not
 * the behaviour. What the form contributes beyond the fields is the part that
 * is easy to get wrong —
 *
 *   - the business key is locked once the record exists, because other records
 *     point at it by that code
 *   - fields that only apply in some cases are asked for only then, so nobody
 *     types a commission against a direct buyer and then has it refused
 *   - the server's refusal is shown as written. It names the record in the way
 *     and says what to do instead; replacing it with "Save failed" throws away
 *     the only useful thing on the screen
 */
@Component({
  selector: 'app-record-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TPipe],
  template: `
    <div class="sheet-backdrop" (click)="cancelled.emit()"></div>

    <section class="sheet" role="dialog" aria-modal="true" [attr.aria-label]="title()">
      <header class="sheet-head">
        <h2>{{ title() }}</h2>
        <button type="button" class="btn" (click)="cancelled.emit()" aria-label="Close">✕</button>
      </header>

      <p class="error" *ngIf="error() as e">{{ e }}</p>

      <div class="fields">
        <label class="field" *ngFor="let f of visibleFields()">
          <span class="label">
            {{ f.label | t }}<span class="req" *ngIf="f.required" aria-hidden="true"> *</span>
          </span>

          <select *ngIf="f.type === 'select'"
                  [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"
                  [disabled]="isLocked(f)">
            <option value="">—</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <textarea *ngIf="f.type === 'textarea'" rows="2"
                    [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"
                    [placeholder]="f.placeholder ?? ''"></textarea>

          <input *ngIf="f.type !== 'select' && f.type !== 'textarea'"
                 [type]="f.type"
                 [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"
                 [placeholder]="f.placeholder ?? ''"
                 [readonly]="isLocked(f)" />

          <small class="hint" *ngIf="isLocked(f)">
            {{ 'Fixed once the record exists — other records refer to it by this code.' | t }}
          </small>
          <small class="hint" *ngIf="!isLocked(f) && f.hint">{{ f.hint }}</small>
          <small class="fielderr" *ngIf="fieldErrors()[f.key] as fe">{{ fe }}</small>
        </label>
      </div>

      <footer class="actions">
        <button type="button" class="btn primary" [disabled]="busy()" (click)="save()">
          {{ busy() ? ('Saving…' | t)
             : (record ? ('Save changes' | t) : ('+ ' + i18n.t(meta.noun ?? 'record'))) }}
        </button>
        <button type="button" class="btn" [disabled]="busy()" (click)="cancelled.emit()">
          {{ 'Cancel' | t }}
        </button>
      </footer>
    </section>
  `,
})
export class RecordFormComponent implements OnInit {
  @Input({ required: true }) entity!: string;
  @Input({ required: true }) meta!: ResourceMeta;
  /** Null when adding. */
  @Input() record: Row | null = null;

  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  private readonly data = inject(ScreenDataService);
  protected readonly i18n = inject(I18nService);

  protected readonly draft = signal<Row>({});
  protected readonly error = signal<string | null>(null);
  protected readonly fieldErrors = signal<Record<string, string>>({});
  protected readonly busy = signal(false);

  ngOnInit(): void {
    const start: Row = {};
    for (const f of this.meta.fields ?? []) {
      start[f.key] = this.record?.[f.key] ?? '';
    }
    this.draft.set(start);
  }

  protected title(): string {
    const noun = this.i18n.t(this.meta.noun ?? 'record');
    return this.record ? `${this.i18n.t('Edit')} ${noun}` : `+ ${noun}`;
  }

  /** A field with a condition is asked for only when the condition holds. */
  protected visibleFields(): FormField[] {
    return (this.meta.fields ?? []).filter(f =>
      !f.showWhen || f.showWhen.equals.includes(String(this.draft()[f.showWhen.field] ?? '')));
  }

  protected isLocked(field: FormField): boolean {
    return !!field.immutable && !!this.record;
  }

  protected value(key: string): unknown {
    return this.draft()[key] ?? '';
  }

  protected set(key: string, value: unknown): void {
    this.draft.update(d => ({ ...d, [key]: value }));
  }

  protected save(): void {
    this.busy.set(true);
    this.error.set(null);
    this.fieldErrors.set({});

    const body: Row = {};
    for (const f of this.visibleFields()) {
      const raw = this.draft()[f.key];
      if (raw === '' || raw === null || raw === undefined) {
        continue;                       // an omitted field is left alone, not blanked
      }
      body[f.key] = f.type === 'number' ? Number(raw) : raw;
    }
    // A field that stopped applying — a commission on a buyer switched back to
    // DIRECT — has to be cleared, or the server refuses the contradiction.
    for (const f of this.meta.fields ?? []) {
      if (f.showWhen && !this.visibleFields().includes(f) && this.record?.[f.key] != null) {
        body[f.key] = null;
      }
    }

    const done = {
      next: () => { this.busy.set(false); this.saved.emit(); },
      error: (err: any) => {
        this.busy.set(false);
        this.fieldErrors.set(err?.error?.fieldErrors ?? {});
        this.error.set(err?.error?.message
          ?? 'This could not be saved. Check the fields marked below.');
      },
    };

    if (this.record) {
      // The version the user was looking at. The server refuses an edit built
      // on a version someone else has already replaced, rather than letting
      // the second save silently discard the first.
      body['version'] = this.record['version'];
      this.data.update(this.entity, this.record['id'] as number, body).subscribe(done);
    } else {
      this.data.create(this.entity, body).subscribe(done);
    }
  }
}
