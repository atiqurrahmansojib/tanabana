import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { CostResponse, CostingTemplate, MockTemplatesService } from '../../core/data/mock-templates.service';
import { ScreenHeaderComponent } from '../../shared/screens/screen-header.component';
import { HeaderField, LineColumn, LineEditorComponent }
  from '../../shared/screens/line-editor.component';
import { AuthService } from '../../core/auth/auth.service';
import { ExportFormat, exportAs } from '../../core/data/export';
import { ExportMenuComponent } from '../../shared/screens/export-menu.component';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * M1.4 Costing Template.
 *
 * A costing template is a sheet, and a sheet is only worth anything once it is
 * priced — so the screen is the lines plus the answer to "what does this cost
 * and what do I quote". The arithmetic is asked of the server rather than
 * repeated here: a margin taken on the cost instead of the selling price is a
 * quiet 1.3% loss, and that rule belongs on one side of the wire only.
 */
@Component({
  selector: 'app-costing-template-screen',
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
          <span class="pill" [class.any]="!s.unitCode">
            {{ s.unitCode ? ('Unit' | t) + ': ' + s.unitCode : ('All units' | t) }}
          </span>
        </span>
        <span class="count" *ngIf="selected() as s">
          {{ s.totalItems }} {{ 'lines' | t }} · {{ s.headOfficeCostPct }}% + {{ s.targetMarginPct }}%
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
            <th>Group</th>
            <th>Item</th>
            <th>UOM</th>
            <th class="right">Consumption</th>
            <th class="right">Wastage</th>
            <th class="right" *ngIf="cost()">With wastage</th>
            <th class="right">Rate</th>
            <th>Bought</th>
            <th>Supplier</th>
            <th class="right" *ngIf="cost() as c">Cost / pc ({{ c.quoteCurrency }})</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let i of s.items">
            <td class="right ident">{{ i.sequenceNo }}</td>
            <td><span class="pill">{{ i.itemGroup }}</span></td>
            <td>{{ i.itemName }}<span class="star" *ngIf="i.isMandatory" title="Required">★</span></td>
            <td class="ident">{{ i.uom }}</td>
            <td class="right num">{{ i.defaultConsumption | number: '1.4-4' }}</td>
            <td class="right num">{{ i.wastageAllowance | number: '1.1-1' }}%</td>
            <td class="right num" *ngIf="cost()">
              {{ grossFor(i.sequenceNo) | number: '1.4-4' }}
            </td>
            <td class="right num">{{ i.defaultRate | number: '1.2-4' }} {{ i.rateCurrency }}</td>
            <td><span class="pill" [attr.data-state]="i.purchaseType">{{ i.purchaseType }}</span></td>
            <td class="ident">{{ i.defaultSupplierCode ?? '—' }}</td>
            <td class="right num" *ngIf="cost()">{{ costFor(i.sequenceNo) | number: '1.4-4' }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <app-line-editor
      *ngIf="editorOpen()"
      [title]="editing() ? 'Edit costing template' : 'New costing template'"
      [headerFields]="headerFields"
      [lineColumns]="lineColumns"
      lineNoun="line"
      [header]="editorHeader()"
      [rows]="editorLines()"
      [existing]="!!editing()"
      [busy]="saving()"
      [error]="saveError()"
      [fieldErrors]="saveFieldErrors()"
      [lineDefaults]="{ itemGroup: 'TRIM', uom: 'PCS', rateCurrency: 'BDT', wastageAllowance: 2, purchaseType: 'LOCAL', defaultConsumption: 1, defaultRate: 0, isMandatory: false }"
      (save)="commit($event)"
      (cancelled)="closeEditor()" />

    <section class="panel">
      <div class="toolbar">
        <label class="label" for="style">Style</label>
        <input id="style" type="text" [ngModel]="styleNo()" (ngModelChange)="styleNo.set($event)"
               placeholder="ST-4001" />
        <label class="label" for="qty">Order qty (pcs)</label>
        <input id="qty" type="number" min="1" [ngModel]="qty()" (ngModelChange)="qty.set(+$event)" />
        <label class="label" for="fx">BDT per USD</label>
        <input id="fx" type="number" min="1" step="0.01"
               [ngModel]="fx()" (ngModelChange)="fx.set(+$event)" />
        <button class="btn primary" type="button" (click)="runCost()">Cost this sheet</button>
      </div>

      <p class="error" *ngIf="costError() as e">{{ e }}</p>

      <div class="kpis" *ngIf="cost() as c">
        <div class="kpi">
          <span class="label">Material / pc</span>
          <span class="value">{{ c.materialCostPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">CM / pc</span>
          <span class="value">{{ c.cmPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">Manufacturing / pc</span>
          <span class="value">{{ c.manufacturingCostPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">Head office / pc</span>
          <span class="value">{{ c.headOfficeCostPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">Total cost / pc</span>
          <span class="value">{{ c.totalCostPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">Quote at ({{ c.targetMarginPct }}% margin)</span>
          <span class="value">{{ c.suggestedFobPerPc | number: '1.4-4' }}</span>
        </div>
        <div class="kpi">
          <span class="label">Order value</span>
          <span class="value">{{ c.orderValue | number: '1.2-2' }} {{ c.quoteCurrency }}</span>
        </div>
      </div>

      <p class="load" *ngIf="!cost() && !costError()">
        Enter a quantity and today's exchange rate to price this sheet. Nothing is
        saved — this is what the style costs and what it has to be quoted at.
      </p>
    </section>
  `,
})
export class CostingTemplateScreenComponent implements OnInit {
  private readonly templatesSvc = inject(MockTemplatesService);
  private readonly route = inject(ActivatedRoute);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly templates = signal<CostingTemplate[]>([]);
  protected readonly selectedId = signal<number | null>(null);
  protected readonly selected = signal<CostingTemplate | null>(null);
  protected readonly cost = signal<CostResponse | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly costError = signal<string | null>(null);

  protected readonly styleNo = signal('ST-4001');
  protected readonly qty = signal(10000);
  protected readonly fx = signal(120);

  private readonly auth = inject(AuthService);

  protected readonly editorOpen = signal(false);
  protected readonly editing = signal<CostingTemplate | null>(null);
  protected readonly editorHeader = signal<Record<string, unknown>>({});
  protected readonly editorLines = signal<Record<string, unknown>[]>([]);
  protected readonly saving = signal(false);
  protected readonly saveError = signal<string | null>(null);
  protected readonly saveFieldErrors = signal<Record<string, string>>({});

  protected readonly headerFields: HeaderField[] = [
    { key: 'templateCode', label: 'Template code', type: 'text', required: true,
      immutable: true, placeholder: 'CT-KNIT-BASIC' },
    { key: 'templateName', label: 'Template name', type: 'text', required: true,
      placeholder: 'Knit basic tee' },
    { key: 'productType', label: 'Product type', type: 'text', required: true,
      placeholder: 'KNIT_TOP' },
    { key: 'buyerCode', label: 'Buyer code', type: 'text',
      hint: 'Leave blank to serve every buyer for this product type.' },
    { key: 'unitCode', label: 'Unit code', type: 'text',
      hint: 'CM differs between factories. Leave blank only if every unit '
          + 'quotes the same rate.' },
    { key: 'headOfficeCostPct', label: 'Head office cost %', type: 'number',
      hint: 'Added to the manufacturing cost.' },
    { key: 'targetMarginPct', label: 'Target margin %', type: 'number',
      hint: 'Taken on the selling price, not added to the cost — 12% means cost / 0.88.' },
    { key: 'isDefault', label: 'Default for this product type', type: 'check' },
    { key: 'status', label: 'Status', type: 'select', options: ['ACTIVE', 'ARCHIVED'] },
  ];

  protected readonly lineColumns: LineColumn[] = [
    { key: 'itemGroup', label: 'Group', type: 'select', width: '110px',
      options: ['FABRIC', 'TRIM', 'PACK', 'PROCESS', 'CM', 'OTHER'] },
    { key: 'itemName', label: 'Item', type: 'text', width: '220px' },
    { key: 'uom', label: 'UOM', type: 'select', width: '90px',
      options: ['KG', 'YDS', 'MTR', 'PCS', 'SET', 'CONE', 'DZN', 'ROLL', 'GROSS'] },
    { key: 'defaultConsumption', label: 'Consumption', type: 'number', align: 'r', width: '110px' },
    { key: 'defaultRate', label: 'Rate', type: 'number', align: 'r', width: '100px' },
    { key: 'rateCurrency', label: 'Currency', type: 'select', width: '95px',
      options: ['USD', 'BDT', 'EUR', 'GBP'] },
    { key: 'wastageAllowance', label: 'Wastage %', type: 'number', align: 'r', width: '100px' },
    { key: 'purchaseType', label: 'Bought', type: 'select', width: '120px',
      options: ['LOCAL', 'IMPORT', 'NOMINATED'] },
    { key: 'defaultSupplierCode', label: 'Supplier', type: 'text', width: '120px' },
    { key: 'isMandatory', label: 'Required', type: 'check', width: '80px' },
  ];

  ngOnInit(): void {
    this.templatesSvc.listCosting().subscribe({
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
    this.cost.set(null);          // figures belong to the sheet they came from
    this.costError.set(null);
  }

  protected runCost(): void {
    const id = this.selectedId();
    if (!id) return;
    this.costError.set(null);
    this.templatesSvc.costSheet(id, {
      orderQtyPcs: this.qty(),
      bdtPerQuoteCurrency: this.fx(),
      quoteCurrency: 'USD',
    }).subscribe({
      next: c => this.cost.set(c),
      error: err => {
        this.cost.set(null);
        this.costError.set(err?.error?.message ?? 'This sheet could not be costed.');
      },
    });
  }

  protected canWrite(): boolean {
    return this.auth.has('M1_COSTING_WRITE');
  }

  protected add(): void {
    this.editing.set(null);
    this.editorHeader.set({ status: 'ACTIVE', isDefault: false,
                            headOfficeCostPct: 4, targetMarginPct: 12 });
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
      unitCode: s.unitCode ?? '',
      headOfficeCostPct: s.headOfficeCostPct, targetMarginPct: s.targetMarginPct,
      isDefault: s.isDefault, status: s.status,
    });
    this.editorLines.set(s.items.map(i => ({ ...i })));
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
      unitCode: payload.header['unitCode'] || null,
      items: payload.lines.map(l => ({
        sequenceNo: l['sequenceNo'],
        itemGroup: l['itemGroup'],
        itemName: l['itemName'],
        uom: l['uom'],
        defaultConsumption: Number(l['defaultConsumption'] ?? 0),
        defaultRate: Number(l['defaultRate'] ?? 0),
        rateCurrency: l['rateCurrency'],
        wastageAllowance: Number(l['wastageAllowance'] ?? 0),
        purchaseType: l['purchaseType'],
        defaultSupplierCode: l['defaultSupplierCode'] || null,
        isMandatory: !!l['isMandatory'],
      })),
    };

    // Same concurrency guard as the record form: send the version the editor
    // was opened on, so a template someone else changed meanwhile is refused
    // rather than overwritten.
    const existing = this.editing();
    if (existing) {
      (body as Record<string, unknown>)['version'] = existing.version;
    }

    this.templatesSvc.saveCostingTemplate(existing?.id ?? null, body).subscribe({
      next: () => { this.saving.set(false); this.closeEditor(); this.reload(); },
      error: err => {
        this.saving.set(false);
        this.saveFieldErrors.set(err?.error?.fieldErrors ?? {});
        this.saveError.set(err?.error?.message ?? 'This template could not be saved.');
      },
    });
  }

  protected remove(): void {
    const s = this.selected();
    if (!s) return;
    if (!confirm(`Remove ${s.templateCode} — ${s.templateName}?`)) return;
    this.templatesSvc.removeCosting(s.id).subscribe({
      next: () => this.reload(),
      error: err => this.error.set(err?.error?.message ?? 'This template could not be removed.'),
    });
  }

  /**
   * Exports the sheet, and the costed figures when it has been costed — which
   * is the file a merchandiser actually sends to the buyer.
   */
  protected download(format: ExportFormat): void {
    const s = this.selected();
    if (!s) return;
    const costed = this.cost();
    const columns = [
      { key: 'sequenceNo', label: '#' },
      { key: 'itemGroup', label: 'Group' },
      { key: 'itemName', label: 'Item' },
      { key: 'uom', label: 'UOM' },
      { key: 'defaultConsumption', label: 'Consumption' },
      { key: 'wastageAllowance', label: 'Wastage %' },
      { key: 'defaultRate', label: 'Rate' },
      { key: 'rateCurrency', label: 'Currency' },
      { key: 'purchaseType', label: 'Bought' },
      { key: 'defaultSupplierCode', label: 'Supplier' },
      ...(costed ? [{ key: 'costPerPc', label: `Cost / pc (${costed.quoteCurrency})` }] : []),
    ];
    const rows = s.items.map(i => ({
      ...i, costPerPc: this.costFor(i.sequenceNo) ?? '',
    }));
    void exportAs(format, {
      title: `${s.templateCode} — ${s.templateName}`,
      columns, rows,
      subtitle: costed
        ? `Costed at ${costed.suggestedFobPerPc} ${costed.quoteCurrency} / pc`
        : `${s.productType} · ${s.totalItems} lines`,
    });
  }

  private reload(): void {
    const keep = this.selectedId();
    this.templatesSvc.listCosting().subscribe({
      next: page => {
        this.templates.set(page.content);
        const found = page.content.find(t => t.id === keep) ?? page.content[0] ?? null;
        this.selectedId.set(found?.id ?? null);
        this.selected.set(found);
        this.cost.set(null);
      },
    });
  }

  protected costFor(sequenceNo: number): number | undefined {
    return this.cost()?.items.find(i => i.sequenceNo === sequenceNo)?.costPerPc;
  }

  protected grossFor(sequenceNo: number): number | undefined {
    return this.cost()?.items.find(i => i.sequenceNo === sequenceNo)?.grossConsumption;
  }
}
