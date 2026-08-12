import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

export interface Page<T> { content: T[]; totalElements: number; number: number; size: number; }

// ------------------------------------------------------------- M1.4 Costing

export interface TemplateItem {
  id: number;
  sequenceNo: number;
  itemGroup: string;
  itemName: string;
  uom: string;
  defaultConsumption: number;
  defaultRate: number;
  rateCurrency: string;
  wastageAllowance: number;
  purchaseType: string;
  defaultSupplierCode: string | null;
  isMandatory: boolean;
}

export interface CostingTemplate {
  id: number;
  templateCode: string;
  templateName: string;
  productType: string;
  buyerCode: string | null;
  unitCode: string | null;
  totalItems: number;
  headOfficeCostPct: number;
  targetMarginPct: number;
  isDefault: boolean;
  status: string;
  version: number;
  items: TemplateItem[];
}

export interface CostedItem {
  sequenceNo: number;
  itemGroup: string;
  itemName: string;
  grossConsumption: number;
  costPerPc: number;
}

export interface CostResponse {
  quoteCurrency: string;
  items: CostedItem[];
  groups: { itemGroup: string; costPerPc: number }[];
  materialCostPerPc: number;
  cmPerPc: number;
  manufacturingCostPerPc: number;
  headOfficeCostPerPc: number;
  totalCostPerPc: number;
  targetMarginPct: number;
  suggestedFobPerPc: number;
  orderValue: number;
}

// ------------------------------------------------------------------ M1.3 TNA

export interface TnaTask {
  id: number;
  sequenceNo: number;
  taskName: string;
  taskProcess: string;
  offsetAnchor: 'ORDER_START' | 'SHIP_DATE';
  offsetDays: number;
  responsibleRole: string;
  approvalNature: string | null;
  predecessorSequenceNo: number | null;
  isCriticalPath: boolean;
}

export interface TnaTemplate {
  id: number;
  templateCode: string;
  templateName: string;
  productType: string;
  buyerCode: string | null;
  totalTasks: number;
  isDefault: boolean;
  status: string;
  version: number;
  tasks: TnaTask[];
}

export interface GeneratedTask {
  sequenceNo: number;
  taskName: string;
  taskProcess: string;
  responsibleRole: string;
  approvalNature: string | null;
  deadline: string;
  isCriticalPath: boolean;
}

export interface Preview {
  templateCode: string;
  orderStartDate: string;
  shipDate: string;
  leadTimeDays: number;
  tasks: GeneratedTask[];
}

const CT_KEY = 'tanabana:mock:costing-templates';
const TNA_KEY = 'tanabana:mock:tna-templates';

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

/**
 * Stands in for the two flagship M1 endpoints that are real business logic,
 * not CRUD: `/cost` (the BD FOB build-up) and `/instantiate` (dating a TNA
 * plan against an order). There is no server here, so both are recomputed
 * client-side — an approximation of the documented rule
 * (PROJECT_CONTEXT.md §9/§12: margin taken on the selling price, not added
 * to the cost), not a copy of the real service's arithmetic.
 */
@Injectable({ providedIn: 'root' })
export class MockTemplatesService {

  // ---------------------------------------------------------------- costing

