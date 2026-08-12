import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface LineColumn {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'check';
  options?: string[];
  width?: string;
  align?: 'r';
  placeholder?: string;
}

export interface HeaderField {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'check';
  options?: string[];
  required?: boolean;
  immutable?: boolean;
  hint?: string;
  placeholder?: string;
}

type Row = Record<string, unknown>;

/**
 * The editor behind M1.3 and M1.4 — a header plus an ordered list of lines.
 *
 * A TNA template is fourteen milestones and a costing template is a sheet of
 * thirty rows, and both are only correct as a whole: a milestone without its
 * predecessor, or a costing without its CM line, is not a partial answer but a
 * wrong one. So nothing is sent until Save, and Save sends everything. That is
 * the prototype's wizard promise — "nothing is committed until the last step" —
 * kept without making a user walk four screens to change one rate.
 *
 * Sequence numbers are managed here rather than typed. Asking a merchandiser to
 * renumber thirty rows after inserting one at the top is how sheets end up with
 * two line sevens.
 */
@Component({
  selector: 'app-line-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="sheet-backdrop" (click)="cancelled.emit()"></div>

    <section class="sheet wide" role="dialog" aria-modal="true" [attr.aria-label]="title">
      <header class="sheet-head">
        <h2>{{ title }}</h2>
        <button type="button" class="btn" (click)="cancelled.emit()" aria-label="Close">✕</button>
      </header>

      <p class="error" *ngIf="error">{{ error }}</p>

      <div class="fields">
        <label class="field" *ngFor="let f of headerFields">
          <span class="label">
            {{ f.label }}<span class="req" *ngIf="f.required" aria-hidden="true"> *</span>
          </span>

          <select *ngIf="f.type === 'select'"
                  [ngModel]="head()[f.key] ?? ''" (ngModelChange)="setHead(f.key, $event)"
                  [disabled]="!!f.immutable && existing">
            <option value="">—</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <input *ngIf="f.type === 'check'" type="checkbox"
                 [ngModel]="!!head()[f.key]" (ngModelChange)="setHead(f.key, $event)" />

          <input *ngIf="f.type === 'text' || f.type === 'number'" [type]="f.type"
                 [ngModel]="head()[f.key] ?? ''" (ngModelChange)="setHead(f.key, $event)"
                 [placeholder]="f.placeholder ?? ''"
                 [readonly]="!!f.immutable && existing" />

          <small class="hint" *ngIf="f.immutable && existing">
            Fixed once the template exists — records made from it refer to this code.
          </small>
          <small class="hint" *ngIf="f.hint && !(f.immutable && existing)">{{ f.hint }}</small>
          <small class="fielderr" *ngIf="fieldErrors[f.key] as fe">{{ fe }}</small>
        </label>
      </div>

      <div class="linehead">
        <strong>{{ lineNoun }}s</strong>
        <span class="count">{{ lines().length }}</span>
        <button type="button" class="btn" (click)="addLine()">+ Add {{ lineNoun }}</button>
      </div>

      <div class="linescroll">
        <table class="grid lines">
          <thead>
            <tr>
              <th class="right">#</th>
              <th *ngFor="let c of lineColumns" [class.right]="c.align === 'r'"
                  [style.min-width]="c.width ?? 'auto'">{{ c.label }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let line of lines(); let i = index">
              <td class="right ident">{{ i + 1 }}</td>

              <td *ngFor="let c of lineColumns" [class.right]="c.align === 'r'">
                <select *ngIf="c.type === 'select'"
                        [ngModel]="line[c.key] ?? ''" (ngModelChange)="setLine(i, c.key, $event)">
                  <option value="">—</option>
                  <option *ngFor="let o of c.options" [value]="o">{{ o }}</option>
                </select>

                <input *ngIf="c.type === 'check'" type="checkbox"
                       [ngModel]="!!line[c.key]" (ngModelChange)="setLine(i, c.key, $event)" />

                <input *ngIf="c.type === 'text' || c.type === 'number'" [type]="c.type"
                       [ngModel]="line[c.key] ?? ''" (ngModelChange)="setLine(i, c.key, $event)"
                       [placeholder]="c.placeholder ?? ''" />
              </td>

              <td class="rowactions">
                <button type="button" class="btn" [disabled]="i === 0"
                        (click)="move(i, -1)" aria-label="Move up">↑</button>
                <button type="button" class="btn" [disabled]="i === lines().length - 1"
                        (click)="move(i, 1)" aria-label="Move down">↓</button>
                <button type="button" class="btn" (click)="removeLine(i)"
                        aria-label="Remove line">✕</button>
              </td>
            </tr>

            <tr *ngIf="!lines().length">
              <td [attr.colspan]="lineColumns.length + 2" class="empty">
                No {{ lineNoun }}s yet. Add the first one.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="actions">
        <button type="button" class="btn primary" [disabled]="busy" (click)="emitSave()">
          {{ busy ? 'Saving…' : (existing ? 'Save changes' : 'Create template') }}
        </button>
        <button type="button" class="btn" [disabled]="busy" (click)="cancelled.emit()">
          Cancel
        </button>
        <span class="hint">
          Nothing is saved until you press this — the whole template goes at once.
        </span>
      </footer>
    </section>
  `,
})
export class LineEditorComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) headerFields!: HeaderField[];
  @Input({ required: true }) lineColumns!: LineColumn[];
  @Input({ required: true }) lineNoun!: string;
  @Input() header: Row = {};
  @Input() rows: Row[] = [];
  @Input() existing = false;
  @Input() busy = false;
  @Input() error: string | null = null;
  @Input() fieldErrors: Record<string, string> = {};
  /** Values a newly added line starts with, so the common case needs no typing. */
  @Input() lineDefaults: Row = {};

  @Output() save = new EventEmitter<{ header: Row; lines: Row[] }>();
  @Output() cancelled = new EventEmitter<void>();

  protected readonly head = signal<Row>({});
  protected readonly lines = signal<Row[]>([]);

  ngOnInit(): void {
    this.head.set({ ...this.header });
    this.lines.set(this.rows.map(r => ({ ...r })));
  }

  protected setHead(key: string, value: unknown): void {
    this.head.update(h => ({ ...h, [key]: value }));
  }

  protected setLine(index: number, key: string, value: unknown): void {
    this.lines.update(ls => ls.map((l, i) => (i === index ? { ...l, [key]: value } : l)));
  }

  protected addLine(): void {
    this.lines.update(ls => [...ls, { ...this.lineDefaults }]);
  }

  protected removeLine(index: number): void {
    this.lines.update(ls => ls.filter((_, i) => i !== index));
  }

  protected move(index: number, by: number): void {
    this.lines.update(ls => {
      const next = [...ls];
      const [row] = next.splice(index, 1);
      next.splice(index + by, 0, row);
      return next;
    });
  }

  /** Sequence numbers come from the order on screen, never from typing. */
  protected emitSave(): void {
    this.save.emit({
      header: this.head(),
      lines: this.lines().map((l, i) => ({ ...l, sequenceNo: i + 1 })),
    });
  }
}
