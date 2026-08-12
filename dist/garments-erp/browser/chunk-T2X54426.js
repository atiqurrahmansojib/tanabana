import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DRVFIA4U.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgForOf,
  NgIf,
  Output,
  of,
  setClassMetadata,
  signal,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XANLCPOO.js";

// src/app/core/data/mock-templates.service.ts
var CT_KEY = "tanabana:mock:costing-templates";
var TNA_KEY = "tanabana:mock:tna-templates";
function round4(n) {
  return Math.round(n * 1e4) / 1e4;
}
var MockTemplatesService = class _MockTemplatesService {
  // ---------------------------------------------------------------- costing
  seedCosting() {
    const rows = [
      {
        id: 1,
        templateCode: "CT-KNIT-BASIC",
        templateName: "Knit basic tee",
        productType: "KNIT_TOP",
        buyerCode: null,
        unitCode: null,
        headOfficeCostPct: 4,
        targetMarginPct: 12,
        isDefault: true,
        status: "ACTIVE",
        version: 0,
        items: [
          {
            id: 1,
            sequenceNo: 1,
            itemGroup: "FABRIC",
            itemName: "Peach finish cotton 240gsm",
            uom: "KG",
            defaultConsumption: 0.18,
            defaultRate: 3.4,
            rateCurrency: "USD",
            wastageAllowance: 3,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 2,
            sequenceNo: 2,
            itemGroup: "TRIM",
            itemName: "Main label woven",
            uom: "PCS",
            defaultConsumption: 1,
            defaultRate: 0.03,
            rateCurrency: "USD",
            wastageAllowance: 1,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 3,
            sequenceNo: 3,
            itemGroup: "TRIM",
            itemName: "Care label satin",
            uom: "PCS",
            defaultConsumption: 1,
            defaultRate: 0.015,
            rateCurrency: "USD",
            wastageAllowance: 1,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 4,
            sequenceNo: 4,
            itemGroup: "PACK",
            itemName: "Polybag recycled",
            uom: "PCS",
            defaultConsumption: 1,
            defaultRate: 0.02,
            rateCurrency: "USD",
            wastageAllowance: 0,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 5,
            sequenceNo: 5,
            itemGroup: "PACK",
            itemName: "Carton 5-ply",
            uom: "PCS",
            defaultConsumption: 0.02,
            defaultRate: 0.9,
            rateCurrency: "USD",
            wastageAllowance: 0,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: false
          }
        ]
      },
      {
        id: 2,
        templateCode: "CT-WOVEN-SHIRT",
        templateName: "Woven shirt",
        productType: "WOVEN_TOP",
        buyerCode: "BUY-101",
        unitCode: "U4",
        headOfficeCostPct: 5,
        targetMarginPct: 14,
        isDefault: false,
        status: "ACTIVE",
        version: 0,
        items: [
          {
            id: 1,
            sequenceNo: 1,
            itemGroup: "FABRIC",
            itemName: "Cotton poplin 120gsm",
            uom: "YDS",
            defaultConsumption: 1.6,
            defaultRate: 1.9,
            rateCurrency: "USD",
            wastageAllowance: 4,
            purchaseType: "IMPORT",
            defaultSupplierCode: "SUP-201",
            isMandatory: true
          },
          {
            id: 2,
            sequenceNo: 2,
            itemGroup: "TRIM",
            itemName: "Button 4-hole",
            uom: "GROSS",
            defaultConsumption: 0.06,
            defaultRate: 2.4,
            rateCurrency: "USD",
            wastageAllowance: 2,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 3,
            sequenceNo: 3,
            itemGroup: "TRIM",
            itemName: "Interlining fusible",
            uom: "YDS",
            defaultConsumption: 0.3,
            defaultRate: 0.6,
            rateCurrency: "USD",
            wastageAllowance: 3,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: true
          },
          {
            id: 4,
            sequenceNo: 4,
            itemGroup: "PACK",
            itemName: "Hangtag recycled board",
            uom: "PCS",
            defaultConsumption: 1,
            defaultRate: 0.04,
            rateCurrency: "USD",
            wastageAllowance: 0,
            purchaseType: "LOCAL",
            defaultSupplierCode: null,
            isMandatory: false
          }
        ]
      }
    ];
    return rows.map((t) => __spreadProps(__spreadValues({}, t), { totalItems: t.items.length }));
  }
  loadCosting() {
    const raw = localStorage.getItem(CT_KEY);
    if (raw)
      return JSON.parse(raw);
    const seeded = this.seedCosting();
    localStorage.setItem(CT_KEY, JSON.stringify(seeded));
    return seeded;
  }
  saveCosting(rows) {
    localStorage.setItem(CT_KEY, JSON.stringify(rows));
  }
  listCosting() {
    const content = this.loadCosting();
    return of({ content, totalElements: content.length, number: 0, size: content.length });
  }
  saveCostingTemplate(id, body) {
    const rows = this.loadCosting();
    const items = (body["items"] ?? []).map((it, i) => __spreadProps(__spreadValues({}, it), { id: i + 1 }));
    if (id == null) {
      const newId = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
      const row = __spreadProps(__spreadValues({}, body), { id: newId, items, totalItems: items.length, version: 0 });
      rows.push(row);
      this.saveCosting(rows);
      return of(row);
    }
    const idx = rows.findIndex((r) => r.id === id);
    if (idx < 0)
      return throwError(() => ({ error: { message: "This template could not be found." } }));
    rows[idx] = __spreadProps(__spreadValues(__spreadValues({}, rows[idx]), body), {
      items,
      totalItems: items.length,
      version: rows[idx].version + 1
    });
    this.saveCosting(rows);
    return of(rows[idx]);
  }
  removeCosting(id) {
    this.saveCosting(this.loadCosting().filter((r) => r.id !== id));
    return of(void 0);
  }
  /**
   * Material, CM, head-office and margin, solved the documented way: margin
   * is taken on the selling price (`cost / (1 - margin%)`), never added to
   * the cost. There is no SMV/line-rate data behind this mock, so CM is
   * approximated as a third of material cost — the right order of magnitude
   * for a basic knit or woven garment, not a real cost-engineering figure.
   */
  costSheet(id, params) {
    const t = this.loadCosting().find((r) => r.id === id);
    if (!t)
      return throwError(() => ({ error: { message: "This template could not be found." } }));
    const fx = params.bdtPerQuoteCurrency || 1;
    const items = t.items.map((i) => {
      const gross = i.defaultConsumption * (1 + i.wastageAllowance / 100);
      const rateInQuote = i.rateCurrency === "BDT" ? i.defaultRate / fx : i.defaultRate;
      return {
        sequenceNo: i.sequenceNo,
        itemGroup: i.itemGroup,
        itemName: i.itemName,
        grossConsumption: round4(gross),
        costPerPc: round4(gross * rateInQuote)
      };
    });
    const materialCostPerPc = round4(items.reduce((s, i) => s + i.costPerPc, 0));
    const cmPerPc = round4(materialCostPerPc * 0.35);
    const manufacturingCostPerPc = round4(materialCostPerPc + cmPerPc);
    const headOfficeCostPerPc = round4(manufacturingCostPerPc * (t.headOfficeCostPct / 100));
    const totalCostPerPc = round4(manufacturingCostPerPc + headOfficeCostPerPc);
    const suggestedFobPerPc = round4(totalCostPerPc / (1 - t.targetMarginPct / 100));
    const groups = [...new Set(items.map((i) => i.itemGroup))].map((group) => ({
      itemGroup: group,
      costPerPc: round4(items.filter((i) => i.itemGroup === group).reduce((s, i) => s + i.costPerPc, 0))
    }));
    return of({
      quoteCurrency: params.quoteCurrency,
      items,
      groups,
      materialCostPerPc,
      cmPerPc,
      manufacturingCostPerPc,
      headOfficeCostPerPc,
      totalCostPerPc,
      targetMarginPct: t.targetMarginPct,
      suggestedFobPerPc,
      orderValue: round4(suggestedFobPerPc * params.orderQtyPcs)
    });
  }
  // --------------------------------------------------------------------- TNA
  seedTna() {
    const rows = [
      {
        id: 1,
        templateCode: "TNA-KNIT-90",
        templateName: "Knit basic \u2014 90 day",
        productType: "KNIT_TOP",
        buyerCode: null,
        isDefault: true,
        status: "ACTIVE",
        version: 0,
        tasks: [
          {
            id: 1,
            sequenceNo: 1,
            taskName: "Order confirmation",
            taskProcess: "ORDER",
            offsetAnchor: "ORDER_START",
            offsetDays: 0,
            responsibleRole: "MERCH",
            approvalNature: null,
            predecessorSequenceNo: null,
            isCriticalPath: true
          },
          {
            id: 2,
            sequenceNo: 2,
            taskName: "Fabric booking",
            taskProcess: "FABRIC",
            offsetAnchor: "ORDER_START",
            offsetDays: 5,
            responsibleRole: "SCM",
            approvalNature: null,
            predecessorSequenceNo: 1,
            isCriticalPath: true
          },
          {
            id: 3,
            sequenceNo: 3,
            taskName: "Lab dip approval",
            taskProcess: "APPROVAL",
            offsetAnchor: "ORDER_START",
            offsetDays: 10,
            responsibleRole: "MERCH",
            approvalNature: "BUYER",
            predecessorSequenceNo: 2,
            isCriticalPath: true
          },
          {
            id: 4,
            sequenceNo: 4,
            taskName: "Fabric in-house",
            taskProcess: "FABRIC",
            offsetAnchor: "ORDER_START",
            offsetDays: 28,
            responsibleRole: "STORE",
            approvalNature: null,
            predecessorSequenceNo: 3,
            isCriticalPath: true
          },
          {
            id: 5,
            sequenceNo: 5,
            taskName: "Cutting start",
            taskProcess: "CUTTING",
            offsetAnchor: "SHIP_DATE",
            offsetDays: -32,
            responsibleRole: "GM",
            approvalNature: null,
            predecessorSequenceNo: 4,
            isCriticalPath: true
          },
          {
            id: 6,
            sequenceNo: 6,
            taskName: "Sewing line load",
            taskProcess: "SEWING",
            offsetAnchor: "SHIP_DATE",
            offsetDays: -26,
            responsibleRole: "IE",
            approvalNature: null,
            predecessorSequenceNo: 5,
            isCriticalPath: true
          },
          {
            id: 7,
            sequenceNo: 7,
            taskName: "Pre-final inspection",
            taskProcess: "QUALITY",
            offsetAnchor: "SHIP_DATE",
            offsetDays: -6,
            responsibleRole: "QC",
            approvalNature: "BUYER",
            predecessorSequenceNo: 6,
            isCriticalPath: true
          },
          {
            id: 8,
            sequenceNo: 8,
            taskName: "Ex-factory",
            taskProcess: "SHIP",
            offsetAnchor: "SHIP_DATE",
            offsetDays: 0,
            responsibleRole: "COMM",
            approvalNature: null,
            predecessorSequenceNo: 7,
            isCriticalPath: true
          }
        ]
      },
      {
        id: 2,
        templateCode: "TNA-WOVEN-75",
        templateName: "Woven shirt \u2014 75 day",
        productType: "WOVEN_TOP",
        buyerCode: "BUY-101",
        isDefault: false,
        status: "ACTIVE",
        version: 0,
        tasks: [
          {
            id: 1,
            sequenceNo: 1,
            taskName: "Order confirmation",
            taskProcess: "ORDER",
            offsetAnchor: "ORDER_START",
            offsetDays: 0,
            responsibleRole: "MERCH",
            approvalNature: null,
            predecessorSequenceNo: null,
            isCriticalPath: true
          },
          {
            id: 2,
            sequenceNo: 2,
            taskName: "Fabric booking",
            taskProcess: "FABRIC",
            offsetAnchor: "ORDER_START",
            offsetDays: 4,
            responsibleRole: "SCM",
            approvalNature: null,
            predecessorSequenceNo: 1,
            isCriticalPath: true
          },
          {
            id: 3,
            sequenceNo: 3,
            taskName: "Strike-off approval",
            taskProcess: "APPROVAL",
            offsetAnchor: "ORDER_START",
            offsetDays: 12,
            responsibleRole: "MERCH",
            approvalNature: "BUYER",
            predecessorSequenceNo: 2,
            isCriticalPath: false
          },
          {
            id: 4,
            sequenceNo: 4,
            taskName: "Fabric in-house",
            taskProcess: "FABRIC",
            offsetAnchor: "ORDER_START",
            offsetDays: 24,
            responsibleRole: "STORE",
            approvalNature: null,
            predecessorSequenceNo: 2,
            isCriticalPath: true
          },
          {
            id: 5,
            sequenceNo: 5,
            taskName: "Cutting start",
            taskProcess: "CUTTING",
            offsetAnchor: "SHIP_DATE",
            offsetDays: -28,
            responsibleRole: "GM",
            approvalNature: null,
            predecessorSequenceNo: 4,
            isCriticalPath: true
          },
          {
            id: 6,
            sequenceNo: 6,
            taskName: "Final inspection",
            taskProcess: "QUALITY",
            offsetAnchor: "SHIP_DATE",
            offsetDays: -5,
            responsibleRole: "QC",
            approvalNature: "BUYER",
            predecessorSequenceNo: 5,
            isCriticalPath: true
          },
          {
            id: 7,
            sequenceNo: 7,
            taskName: "Ex-factory",
            taskProcess: "SHIP",
            offsetAnchor: "SHIP_DATE",
            offsetDays: 0,
            responsibleRole: "COMM",
            approvalNature: null,
            predecessorSequenceNo: 6,
            isCriticalPath: true
          }
        ]
      }
    ];
    return rows.map((t) => __spreadProps(__spreadValues({}, t), { totalTasks: t.tasks.length }));
  }
  loadTna() {
    const raw = localStorage.getItem(TNA_KEY);
    if (raw)
      return JSON.parse(raw);
    const seeded = this.seedTna();
    localStorage.setItem(TNA_KEY, JSON.stringify(seeded));
    return seeded;
  }
  saveTna(rows) {
    localStorage.setItem(TNA_KEY, JSON.stringify(rows));
  }
  listTna() {
    const content = this.loadTna();
    return of({ content, totalElements: content.length, number: 0, size: content.length });
  }
  saveTnaTemplate(id, body) {
    const rows = this.loadTna();
    const tasks = (body["tasks"] ?? []).map((t, i) => __spreadProps(__spreadValues({}, t), { id: i + 1 }));
    if (id == null) {
      const newId = rows.reduce((max, r) => Math.max(max, r.id), 0) + 1;
      const row = __spreadProps(__spreadValues({}, body), { id: newId, tasks, totalTasks: tasks.length, version: 0 });
      rows.push(row);
      this.saveTna(rows);
      return of(row);
    }
    const idx = rows.findIndex((r) => r.id === id);
    if (idx < 0)
      return throwError(() => ({ error: { message: "This template could not be found." } }));
    rows[idx] = __spreadProps(__spreadValues(__spreadValues({}, rows[idx]), body), {
      tasks,
      totalTasks: tasks.length,
      version: rows[idx].version + 1
    });
    this.saveTna(rows);
    return of(rows[idx]);
  }
  removeTna(id) {
    this.saveTna(this.loadTna().filter((r) => r.id !== id));
    return of(void 0);
  }
  /** Dates every milestone against a real order start and ship date. */
  instantiate(id, params) {
    const t = this.loadTna().find((r) => r.id === id);
    if (!t)
      return throwError(() => ({ error: { message: "This template could not be found." } }));
    const start = new Date(params.orderStartDate);
    const ship = new Date(params.shipDate);
    if (isNaN(start.getTime()) || isNaN(ship.getTime()) || ship <= start) {
      return throwError(() => ({
        error: { message: "The ship date has to fall after the order start." }
      }));
    }
    const leadTimeDays = Math.round((ship.getTime() - start.getTime()) / 864e5);
    const fmt = (d) => d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const tasks = t.tasks.map((task) => {
      const anchor = task.offsetAnchor === "SHIP_DATE" ? ship : start;
      const deadline = new Date(anchor);
      deadline.setDate(deadline.getDate() + task.offsetDays);
      return {
        sequenceNo: task.sequenceNo,
        taskName: task.taskName,
        taskProcess: task.taskProcess,
        responsibleRole: task.responsibleRole,
        approvalNature: task.approvalNature,
        deadline: fmt(deadline),
        isCriticalPath: task.isCriticalPath
      };
    });
    return of({
      templateCode: t.templateCode,
      orderStartDate: params.orderStartDate,
      shipDate: params.shipDate,
      leadTimeDays,
      tasks
    });
  }
  static \u0275fac = function MockTemplatesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MockTemplatesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MockTemplatesService, factory: _MockTemplatesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MockTemplatesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/screens/line-editor.component.ts
function LineEditorComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LineEditorComponent_label_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, " *");
    \u0275\u0275elementEnd();
  }
}
function LineEditorComponent_label_9_select_4_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("value", o_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r4);
  }
}
function LineEditorComponent_label_9_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 30);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_label_9_select_4_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHead(f_r3.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 31);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LineEditorComponent_label_9_select_4_option_3_Template, 2, 2, "option", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r0.head()[f_r3.key] ?? "")("disabled", !!f_r3.immutable && ctx_r0.existing);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", f_r3.options);
  }
}
function LineEditorComponent_label_9_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 34);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_label_9_input_5_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHead(f_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", !!ctx_r0.head()[f_r3.key]);
    \u0275\u0275control();
  }
}
function LineEditorComponent_label_9_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 35);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_label_9_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setHead(f_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("type", f_r3.type)("ngModel", ctx_r0.head()[f_r3.key] ?? "")("placeholder", f_r3.placeholder ?? "")("readonly", !!f_r3.immutable && ctx_r0.existing);
    \u0275\u0275control();
  }
}
function LineEditorComponent_label_9_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 19);
    \u0275\u0275text(1, " Fixed once the template exists \u2014 records made from it refer to this code. ");
    \u0275\u0275elementEnd();
  }
}
function LineEditorComponent_label_9_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.hint);
  }
}
function LineEditorComponent_label_9_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fe_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fe_r7);
  }
}
function LineEditorComponent_label_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 21)(1, "span", 22);
    \u0275\u0275text(2);
    \u0275\u0275template(3, LineEditorComponent_label_9_span_3_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, LineEditorComponent_label_9_select_4_Template, 4, 3, "select", 24)(5, LineEditorComponent_label_9_input_5_Template, 1, 1, "input", 25)(6, LineEditorComponent_label_9_input_6_Template, 1, 4, "input", 26)(7, LineEditorComponent_label_9_small_7_Template, 2, 0, "small", 27)(8, LineEditorComponent_label_9_small_8_Template, 2, 1, "small", 27)(9, LineEditorComponent_label_9_small_9_Template, 2, 1, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "text" || f_r3.type === "number");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.immutable && ctx_r0.existing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.hint && !(f_r3.immutable && ctx_r0.existing));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fieldErrors[f_r3.key]);
  }
}
function LineEditorComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275styleProp("min-width", c_r8.width ?? "auto");
    \u0275\u0275classProp("right", c_r8.align === "r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.label);
  }
}
function LineEditorComponent_tr_26_td_3_select_1_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r13 = ctx.$implicit;
    \u0275\u0275property("value", o_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r13);
  }
}
function LineEditorComponent_tr_26_td_3_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 45);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_tr_26_td_3_select_1_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const i_r12 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setLine(i_r12, c_r11.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 31);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LineEditorComponent_tr_26_td_3_select_1_option_3_Template, 2, 2, "option", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", line_r14[c_r11.key] ?? "");
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", c_r11.options);
  }
}
function LineEditorComponent_tr_26_td_3_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 34);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_tr_26_td_3_input_2_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const i_r12 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setLine(i_r12, c_r11.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", !!line_r14[c_r11.key]);
    \u0275\u0275control();
  }
}
function LineEditorComponent_tr_26_td_3_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 46);
    \u0275\u0275listener("ngModelChange", function LineEditorComponent_tr_26_td_3_input_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const c_r11 = \u0275\u0275nextContext().$implicit;
      const i_r12 = \u0275\u0275nextContext().index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setLine(i_r12, c_r11.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const c_r11 = \u0275\u0275nextContext().$implicit;
    const line_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("type", c_r11.type)("ngModel", line_r14[c_r11.key] ?? "")("placeholder", c_r11.placeholder ?? "");
    \u0275\u0275control();
  }
}
function LineEditorComponent_tr_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, LineEditorComponent_tr_26_td_3_select_1_Template, 4, 2, "select", 43)(2, LineEditorComponent_tr_26_td_3_input_2_Template, 1, 1, "input", 25)(3, LineEditorComponent_tr_26_td_3_input_3_Template, 1, 3, "input", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r11.align === "r");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r11.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r11.type === "check");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r11.type === "text" || c_r11.type === "number");
  }
}
function LineEditorComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LineEditorComponent_tr_26_td_3_Template, 4, 5, "td", 38);
    \u0275\u0275elementStart(4, "td", 39)(5, "button", 40);
    \u0275\u0275listener("click", function LineEditorComponent_tr_26_Template_button_click_5_listener() {
      const i_r12 = \u0275\u0275restoreView(_r9).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.move(i_r12, -1));
    });
    \u0275\u0275text(6, "\u2191");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 41);
    \u0275\u0275listener("click", function LineEditorComponent_tr_26_Template_button_click_7_listener() {
      const i_r12 = \u0275\u0275restoreView(_r9).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.move(i_r12, 1));
    });
    \u0275\u0275text(8, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 42);
    \u0275\u0275listener("click", function LineEditorComponent_tr_26_Template_button_click_9_listener() {
      const i_r12 = \u0275\u0275restoreView(_r9).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.removeLine(i_r12));
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.lineColumns);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", i_r12 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", i_r12 === ctx_r0.lines().length - 1);
  }
}
function LineEditorComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r0.lineColumns.length + 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" No ", ctx_r0.lineNoun, "s yet. Add the first one. ");
  }
}
var LineEditorComponent = class _LineEditorComponent {
  title;
  headerFields;
  lineColumns;
  lineNoun;
  header = {};
  rows = [];
  existing = false;
  busy = false;
  error = null;
  fieldErrors = {};
  /** Values a newly added line starts with, so the common case needs no typing. */
  lineDefaults = {};
  save = new EventEmitter();
  cancelled = new EventEmitter();
  head = signal(
    {},
    ...ngDevMode ? [{ debugName: "head" }] : (
      /* istanbul ignore next */
      []
    )
  );
  lines = signal(
    [],
    ...ngDevMode ? [{ debugName: "lines" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.head.set(__spreadValues({}, this.header));
    this.lines.set(this.rows.map((r) => __spreadValues({}, r)));
  }
  setHead(key, value) {
    this.head.update((h) => __spreadProps(__spreadValues({}, h), { [key]: value }));
  }
  setLine(index, key, value) {
    this.lines.update((ls) => ls.map((l, i) => i === index ? __spreadProps(__spreadValues({}, l), { [key]: value }) : l));
  }
  addLine() {
    this.lines.update((ls) => [...ls, __spreadValues({}, this.lineDefaults)]);
  }
  removeLine(index) {
    this.lines.update((ls) => ls.filter((_, i) => i !== index));
  }
  move(index, by) {
    this.lines.update((ls) => {
      const next = [...ls];
      const [row] = next.splice(index, 1);
      next.splice(index + by, 0, row);
      return next;
    });
  }
  /** Sequence numbers come from the order on screen, never from typing. */
  emitSave() {
    this.save.emit({
      header: this.head(),
      lines: this.lines().map((l, i) => __spreadProps(__spreadValues({}, l), { sequenceNo: i + 1 }))
    });
  }
  static \u0275fac = function LineEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LineEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LineEditorComponent, selectors: [["app-line-editor"]], inputs: { title: "title", headerFields: "headerFields", lineColumns: "lineColumns", lineNoun: "lineNoun", header: "header", rows: "rows", existing: "existing", busy: "busy", error: "error", fieldErrors: "fieldErrors", lineDefaults: "lineDefaults" }, outputs: { save: "save", cancelled: "cancelled" }, decls: 35, vars: 13, consts: [[1, "sheet-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "sheet", "wide"], [1, "sheet-head"], ["type", "button", "aria-label", "Close", 1, "btn", 3, "click"], ["class", "error", 4, "ngIf"], [1, "fields"], ["class", "field", 4, "ngFor", "ngForOf"], [1, "linehead"], [1, "count"], ["type", "button", 1, "btn", 3, "click"], [1, "linescroll"], [1, "grid", "lines"], [1, "right"], [3, "right", "min-width", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "actions"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["type", "button", 1, "btn", 3, "click", "disabled"], [1, "hint"], [1, "error"], [1, "field"], [1, "label"], ["class", "req", "aria-hidden", "true", 4, "ngIf"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["type", "checkbox", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "ngModel", "placeholder", "readonly", "ngModelChange", 4, "ngIf"], ["class", "hint", 4, "ngIf"], ["class", "fielderr", 4, "ngIf"], ["aria-hidden", "true", 1, "req"], [3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "type", "ngModel", "placeholder", "readonly"], [1, "fielderr"], [1, "right", "ident"], [3, "right", 4, "ngFor", "ngForOf"], [1, "rowactions"], ["type", "button", "aria-label", "Move up", 1, "btn", 3, "click", "disabled"], ["type", "button", "aria-label", "Move down", 1, "btn", 3, "click", "disabled"], ["type", "button", "aria-label", "Remove line", 1, "btn", 3, "click"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [3, "ngModelChange", "type", "ngModel", "placeholder"], [1, "empty"]], template: function LineEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function LineEditorComponent_Template_div_click_0_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "section", 1)(2, "header", 2)(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function LineEditorComponent_Template_button_click_5_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275text(6, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, LineEditorComponent_p_7_Template, 2, 1, "p", 4);
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, LineEditorComponent_label_9_Template, 10, 8, "label", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "strong");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function LineEditorComponent_Template_button_click_15_listener() {
        return ctx.addLine();
      });
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 10)(18, "table", 11)(19, "thead")(20, "tr")(21, "th", 12);
      \u0275\u0275text(22, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, LineEditorComponent_th_23_Template, 2, 5, "th", 13);
      \u0275\u0275element(24, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "tbody");
      \u0275\u0275template(26, LineEditorComponent_tr_26_Template, 11, 4, "tr", 14)(27, LineEditorComponent_tr_27_Template, 3, 2, "tr", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "footer", 16)(29, "button", 17);
      \u0275\u0275listener("click", function LineEditorComponent_Template_button_click_29_listener() {
        return ctx.emitSave();
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 18);
      \u0275\u0275listener("click", function LineEditorComponent_Template_button_click_31_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275text(32, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 19);
      \u0275\u0275text(34, " Nothing is saved until you press this \u2014 the whole template goes at once. ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.headerFields);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.lineNoun, "s");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.lines().length);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("+ Add ", ctx.lineNoun);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.lineColumns);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.lines());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.lines().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy ? "Saving\u2026" : ctx.existing ? "Save changes" : "Create template", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LineEditorComponent, [{
    type: Component,
    args: [{
      selector: "app-line-editor",
      standalone: true,
      imports: [CommonModule, FormsModule],
      template: `
    <div class="sheet-backdrop" (click)="cancelled.emit()"></div>

    <section class="sheet wide" role="dialog" aria-modal="true" [attr.aria-label]="title">
      <header class="sheet-head">
        <h2>{{ title }}</h2>
        <button type="button" class="btn" (click)="cancelled.emit()" aria-label="Close">\u2715</button>
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
            <option value="">\u2014</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <input *ngIf="f.type === 'check'" type="checkbox"
                 [ngModel]="!!head()[f.key]" (ngModelChange)="setHead(f.key, $event)" />

          <input *ngIf="f.type === 'text' || f.type === 'number'" [type]="f.type"
                 [ngModel]="head()[f.key] ?? ''" (ngModelChange)="setHead(f.key, $event)"
                 [placeholder]="f.placeholder ?? ''"
                 [readonly]="!!f.immutable && existing" />

          <small class="hint" *ngIf="f.immutable && existing">
            Fixed once the template exists \u2014 records made from it refer to this code.
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
                  <option value="">\u2014</option>
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
                        (click)="move(i, -1)" aria-label="Move up">\u2191</button>
                <button type="button" class="btn" [disabled]="i === lines().length - 1"
                        (click)="move(i, 1)" aria-label="Move down">\u2193</button>
                <button type="button" class="btn" (click)="removeLine(i)"
                        aria-label="Remove line">\u2715</button>
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
          {{ busy ? 'Saving\u2026' : (existing ? 'Save changes' : 'Create template') }}
        </button>
        <button type="button" class="btn" [disabled]="busy" (click)="cancelled.emit()">
          Cancel
        </button>
        <span class="hint">
          Nothing is saved until you press this \u2014 the whole template goes at once.
        </span>
      </footer>
    </section>
  `
    }]
  }], null, { title: [{
    type: Input,
    args: [{ required: true }]
  }], headerFields: [{
    type: Input,
    args: [{ required: true }]
  }], lineColumns: [{
    type: Input,
    args: [{ required: true }]
  }], lineNoun: [{
    type: Input,
    args: [{ required: true }]
  }], header: [{
    type: Input
  }], rows: [{
    type: Input
  }], existing: [{
    type: Input
  }], busy: [{
    type: Input
  }], error: [{
    type: Input
  }], fieldErrors: [{
    type: Input
  }], lineDefaults: [{
    type: Input
  }], save: [{
    type: Output
  }], cancelled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LineEditorComponent, { className: "LineEditorComponent", filePath: "src/app/shared/screens/line-editor.component.ts", lineNumber: 154 });
})();

export {
  MockTemplatesService,
  LineEditorComponent
};
//# debugId=e21eeb78-696f-546c-b301-9dbf073510df
//# sourceMappingURL=chunk-T2X54426.js.map
