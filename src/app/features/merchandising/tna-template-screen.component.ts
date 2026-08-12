import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { MockTemplatesService, Preview, TnaTask, TnaTemplate } from '../../core/data/mock-templates.service';
import { ScreenHeaderComponent } from '../../shared/screens/screen-header.component';
import { HeaderField, LineColumn, LineEditorComponent }
  from '../../shared/screens/line-editor.component';
import { AuthService } from '../../core/auth/auth.service';
import { ExportFormat, exportAs } from '../../core/data/export';
import { ExportMenuComponent } from '../../shared/screens/export-menu.component';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * M1.3 TNA Template Builder.
 *
 * The generic wizard could not serve this screen. A Time and Action template is
 * not a form with steps — it is a plan, and the only way to know whether a plan
 * is any good is to date it against a real order and look at where the
 * milestones land. So the screen is the template, its milestones, and a preview
 * that asks the server for the dates rather than computing them here: the
 * offsets and the refusals are business rules, and they belong on one side of
 * the wire only.
 */
@Component({
  selector: 'app-tna-template-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, ScreenHeaderComponent, LineEditorComponent,
            ExportMenuComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <div class="toolbar">
        <select class="filter" [ngModel]="selectedId()" (ngModelChange)="select(+$event)"
                aria-label="Template">
          <option *ngFor="let t of templates()" [value]="t.id">
            {{ t.templateCode }} — {{ t.templateName }}
          </option>
        </select>
        <span class="pill" *ngIf="selected() as s" [attr.data-state]="s.status">{{ s.status }}</span>
        <span class="pill" *ngIf="selected()?.isDefault">DEFAULT</span>
        <span class="scope" *ngIf="selected() as s">
          <span class="pill">{{ s.productType }}</span>
          <span class="pill" [class.any]="!s.buyerCode">
            {{ s.buyerCode ? ('Buyer' | t) + ': ' + s.buyerCode : ('All buyers' | t) }}
          </span>
        </span>
        <span class="count" *ngIf="selected() as s">
          {{ s.totalTasks }} {{ 'milestones' | t }}
        </span>

        <app-export-menu [disabled]="!selected()" (chosen)="download($event)" />
        <ng-container *ngIf="canWrite()">
          <button type="button" class="btn" [disabled]="!selected()" (click)="edit()">Edit</button>
          <button type="button" class="btn" [disabled]="!selected()" (click)="remove()">
            Remove
          </button>
          <button type="button" class="btn primary" (click)="add()">New template</button>
        </ng-container>
      </div>

      <p class="error" *ngIf="error() as e">{{ e }}</p>

      <table class="grid" *ngIf="selected() as s">
        <thead>
          <tr>
            <th class="right">#</th>
            <th>Milestone</th>
            <th>Process</th>
            <th>Owner</th>
            <th>Approval</th>
            <th>Anchored to</th>
            <th class="right">Offset</th>
            <th class="right">After</th>
            <th>Critical</th>
            <th *ngIf="preview()">Falls on</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let t of s.tasks">
            <td class="right ident">{{ t.sequenceNo }}</td>
            <td>{{ t.taskName }}</td>
            <td><span class="pill">{{ t.taskProcess }}</span></td>
            <td class="ident">{{ t.responsibleRole }}</td>
            <td>
              <span class="pill" *ngIf="t.approvalNature" [attr.data-state]="t.approvalNature">
                {{ t.approvalNature }}
              </span>
              <span *ngIf="!t.approvalNature">—</span>
            </td>
            <td class="ident">{{ t.offsetAnchor === 'SHIP_DATE' ? 'Ship date' : 'Order start' }}</td>
            <td class="right">{{ offsetLabel(t) }}</td>
            <td class="right ident">{{ t.predecessorSequenceNo ?? '—' }}</td>
            <td>{{ t.isCriticalPath ? '●' : '' }}</td>
            <td class="date" *ngIf="preview()">{{ deadlineFor(t.sequenceNo) ?? '—' }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <app-line-editor
      *ngIf="editorOpen()"
      [title]="editing() ? 'Edit TNA template' : 'New TNA template'"
      [headerFields]="headerFields"
      [lineColumns]="lineColumns"
      lineNoun="milestone"
      [header]="editorHeader()"
      [rows]="editorLines()"
      [existing]="!!editing()"
      [busy]="saving()"
      [error]="saveError()"
      [fieldErrors]="saveFieldErrors()"
      [lineDefaults]="{ offsetAnchor: 'ORDER_START', offsetDays: 0, responsibleRole: 'MERCH', taskProcess: 'ORDER', isCriticalPath: false }"
      (save)="commit($event)"
      (cancelled)="closeEditor()" />

    <section class="panel">
      <div class="toolbar">
        <label class="label" for="start">Order start</label>
        <input id="start" type="date" [ngModel]="orderStart()" (ngModelChange)="orderStart.set($event)" />
        <label class="label" for="ship">Ship date</label>
        <input id="ship" type="date" [ngModel]="shipDate()" (ngModelChange)="shipDate.set($event)" />
        <button class="btn primary" type="button" (click)="runPreview()">Date this plan</button>
        <span class="count" *ngIf="preview() as p">
          {{ p.leadTimeDays }} days from order to shipment
        </span>
      </div>

      <p class="error" *ngIf="previewError() as e">{{ e }}</p>
      <p class="load" *ngIf="!preview() && !previewError()">
        Enter an order start and a ship date to see where every milestone lands.
        Nothing is saved — this is the schedule the order would run to.
      </p>
    </section>
  `,
})
export class TnaTemplateScreenComponent implements OnInit {
  private readonly templatesSvc = inject(MockTemplatesService);
  private readonly route = inject(ActivatedRoute);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly templates = signal<TnaTemplate[]>([]);
  protected readonly selectedId = signal<number | null>(null);
  protected readonly selected = signal<TnaTemplate | null>(null);
  protected readonly preview = signal<Preview | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly previewError = signal<string | null>(null);

  protected readonly orderStart = signal('');
  protected readonly shipDate = signal('');

  private readonly auth = inject(AuthService);

  protected readonly editorOpen = signal(false);
  protected readonly editing = signal<TnaTemplate | null>(null);
  protected readonly editorHeader = signal<Record<string, unknown>>({});
  protected readonly editorLines = signal<Record<string, unknown>[]>([]);
  protected readonly saving = signal(false);
  protected readonly saveError = signal<string | null>(null);
  protected readonly saveFieldErrors = signal<Record<string, string>>({});

  protected readonly headerFields: HeaderField[] = [
    { key: 'templateCode', label: 'Template code', type: 'text', required: true,
      immutable: true, placeholder: 'TNA-KNIT-90' },
    { key: 'templateName', label: 'Template name', type: 'text', required: true,
      placeholder: 'Knit basic — 90 day' },
    { key: 'productType', label: 'Product type', type: 'text', required: true,
      placeholder: 'KNIT_TOP' },
    { key: 'buyerCode', label: 'Buyer code', type: 'text',
      hint: 'Leave blank to serve every buyer for this product type.' },
    { key: 'isDefault', label: 'Default for this product type', type: 'check',
      hint: 'Only one template can be the default — the order flow would otherwise guess.' },
    { key: 'status', label: 'Status', type: 'select', options: ['ACTIVE', 'ARCHIVED'] },
  ];

  protected readonly lineColumns: LineColumn[] = [
    { key: 'taskName', label: 'Milestone', type: 'text', width: '210px' },
    { key: 'taskProcess', label: 'Process', type: 'select', width: '120px',
      options: ['ORDER', 'COSTING', 'FABRIC', 'TRIM', 'APPROVAL', 'SAMPLE',
                'CUTTING', 'SEWING', 'QUALITY', 'COMPLY', 'SHIP'] },
    { key: 'responsibleRole', label: 'Owner', type: 'select', width: '100px',
      options: ['MERCH', 'SCM', 'STORE', 'IE', 'GM', 'QC', 'COMM', 'FIN', 'HR', 'DYE', 'ADMIN'] },
    { key: 'approvalNature', label: 'Approval', type: 'select', width: '110px',
      options: ['BUYER', 'INTERNAL'] },
    { key: 'offsetAnchor', label: 'Anchored to', type: 'select', width: '130px',
      options: ['ORDER_START', 'SHIP_DATE'] },
    { key: 'offsetDays', label: 'Offset (days)', type: 'number', align: 'r', width: '110px' },
    { key: 'predecessorSequenceNo', label: 'After #', type: 'number', align: 'r', width: '80px' },
    { key: 'isCriticalPath', label: 'Critical', type: 'check', width: '70px' },
  ];

  ngOnInit(): void {
    this.templatesSvc.listTna().subscribe({
      next: page => {
        this.templates.set(page.content);
        if (page.content.length) {
          this.selectedId.set(page.content[0].id);
          this.selected.set(page.content[0]);
        }
      },
      error: err => this.error.set(err?.error?.message ?? 'The templates could not be loaded.'),
    });
  }

  protected select(id: number): void {
    this.selectedId.set(id);
    this.selected.set(this.templates().find(t => t.id === id) ?? null);
    this.preview.set(null);            // dates belong to the template they came from
    this.previewError.set(null);
  }

  protected runPreview(): void {
    const id = this.selectedId();
    if (!id || !this.orderStart() || !this.shipDate()) {
      this.previewError.set('Both an order start and a ship date are needed.');
      return;
    }
    this.previewError.set(null);
    this.templatesSvc.instantiate(id, {
      orderStartDate: this.orderStart(),
      shipDate: this.shipDate(),
    }).subscribe({
      next: p => this.preview.set(p),
      error: err => {
        this.preview.set(null);
        // The server's refusal is the useful message — it names the milestone
        // that does not fit and how much lead time the plan needs.
        this.previewError.set(err?.error?.message ?? 'This plan could not be dated.');
      },
    });
  }

  protected canWrite(): boolean {
    return this.auth.has('M1_MASTER_WRITE');
  }

  protected add(): void {
    this.editing.set(null);
    this.editorHeader.set({ status: 'ACTIVE', isDefault: false });
    this.editorLines.set([]);
    this.openEditor();
  }

  protected edit(): void {
    const s = this.selected();
    if (!s) return;
    this.editing.set(s);
    this.editorHeader.set({
      templateCode: s.templateCode, templateName: s.templateName,
      productType: s.productType, buyerCode: s.buyerCode ?? '',
      isDefault: s.isDefault, status: s.status,
    });
    this.editorLines.set(s.tasks.map(t => ({ ...t })));
    this.openEditor();
  }

  private openEditor(): void {
    this.saveError.set(null);
    this.saveFieldErrors.set({});
    this.editorOpen.set(true);
  }

  protected closeEditor(): void {
    this.editorOpen.set(false);
  }

  protected commit(payload: { header: Record<string, unknown>; lines: Record<string, unknown>[] }): void {
    this.saving.set(true);
    this.saveError.set(null);
    this.saveFieldErrors.set({});

    const body = {
      ...payload.header,
      buyerCode: payload.header['buyerCode'] || null,
      tasks: payload.lines.map(l => ({
        sequenceNo: l['sequenceNo'],
        taskName: l['taskName'],
        taskProcess: l['taskProcess'],
        offsetAnchor: l['offsetAnchor'],
        offsetDays: Number(l['offsetDays'] ?? 0),
        responsibleRole: l['responsibleRole'],
        approvalNature: l['approvalNature'] || null,
        predecessorSequenceNo: l['predecessorSequenceNo']
          ? Number(l['predecessorSequenceNo']) : null,
        isCriticalPath: !!l['isCriticalPath'],
      })),
    };

    // Same concurrency guard as the record form: send the version the editor
    // was opened on, so a template someone else changed meanwhile is refused
    // rather than overwritten.
    const existing = this.editing();
    if (existing) {
      (body as Record<string, unknown>)['version'] = existing.version;
    }

    this.templatesSvc.saveTnaTemplate(existing?.id ?? null, body).subscribe({
      next: () => { this.saving.set(false); this.closeEditor(); this.reload(); },
      error: err => {
        this.saving.set(false);
        this.saveFieldErrors.set(err?.error?.fieldErrors ?? {});
        // The server's refusal names the milestone that does not fit and says
        // what to change. That is the useful sentence, so it is shown as is.
        this.saveError.set(err?.error?.message ?? 'This template could not be saved.');
      },
    });
  }

  protected remove(): void {
    const s = this.selected();
    if (!s) return;
    if (!confirm(`Remove ${s.templateCode} — ${s.templateName}?`)) return;
    this.templatesSvc.removeTna(s.id).subscribe({
      next: () => this.reload(),
      error: err => this.error.set(err?.error?.message ?? 'This template could not be removed.'),
    });
  }

  /** Sends the plan as a sheet, with the dated deadlines when they exist. */
  protected download(format: ExportFormat): void {
    const s = this.selected();
    if (!s) return;
    const columns = [
      { key: 'sequenceNo', label: '#' },
      { key: 'taskName', label: 'Milestone' },
      { key: 'taskProcess', label: 'Process' },
      { key: 'responsibleRole', label: 'Owner' },
      { key: 'approvalNature', label: 'Approval' },
      { key: 'offsetAnchor', label: 'Anchored to' },
      { key: 'offsetDays', label: 'Offset (days)' },
      { key: 'predecessorSequenceNo', label: 'After' },
      { key: 'isCriticalPath', label: 'Critical path' },
      { key: 'deadline', label: 'Falls on' },
    ];
    const rows = s.tasks.map(t => ({
      ...t, deadline: this.deadlineFor(t.sequenceNo) ?? '',
    }));
    void exportAs(format, {
      title: `${s.templateCode} — ${s.templateName}`,
      columns, rows,
      subtitle: `${s.productType} · ${s.totalTasks} milestones`,
    });
  }

  private reload(): void {
    const keep = this.selectedId();
    this.templatesSvc.listTna().subscribe({
      next: page => {
        this.templates.set(page.content);
        const found = page.content.find(t => t.id === keep) ?? page.content[0] ?? null;
        this.selectedId.set(found?.id ?? null);
        this.selected.set(found);
        this.preview.set(null);
      },
    });
  }

  protected offsetLabel(task: TnaTask): string {
    if (task.offsetDays === 0) return 'on the day';
    return task.offsetDays > 0
      ? `+${task.offsetDays} d`
      : `${Math.abs(task.offsetDays)} d before`;
  }

  protected deadlineFor(sequenceNo: number): string | undefined {
    return this.preview()?.tasks.find(t => t.sequenceNo === sequenceNo)?.deadline;
  }
}