  private seedCosting(): CostingTemplate[] {
    const rows: Omit<CostingTemplate, 'totalItems'>[] = [
      {
        id: 1, templateCode: 'CT-KNIT-BASIC', templateName: 'Knit basic tee',
        productType: 'KNIT_TOP', buyerCode: null, unitCode: null,
        headOfficeCostPct: 4, targetMarginPct: 12, isDefault: true, status: 'ACTIVE', version: 0,
        items: [
          { id: 1, sequenceNo: 1, itemGroup: 'FABRIC', itemName: 'Peach finish cotton 240gsm', uom: 'KG',
            defaultConsumption: 0.18, defaultRate: 3.4, rateCurrency: 'USD', wastageAllowance: 3,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 2, sequenceNo: 2, itemGroup: 'TRIM', itemName: 'Main label woven', uom: 'PCS',
            defaultConsumption: 1, defaultRate: 0.03, rateCurrency: 'USD', wastageAllowance: 1,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 3, sequenceNo: 3, itemGroup: 'TRIM', itemName: 'Care label satin', uom: 'PCS',
            defaultConsumption: 1, defaultRate: 0.015, rateCurrency: 'USD', wastageAllowance: 1,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 4, sequenceNo: 4, itemGroup: 'PACK', itemName: 'Polybag recycled', uom: 'PCS',
            defaultConsumption: 1, defaultRate: 0.02, rateCurrency: 'USD', wastageAllowance: 0,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 5, sequenceNo: 5, itemGroup: 'PACK', itemName: 'Carton 5-ply', uom: 'PCS',
            defaultConsumption: 0.02, defaultRate: 0.9, rateCurrency: 'USD', wastageAllowance: 0,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: false },
        ],
      },
      {
        id: 2, templateCode: 'CT-WOVEN-SHIRT', templateName: 'Woven shirt',
        productType: 'WOVEN_TOP', buyerCode: 'BUY-101', unitCode: 'U4',
        headOfficeCostPct: 5, targetMarginPct: 14, isDefault: false, status: 'ACTIVE', version: 0,
        items: [
          { id: 1, sequenceNo: 1, itemGroup: 'FABRIC', itemName: 'Cotton poplin 120gsm', uom: 'YDS',
            defaultConsumption: 1.6, defaultRate: 1.9, rateCurrency: 'USD', wastageAllowance: 4,
            purchaseType: 'IMPORT', defaultSupplierCode: 'SUP-201', isMandatory: true },
          { id: 2, sequenceNo: 2, itemGroup: 'TRIM', itemName: 'Button 4-hole', uom: 'GROSS',
            defaultConsumption: 0.06, defaultRate: 2.4, rateCurrency: 'USD', wastageAllowance: 2,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 3, sequenceNo: 3, itemGroup: 'TRIM', itemName: 'Interlining fusible', uom: 'YDS',
            defaultConsumption: 0.3, defaultRate: 0.6, rateCurrency: 'USD', wastageAllowance: 3,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: true },
          { id: 4, sequenceNo: 4, itemGroup: 'PACK', itemName: 'Hangtag recycled board', uom: 'PCS',
            defaultConsumption: 1, defaultRate: 0.04, rateCurrency: 'USD', wastageAllowance: 0,
            purchaseType: 'LOCAL', defaultSupplierCode: null, isMandatory: false },
        ],
      },
    ];
    return rows.map(t => ({ ...t, totalItems: t.items.length }));
  }

  private loadCosting(): CostingTemplate[] {
    const raw = localStorage.getItem(CT_KEY);
    if (raw) return JSON.parse(raw);
    const seeded = this.seedCosting();
    localStorage.setItem(CT_KEY, JSON.stringify(seeded));
    return seeded;
  }

  private saveCosting(rows: CostingTemplate[]): void {
    localStorage.setItem(CT_KEY, JSON.stringify(rows));
  }

  listCosting(): Observable<Page<CostingTemplate>> {
    const content = this.loadCosting();
    return of({ content, totalElements: content.length, number: 0, size: content.length });
  }

  saveCostingTemplate(id: number | null, body: Record<string, unknown>): Observable<CostingTemplate> {
    const rows = this.loadCosting();
    const items = ((body['items'] as Omit<TemplateItem, 'id'>[]) ?? []).map((it, i) => ({ ...it, id: i + 1 }));

    if (id == null) {
      const newId = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
      const row = { ...(body as object), id: newId, items, totalItems: items.length, version: 0 } as CostingTemplate;
      rows.push(row);
      this.saveCosting(rows);
      return of(row);
    }

    const idx = rows.findIndex(r => r.id === id);
    if (idx < 0) return throwError(() => ({ error: { message: 'This template could not be found.' } }));
    rows[idx] = { ...rows[idx], ...(body as object), items, totalItems: items.length,
      version: rows[idx].version + 1 };
    this.saveCosting(rows);
    return of(rows[idx]);
  }

  removeCosting(id: number): Observable<void> {
    this.saveCosting(this.loadCosting().filter(r => r.id !== id));
    return of(void 0);
  }

  /**
   * Material, CM, head-office and margin, solved the documented way: margin
   * is taken on the selling price (`cost / (1 - margin%)`), never added to
   * the cost. There is no SMV/line-rate data behind this mock, so CM is
   * approximated as a third of material cost — the right order of magnitude
   * for a basic knit or woven garment, not a real cost-engineering figure.
   */
  costSheet(id: number, params: { orderQtyPcs: number; bdtPerQuoteCurrency: number; quoteCurrency: string })
    : Observable<CostResponse> {
    const t = this.loadCosting().find(r => r.id === id);
    if (!t) return throwError(() => ({ error: { message: 'This template could not be found.' } }));

    const fx = params.bdtPerQuoteCurrency || 1;
    const items: CostedItem[] = t.items.map(i => {
      const gross = i.defaultConsumption * (1 + i.wastageAllowance / 100);
      const rateInQuote = i.rateCurrency === 'BDT' ? i.defaultRate / fx : i.defaultRate;
      return {
        sequenceNo: i.sequenceNo, itemGroup: i.itemGroup, itemName: i.itemName,
        grossConsumption: round4(gross), costPerPc: round4(gross * rateInQuote),
      };
    });

    const materialCostPerPc = round4(items.reduce((s, i) => s + i.costPerPc, 0));
    const cmPerPc = round4(materialCostPerPc * 0.35);
    const manufacturingCostPerPc = round4(materialCostPerPc + cmPerPc);
    const headOfficeCostPerPc = round4(manufacturingCostPerPc * (t.headOfficeCostPct / 100));
    const totalCostPerPc = round4(manufacturingCostPerPc + headOfficeCostPerPc);
    const suggestedFobPerPc = round4(totalCostPerPc / (1 - t.targetMarginPct / 100));
    const groups = [...new Set(items.map(i => i.itemGroup))].map(group => ({
      itemGroup: group,
      costPerPc: round4(items.filter(i => i.itemGroup === group).reduce((s, i) => s + i.costPerPc, 0)),
    }));

    return of({
      quoteCurrency: params.quoteCurrency, items, groups,
      materialCostPerPc, cmPerPc, manufacturingCostPerPc, headOfficeCostPerPc, totalCostPerPc,
      targetMarginPct: t.targetMarginPct, suggestedFobPerPc,
      orderValue: round4(suggestedFobPerPc * params.orderQtyPcs),
    });
  }

