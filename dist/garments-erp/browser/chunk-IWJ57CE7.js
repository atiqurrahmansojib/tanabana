import {
  LineEditorComponent,
  MockTemplatesService
} from "./chunk-T2X54426.js";
import {
  ExportMenuComponent,
  exportAs
} from "./chunk-ONGSJ2K5.js";
import {
  ScreenHeaderComponent,
  toSignal
} from "./chunk-NW5637YH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DRVFIA4U.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  AuthService
} from "./chunk-QXGMD44U.js";
import "./chunk-DOSEESBN.js";
import "./chunk-SO5TSJGE.js";
import "./chunk-HCPETOFS.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-S4ERSNJR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XANLCPOO.js";

// src/app/features/merchandising/tna-template-screen.component.ts
var _c0 = () => ({ offsetAnchor: "ORDER_START", offsetDays: 0, responsibleRole: "MERCH", taskProcess: "ORDER", isCriticalPath: false });
function TnaTemplateScreenComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r1.templateCode, " \u2014 ", t_r1.templateName, " ");
  }
}
function TnaTemplateScreenComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.ngIf;
    \u0275\u0275attribute("data-state", s_r2.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.status);
  }
}
function TnaTemplateScreenComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "DEFAULT");
    \u0275\u0275elementEnd();
  }
}
function TnaTemplateScreenComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "t");
    \u0275\u0275pipe(6, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.productType);
    \u0275\u0275advance();
    \u0275\u0275classProp("any", !s_r3.buyerCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.buyerCode ? \u0275\u0275pipeBind1(5, 4, "Buyer") + ": " + s_r3.buyerCode : \u0275\u0275pipeBind1(6, 6, "All buyers"), " ");
  }
}
function TnaTemplateScreenComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r4.totalTasks, " ", \u0275\u0275pipeBind1(2, 2, "milestones"), " ");
  }
}
function TnaTemplateScreenComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 23);
    \u0275\u0275listener("click", function TnaTemplateScreenComponent_ng_container_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.edit());
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function TnaTemplateScreenComponent_ng_container_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.remove());
    });
    \u0275\u0275text(4, " Remove ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function TnaTemplateScreenComponent_ng_container_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.add());
    });
    \u0275\u0275text(6, "New template");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r5.selected());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r5.selected());
  }
}
function TnaTemplateScreenComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r7);
  }
}
function TnaTemplateScreenComponent_table_12_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Falls on");
    \u0275\u0275elementEnd();
  }
}
function TnaTemplateScreenComponent_table_12_tr_23_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("data-state", t_r8.approvalNature);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r8.approvalNature, " ");
  }
}
function TnaTemplateScreenComponent_table_12_tr_23_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function TnaTemplateScreenComponent_table_12_tr_23_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.deadlineFor(t_r8.sequenceNo) ?? "\u2014");
  }
}
function TnaTemplateScreenComponent_table_12_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, TnaTemplateScreenComponent_table_12_tr_23_span_11_Template, 2, 2, "span", 5)(12, TnaTemplateScreenComponent_table_12_tr_23_span_12_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, TnaTemplateScreenComponent_table_12_tr_23_td_21_Template, 2, 1, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.sequenceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.taskName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r8.taskProcess);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.responsibleRole);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", t_r8.approvalNature);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !t_r8.approvalNature);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.offsetAnchor === "SHIP_DATE" ? "Ship date" : "Order start");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.offsetLabel(t_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.predecessorSequenceNo ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.isCriticalPath ? "\u25CF" : "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.preview());
  }
}
function TnaTemplateScreenComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 25)(1, "thead")(2, "tr")(3, "th", 26);
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Milestone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Anchored to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16, "Offset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 26);
    \u0275\u0275text(18, "After");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Critical");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, TnaTemplateScreenComponent_table_12_th_21_Template, 2, 0, "th", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, TnaTemplateScreenComponent_table_12_tr_23_Template, 22, 11, "tr", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r9 = ctx.ngIf;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(21);
    \u0275\u0275property("ngIf", ctx_r5.preview());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", s_r9.tasks);
  }
}
function TnaTemplateScreenComponent_app_line_editor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-line-editor", 32);
    \u0275\u0275listener("save", function TnaTemplateScreenComponent_app_line_editor_13_Template_app_line_editor_save_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.commit($event));
    })("cancelled", function TnaTemplateScreenComponent_app_line_editor_13_Template_app_line_editor_cancelled_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.closeEditor());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r5.editing() ? "Edit TNA template" : "New TNA template")("headerFields", ctx_r5.headerFields)("lineColumns", ctx_r5.lineColumns)("header", ctx_r5.editorHeader())("rows", ctx_r5.editorLines())("existing", !!ctx_r5.editing())("busy", ctx_r5.saving())("error", ctx_r5.saveError())("fieldErrors", ctx_r5.saveFieldErrors())("lineDefaults", \u0275\u0275pureFunction0(10, _c0));
  }
}
function TnaTemplateScreenComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11.leadTimeDays, " days from order to shipment ");
  }
}
function TnaTemplateScreenComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r12);
  }
}
function TnaTemplateScreenComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Enter an order start and a ship date to see where every milestone lands. Nothing is saved \u2014 this is the schedule the order would run to. ");
    \u0275\u0275elementEnd();
  }
}
var TnaTemplateScreenComponent = class _TnaTemplateScreenComponent {
  templatesSvc = inject(MockTemplatesService);
  route = inject(ActivatedRoute);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  templates = signal(
    [],
    ...ngDevMode ? [{ debugName: "templates" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selected = signal(
    null,
    ...ngDevMode ? [{ debugName: "selected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  preview = signal(
    null,
    ...ngDevMode ? [{ debugName: "preview" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  previewError = signal(
    null,
    ...ngDevMode ? [{ debugName: "previewError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  orderStart = signal(
    "",
    ...ngDevMode ? [{ debugName: "orderStart" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shipDate = signal(
    "",
    ...ngDevMode ? [{ debugName: "shipDate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  auth = inject(AuthService);
  editorOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "editorOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editing = signal(
    null,
    ...ngDevMode ? [{ debugName: "editing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editorHeader = signal(
    {},
    ...ngDevMode ? [{ debugName: "editorHeader" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editorLines = signal(
    [],
    ...ngDevMode ? [{ debugName: "editorLines" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saveError = signal(
    null,
    ...ngDevMode ? [{ debugName: "saveError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saveFieldErrors = signal(
    {},
    ...ngDevMode ? [{ debugName: "saveFieldErrors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  headerFields = [
    {
      key: "templateCode",
      label: "Template code",
      type: "text",
      required: true,
      immutable: true,
      placeholder: "TNA-KNIT-90"
    },
    {
      key: "templateName",
      label: "Template name",
      type: "text",
      required: true,
      placeholder: "Knit basic \u2014 90 day"
    },
    {
      key: "productType",
      label: "Product type",
      type: "text",
      required: true,
      placeholder: "KNIT_TOP"
    },
    {
      key: "buyerCode",
      label: "Buyer code",
      type: "text",
      hint: "Leave blank to serve every buyer for this product type."
    },
    {
      key: "isDefault",
      label: "Default for this product type",
      type: "check",
      hint: "Only one template can be the default \u2014 the order flow would otherwise guess."
    },
    { key: "status", label: "Status", type: "select", options: ["ACTIVE", "ARCHIVED"] }
  ];
  lineColumns = [
    { key: "taskName", label: "Milestone", type: "text", width: "210px" },
    {
      key: "taskProcess",
      label: "Process",
      type: "select",
      width: "120px",
      options: [
        "ORDER",
        "COSTING",
        "FABRIC",
        "TRIM",
        "APPROVAL",
        "SAMPLE",
        "CUTTING",
        "SEWING",
        "QUALITY",
        "COMPLY",
        "SHIP"
      ]
    },
    {
      key: "responsibleRole",
      label: "Owner",
      type: "select",
      width: "100px",
      options: ["MERCH", "SCM", "STORE", "IE", "GM", "QC", "COMM", "FIN", "HR", "DYE", "ADMIN"]
    },
    {
      key: "approvalNature",
      label: "Approval",
      type: "select",
      width: "110px",
      options: ["BUYER", "INTERNAL"]
    },
    {
      key: "offsetAnchor",
      label: "Anchored to",
      type: "select",
      width: "130px",
      options: ["ORDER_START", "SHIP_DATE"]
    },
    { key: "offsetDays", label: "Offset (days)", type: "number", align: "r", width: "110px" },
    { key: "predecessorSequenceNo", label: "After #", type: "number", align: "r", width: "80px" },
    { key: "isCriticalPath", label: "Critical", type: "check", width: "70px" }
  ];
  ngOnInit() {
    this.templatesSvc.listTna().subscribe({
      next: (page) => {
        this.templates.set(page.content);
        if (page.content.length) {
          this.selectedId.set(page.content[0].id);
          this.selected.set(page.content[0]);
        }
      },
      error: (err) => this.error.set(err?.error?.message ?? "The templates could not be loaded.")
    });
  }
  select(id) {
    this.selectedId.set(id);
    this.selected.set(this.templates().find((t) => t.id === id) ?? null);
    this.preview.set(null);
    this.previewError.set(null);
  }
  runPreview() {
    const id = this.selectedId();
    if (!id || !this.orderStart() || !this.shipDate()) {
      this.previewError.set("Both an order start and a ship date are needed.");
      return;
    }
    this.previewError.set(null);
    this.templatesSvc.instantiate(id, {
      orderStartDate: this.orderStart(),
      shipDate: this.shipDate()
    }).subscribe({
      next: (p) => this.preview.set(p),
      error: (err) => {
        this.preview.set(null);
        this.previewError.set(err?.error?.message ?? "This plan could not be dated.");
      }
    });
  }
  canWrite() {
    return this.auth.has("M1_MASTER_WRITE");
  }
  add() {
    this.editing.set(null);
    this.editorHeader.set({ status: "ACTIVE", isDefault: false });
    this.editorLines.set([]);
    this.openEditor();
  }
  edit() {
    const s = this.selected();
    if (!s)
      return;
    this.editing.set(s);
    this.editorHeader.set({
      templateCode: s.templateCode,
      templateName: s.templateName,
      productType: s.productType,
      buyerCode: s.buyerCode ?? "",
      isDefault: s.isDefault,
      status: s.status
    });
    this.editorLines.set(s.tasks.map((t) => __spreadValues({}, t)));
    this.openEditor();
  }
  openEditor() {
    this.saveError.set(null);
    this.saveFieldErrors.set({});
    this.editorOpen.set(true);
  }
  closeEditor() {
    this.editorOpen.set(false);
  }
  commit(payload) {
    this.saving.set(true);
    this.saveError.set(null);
    this.saveFieldErrors.set({});
    const body = __spreadProps(__spreadValues({}, payload.header), {
      buyerCode: payload.header["buyerCode"] || null,
      tasks: payload.lines.map((l) => ({
        sequenceNo: l["sequenceNo"],
        taskName: l["taskName"],
        taskProcess: l["taskProcess"],
        offsetAnchor: l["offsetAnchor"],
        offsetDays: Number(l["offsetDays"] ?? 0),
        responsibleRole: l["responsibleRole"],
        approvalNature: l["approvalNature"] || null,
        predecessorSequenceNo: l["predecessorSequenceNo"] ? Number(l["predecessorSequenceNo"]) : null,
        isCriticalPath: !!l["isCriticalPath"]
      }))
    });
    const existing = this.editing();
    if (existing) {
      body["version"] = existing.version;
    }
    this.templatesSvc.saveTnaTemplate(existing?.id ?? null, body).subscribe({
      next: () => {
        this.saving.set(false);
        this.closeEditor();
        this.reload();
      },
      error: (err) => {
        this.saving.set(false);
        this.saveFieldErrors.set(err?.error?.fieldErrors ?? {});
        this.saveError.set(err?.error?.message ?? "This template could not be saved.");
      }
    });
  }
  remove() {
    const s = this.selected();
    if (!s)
      return;
    if (!confirm(`Remove ${s.templateCode} \u2014 ${s.templateName}?`))
      return;
    this.templatesSvc.removeTna(s.id).subscribe({
      next: () => this.reload(),
      error: (err) => this.error.set(err?.error?.message ?? "This template could not be removed.")
    });
  }
  /** Sends the plan as a sheet, with the dated deadlines when they exist. */
  download(format) {
    const s = this.selected();
    if (!s)
      return;
    const columns = [
      { key: "sequenceNo", label: "#" },
      { key: "taskName", label: "Milestone" },
      { key: "taskProcess", label: "Process" },
      { key: "responsibleRole", label: "Owner" },
      { key: "approvalNature", label: "Approval" },
      { key: "offsetAnchor", label: "Anchored to" },
      { key: "offsetDays", label: "Offset (days)" },
      { key: "predecessorSequenceNo", label: "After" },
      { key: "isCriticalPath", label: "Critical path" },
      { key: "deadline", label: "Falls on" }
    ];
    const rows = s.tasks.map((t) => __spreadProps(__spreadValues({}, t), {
      deadline: this.deadlineFor(t.sequenceNo) ?? ""
    }));
    void exportAs(format, {
      title: `${s.templateCode} \u2014 ${s.templateName}`,
      columns,
      rows,
      subtitle: `${s.productType} \xB7 ${s.totalTasks} milestones`
    });
  }
  reload() {
    const keep = this.selectedId();
    this.templatesSvc.listTna().subscribe({
      next: (page) => {
        this.templates.set(page.content);
        const found = page.content.find((t) => t.id === keep) ?? page.content[0] ?? null;
        this.selectedId.set(found?.id ?? null);
        this.selected.set(found);
        this.preview.set(null);
      }
    });
  }
  offsetLabel(task) {
    if (task.offsetDays === 0)
      return "on the day";
    return task.offsetDays > 0 ? `+${task.offsetDays} d` : `${Math.abs(task.offsetDays)} d before`;
  }
  deadlineFor(sequenceNo) {
    return this.preview()?.tasks.find((t) => t.sequenceNo === sequenceNo)?.deadline;
  }
  static \u0275fac = function TnaTemplateScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TnaTemplateScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TnaTemplateScreenComponent, selectors: [["app-tna-template-screen"]], decls: 27, vars: 17, consts: [[3, "meta"], [1, "panel"], [1, "toolbar"], ["aria-label", "Template", 1, "filter", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pill", 4, "ngIf"], ["class", "scope", 4, "ngIf"], ["class", "count", 4, "ngIf"], [3, "chosen", "disabled"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["lineNoun", "milestone", 3, "title", "headerFields", "lineColumns", "header", "rows", "existing", "busy", "error", "fieldErrors", "lineDefaults", "save", "cancelled", 4, "ngIf"], ["for", "start", 1, "label"], ["id", "start", "type", "date", 3, "ngModelChange", "ngModel"], ["for", "ship", 1, "label"], ["id", "ship", "type", "date", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "primary", 3, "click"], ["class", "load", 4, "ngIf"], [3, "value"], [1, "pill"], [1, "scope"], [1, "count"], ["type", "button", 1, "btn", 3, "click", "disabled"], [1, "error"], [1, "grid"], [1, "right"], [4, "ngFor", "ngForOf"], [1, "right", "ident"], [1, "ident"], ["class", "date", 4, "ngIf"], [1, "date"], ["lineNoun", "milestone", 3, "save", "cancelled", "title", "headerFields", "lineColumns", "header", "rows", "existing", "busy", "error", "fieldErrors", "lineDefaults"], [1, "load"]], template: function TnaTemplateScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "select", 3);
      \u0275\u0275listener("ngModelChange", function TnaTemplateScreenComponent_Template_select_ngModelChange_3_listener($event) {
        return ctx.select(+$event);
      });
      \u0275\u0275template(4, TnaTemplateScreenComponent_option_4_Template, 2, 3, "option", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(5, TnaTemplateScreenComponent_span_5_Template, 2, 2, "span", 5)(6, TnaTemplateScreenComponent_span_6_Template, 2, 0, "span", 5)(7, TnaTemplateScreenComponent_span_7_Template, 7, 8, "span", 6)(8, TnaTemplateScreenComponent_span_8_Template, 3, 4, "span", 7);
      \u0275\u0275elementStart(9, "app-export-menu", 8);
      \u0275\u0275listener("chosen", function TnaTemplateScreenComponent_Template_app_export_menu_chosen_9_listener($event) {
        return ctx.download($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, TnaTemplateScreenComponent_ng_container_10_Template, 7, 2, "ng-container", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, TnaTemplateScreenComponent_p_11_Template, 2, 1, "p", 10)(12, TnaTemplateScreenComponent_table_12_Template, 24, 2, "table", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, TnaTemplateScreenComponent_app_line_editor_13_Template, 1, 11, "app-line-editor", 12);
      \u0275\u0275elementStart(14, "section", 1)(15, "div", 2)(16, "label", 13);
      \u0275\u0275text(17, "Order start");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 14);
      \u0275\u0275listener("ngModelChange", function TnaTemplateScreenComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.orderStart.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "label", 15);
      \u0275\u0275text(20, "Ship date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 16);
      \u0275\u0275listener("ngModelChange", function TnaTemplateScreenComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.shipDate.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(22, "button", 17);
      \u0275\u0275listener("click", function TnaTemplateScreenComponent_Template_button_click_22_listener() {
        return ctx.runPreview();
      });
      \u0275\u0275text(23, "Date this plan");
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, TnaTemplateScreenComponent_span_24_Template, 2, 1, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, TnaTemplateScreenComponent_p_25_Template, 2, 1, "p", 10)(26, TnaTemplateScreenComponent_p_26_Template, 2, 0, "p", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.selectedId());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.templates());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected()?.isDefault);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selected());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.editorOpen());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.orderStart());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.shipDate());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.preview());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.preview() && !ctx.previewError());
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    ScreenHeaderComponent,
    LineEditorComponent,
    ExportMenuComponent,
    TPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TnaTemplateScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-tna-template-screen",
      standalone: true,
      imports: [
        CommonModule,
        FormsModule,
        ScreenHeaderComponent,
        LineEditorComponent,
        ExportMenuComponent,
        TPipe
      ],
      template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <div class="toolbar">
        <select class="filter" [ngModel]="selectedId()" (ngModelChange)="select(+$event)"
                aria-label="Template">
          <option *ngFor="let t of templates()" [value]="t.id">
            {{ t.templateCode }} \u2014 {{ t.templateName }}
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
              <span *ngIf="!t.approvalNature">\u2014</span>
            </td>
            <td class="ident">{{ t.offsetAnchor === 'SHIP_DATE' ? 'Ship date' : 'Order start' }}</td>
            <td class="right">{{ offsetLabel(t) }}</td>
            <td class="right ident">{{ t.predecessorSequenceNo ?? '\u2014' }}</td>
            <td>{{ t.isCriticalPath ? '\u25CF' : '' }}</td>
            <td class="date" *ngIf="preview()">{{ deadlineFor(t.sequenceNo) ?? '\u2014' }}</td>
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
        Nothing is saved \u2014 this is the schedule the order would run to.
      </p>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TnaTemplateScreenComponent, { className: "TnaTemplateScreenComponent", filePath: "src/app/features/merchandising/tna-template-screen.component.ts", lineNumber: 141 });
})();
export {
  TnaTemplateScreenComponent
};
//# debugId=31f3dc6c-ea3e-5372-aa3b-3580bed5bf01
//# sourceMappingURL=chunk-IWJ57CE7.js.map