  // --------------------------------------------------------------------- TNA

  private seedTna(): TnaTemplate[] {
    const rows: Omit<TnaTemplate, 'totalTasks'>[] = [
      {
        id: 1, templateCode: 'TNA-KNIT-90', templateName: 'Knit basic — 90 day',
        productType: 'KNIT_TOP', buyerCode: null, isDefault: true, status: 'ACTIVE', version: 0,
        tasks: [
          { id: 1, sequenceNo: 1, taskName: 'Order confirmation', taskProcess: 'ORDER',
            offsetAnchor: 'ORDER_START', offsetDays: 0, responsibleRole: 'MERCH',
            approvalNature: null, predecessorSequenceNo: null, isCriticalPath: true },
          { id: 2, sequenceNo: 2, taskName: 'Fabric booking', taskProcess: 'FABRIC',
            offsetAnchor: 'ORDER_START', offsetDays: 5, responsibleRole: 'SCM',
            approvalNature: null, predecessorSequenceNo: 1, isCriticalPath: true },
          { id: 3, sequenceNo: 3, taskName: 'Lab dip approval', taskProcess: 'APPROVAL',
            offsetAnchor: 'ORDER_START', offsetDays: 10, responsibleRole: 'MERCH',
            approvalNature: 'BUYER', predecessorSequenceNo: 2, isCriticalPath: true },
          { id: 4, sequenceNo: 4, taskName: 'Fabric in-house', taskProcess: 'FABRIC',
            offsetAnchor: 'ORDER_START', offsetDays: 28, responsibleRole: 'STORE',
            approvalNature: null, predecessorSequenceNo: 3, isCriticalPath: true },
          { id: 5, sequenceNo: 5, taskName: 'Cutting start', taskProcess: 'CUTTING',
            offsetAnchor: 'SHIP_DATE', offsetDays: -32, responsibleRole: 'GM',
            approvalNature: null, predecessorSequenceNo: 4, isCriticalPath: true },
          { id: 6, sequenceNo: 6, taskName: 'Sewing line load', taskProcess: 'SEWING',
            offsetAnchor: 'SHIP_DATE', offsetDays: -26, responsibleRole: 'IE',
            approvalNature: null, predecessorSequenceNo: 5, isCriticalPath: true },
          { id: 7, sequenceNo: 7, taskName: 'Pre-final inspection', taskProcess: 'QUALITY',
            offsetAnchor: 'SHIP_DATE', offsetDays: -6, responsibleRole: 'QC',
            approvalNature: 'BUYER', predecessorSequenceNo: 6, isCriticalPath: true },
          { id: 8, sequenceNo: 8, taskName: 'Ex-factory', taskProcess: 'SHIP',
            offsetAnchor: 'SHIP_DATE', offsetDays: 0, responsibleRole: 'COMM',
            approvalNature: null, predecessorSequenceNo: 7, isCriticalPath: true },
        ],
      },
      {
        id: 2, templateCode: 'TNA-WOVEN-75', templateName: 'Woven shirt — 75 day',
        productType: 'WOVEN_TOP', buyerCode: 'BUY-101', isDefault: false, status: 'ACTIVE', version: 0,
        tasks: [
          { id: 1, sequenceNo: 1, taskName: 'Order confirmation', taskProcess: 'ORDER',
            offsetAnchor: 'ORDER_START', offsetDays: 0, responsibleRole: 'MERCH',
            approvalNature: null, predecessorSequenceNo: null, isCriticalPath: true },
          { id: 2, sequenceNo: 2, taskName: 'Fabric booking', taskProcess: 'FABRIC',
            offsetAnchor: 'ORDER_START', offsetDays: 4, responsibleRole: 'SCM',
            approvalNature: null, predecessorSequenceNo: 1, isCriticalPath: true },
          { id: 3, sequenceNo: 3, taskName: 'Strike-off approval', taskProcess: 'APPROVAL',
            offsetAnchor: 'ORDER_START', offsetDays: 12, responsibleRole: 'MERCH',
            approvalNature: 'BUYER', predecessorSequenceNo: 2, isCriticalPath: false },
          { id: 4, sequenceNo: 4, taskName: 'Fabric in-house', taskProcess: 'FABRIC',
            offsetAnchor: 'ORDER_START', offsetDays: 24, responsibleRole: 'STORE',
            approvalNature: null, predecessorSequenceNo: 2, isCriticalPath: true },
          { id: 5, sequenceNo: 5, taskName: 'Cutting start', taskProcess: 'CUTTING',
            offsetAnchor: 'SHIP_DATE', offsetDays: -28, responsibleRole: 'GM',
            approvalNature: null, predecessorSequenceNo: 4, isCriticalPath: true },
          { id: 6, sequenceNo: 6, taskName: 'Final inspection', taskProcess: 'QUALITY',
            offsetAnchor: 'SHIP_DATE', offsetDays: -5, responsibleRole: 'QC',
            approvalNature: 'BUYER', predecessorSequenceNo: 5, isCriticalPath: true },
          { id: 7, sequenceNo: 7, taskName: 'Ex-factory', taskProcess: 'SHIP',
            offsetAnchor: 'SHIP_DATE', offsetDays: 0, responsibleRole: 'COMM',
            approvalNature: null, predecessorSequenceNo: 6, isCriticalPath: true },
        ],
      },
    ];
    return rows.map(t => ({ ...t, totalTasks: t.tasks.length }));
  }

  private loadTna(): TnaTemplate[] {
    const raw = localStorage.getItem(TNA_KEY);
    if (raw) return JSON.parse(raw);
    const seeded = this.seedTna();
    localStorage.setItem(TNA_KEY, JSON.stringify(seeded));
    return seeded;
  }

  private saveTna(rows: TnaTemplate[]): void {
    localStorage.setItem(TNA_KEY, JSON.stringify(rows));
  }

  listTna(): Observable<Page<TnaTemplate>> {
    const content = this.loadTna();
    return of({ content, totalElements: content.length, number: 0, size: content.length });
  }

  saveTnaTemplate(id: number | null, body: Record<string, unknown>): Observable<TnaTemplate> {
    const rows = this.loadTna();
    const tasks = ((body['tasks'] as Omit<TnaTask, 'id'>[]) ?? []).map((t, i) => ({ ...t, id: i + 1 }));

    if (id == null) {
      const newId = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
      const row = { ...(body as object), id: newId, tasks, totalTasks: tasks.length, version: 0 } as TnaTemplate;
      rows.push(row);
      this.saveTna(rows);
      return of(row);
    }

    const idx = rows.findIndex(r => r.id === id);
    if (idx < 0) return throwError(() => ({ error: { message: 'This template could not be found.' } }));
    rows[idx] = { ...rows[idx], ...(body as object), tasks, totalTasks: tasks.length,
      version: rows[idx].version + 1 };
    this.saveTna(rows);
    return of(rows[idx]);
  }

  removeTna(id: number): Observable<void> {
    this.saveTna(this.loadTna().filter(r => r.id !== id));
    return of(void 0);
  }

  /** Dates every milestone against a real order start and ship date. */
  instantiate(id: number, params: { orderStartDate: string; shipDate: string })
    : Observable<Preview> {
    const t = this.loadTna().find(r => r.id === id);
    if (!t) return throwError(() => ({ error: { message: 'This template could not be found.' } }));

    const start = new Date(params.orderStartDate);
    const ship = new Date(params.shipDate);
    if (isNaN(start.getTime()) || isNaN(ship.getTime()) || ship <= start) {
      return throwError(() => ({
        error: { message: 'The ship date has to fall after the order start.' } }));
    }
    const leadTimeDays = Math.round((ship.getTime() - start.getTime()) / 86400000);

    const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const tasks: GeneratedTask[] = t.tasks.map(task => {
      const anchor = task.offsetAnchor === 'SHIP_DATE' ? ship : start;
      const deadline = new Date(anchor);
      deadline.setDate(deadline.getDate() + task.offsetDays);
      return {
        sequenceNo: task.sequenceNo, taskName: task.taskName, taskProcess: task.taskProcess,
        responsibleRole: task.responsibleRole, approvalNature: task.approvalNature,
        deadline: fmt(deadline), isCriticalPath: task.isCriticalPath,
      };
    });

    return of({ templateCode: t.templateCode, orderStartDate: params.orderStartDate,
      shipDate: params.shipDate, leadTimeDays, tasks });
  }
}
