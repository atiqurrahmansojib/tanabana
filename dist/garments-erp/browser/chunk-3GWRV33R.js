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
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
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
  DecimalPipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4
} from "./chunk-S4ERSNJR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XANLCPOO.js";

// src/app/features/merchandising/costing-template-screen.component.ts
var _c0 = () => ({ itemGroup: "TRIM", uom: "PCS", rateCurrency: "BDT", wastageAllowance: 2, purchaseType: "LOCAL", defaultConsumption: 1, defaultRate: 0, isMandatory: false });
function CostingTemplateScreenComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 22);
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
function CostingTemplateScreenComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
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
function CostingTemplateScreenComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "DEFAULT");
    \u0275\u0275elementEnd();
  }
}
function CostingTemplateScreenComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "t");
    \u0275\u0275pipe(6, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "t");
    \u0275\u0275pipe(10, "t");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.productType);
    \u0275\u0275advance();
    \u0275\u0275classProp("any", !s_r3.buyerCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.buyerCode ? \u0275\u0275pipeBind1(5, 7, "Buyer") + ": " + s_r3.buyerCode : \u0275\u0275pipeBind1(6, 9, "All buyers"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("any", !s_r3.unitCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.unitCode ? \u0275\u0275pipeBind1(9, 11, "Unit") + ": " + s_r3.unitCode : \u0275\u0275pipeBind1(10, 13, "All units"), " ");
  }
}
function CostingTemplateScreenComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", s_r4.totalItems, " ", \u0275\u0275pipeBind1(2, 4, "lines"), " \xB7 ", s_r4.headOfficeCostPct, "% + ", s_r4.targetMarginPct, "% ");
  }
}
function CostingTemplateScreenComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275listener("click", function CostingTemplateScreenComponent_ng_container_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.edit());
    });
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function CostingTemplateScreenComponent_ng_container_10_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.remove());
    });
    \u0275\u0275text(4, " Remove ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function CostingTemplateScreenComponent_ng_container_10_Template_button_click_5_listener() {
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
function CostingTemplateScreenComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r7);
  }
}
function CostingTemplateScreenComponent_table_12_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "With wastage");
    \u0275\u0275elementEnd();
  }
}
function CostingTemplateScreenComponent_table_12_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Cost / pc (", c_r8.quoteCurrency, ")");
  }
}
function CostingTemplateScreenComponent_table_12_tr_24_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function CostingTemplateScreenComponent_table_12_tr_24_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r5.grossFor(i_r9.sequenceNo), "1.4-4"), " ");
  }
}
function CostingTemplateScreenComponent_table_12_tr_24_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r5.costFor(i_r9.sequenceNo), "1.4-4"));
  }
}
function CostingTemplateScreenComponent_table_12_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275template(8, CostingTemplateScreenComponent_table_12_tr_24_span_8_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, CostingTemplateScreenComponent_table_12_tr_24_td_17_Template, 3, 4, "td", 36);
    \u0275\u0275elementStart(18, "td", 35);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 23);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 34);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, CostingTemplateScreenComponent_table_12_tr_24_td_26_Template, 3, 4, "td", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.sequenceNo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r9.itemGroup);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.itemName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r9.isMandatory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.uom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 14, i_r9.defaultConsumption, "1.4-4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 17, i_r9.wastageAllowance, "1.1-1"), "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r5.cost());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(20, 20, i_r9.defaultRate, "1.2-4"), " ", i_r9.rateCurrency);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-state", i_r9.purchaseType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9.purchaseType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9.defaultSupplierCode ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.cost());
  }
}
function CostingTemplateScreenComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 28)(1, "thead")(2, "tr")(3, "th", 29);
    \u0275\u0275text(4, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 29);
    \u0275\u0275text(12, "Consumption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 29);
    \u0275\u0275text(14, "Wastage");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CostingTemplateScreenComponent_table_12_th_15_Template, 2, 0, "th", 30);
    \u0275\u0275elementStart(16, "th", 29);
    \u0275\u0275text(17, "Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Bought");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, CostingTemplateScreenComponent_table_12_th_22_Template, 2, 1, "th", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, CostingTemplateScreenComponent_table_12_tr_24_Template, 27, 23, "tr", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.ngIf;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r5.cost());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r5.cost());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", s_r10.items);
  }
}
function CostingTemplateScreenComponent_app_line_editor_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-line-editor", 38);
    \u0275\u0275listener("save", function CostingTemplateScreenComponent_app_line_editor_13_Template_app_line_editor_save_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.commit($event));
    })("cancelled", function CostingTemplateScreenComponent_app_line_editor_13_Template_app_line_editor_cancelled_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.closeEditor());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r5.editing() ? "Edit costing template" : "New costing template")("headerFields", ctx_r5.headerFields)("lineColumns", ctx_r5.lineColumns)("header", ctx_r5.editorHeader())("rows", ctx_r5.editorLines())("existing", !!ctx_r5.editing())("busy", ctx_r5.saving())("error", ctx_r5.saveError())("fieldErrors", ctx_r5.saveFieldErrors())("lineDefaults", \u0275\u0275pureFunction0(10, _c0));
  }
}
function CostingTemplateScreenComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r12 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r12);
  }
}
function CostingTemplateScreenComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3, "Material / pc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9, "CM / pc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 40)(14, "span", 41);
    \u0275\u0275text(15, "Manufacturing / pc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 42);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 41);
    \u0275\u0275text(21, "Head office / pc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 42);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 40)(26, "span", 41);
    \u0275\u0275text(27, "Total cost / pc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 42);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 40)(32, "span", 41);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 42);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 40)(38, "span", 41);
    \u0275\u0275text(39, "Order value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 42);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r13 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, c_r13.materialCostPerPc, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, c_r13.cmPerPc, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 15, c_r13.manufacturingCostPerPc, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 18, c_r13.headOfficeCostPerPc, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 21, c_r13.totalCostPerPc, "1.4-4"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Quote at (", c_r13.targetMarginPct, "% margin)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 24, c_r13.suggestedFobPerPc, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(42, 27, c_r13.orderValue, "1.2-2"), " ", c_r13.quoteCurrency);
  }
}
function CostingTemplateScreenComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, " Enter a quantity and today's exchange rate to price this sheet. Nothing is saved \u2014 this is what the style costs and what it has to be quoted at. ");
    \u0275\u0275elementEnd();
  }
}
var CostingTemplateScreenComponent = class _CostingTemplateScreenComponent {
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
  cost = signal(
    null,
    ...ngDevMode ? [{ debugName: "cost" }] : (
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
  costError = signal(
    null,
    ...ngDevMode ? [{ debugName: "costError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  styleNo = signal(
    "ST-4001",
    ...ngDevMode ? [{ debugName: "styleNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qty = signal(
    1e4,
    ...ngDevMode ? [{ debugName: "qty" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fx = signal(
    120,
    ...ngDevMode ? [{ debugName: "fx" }] : (
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
      placeholder: "CT-KNIT-BASIC"
    },
    {
      key: "templateName",
      label: "Template name",
      type: "text",
      required: true,
      placeholder: "Knit basic tee"
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
      key: "unitCode",
      label: "Unit code",
      type: "text",
      hint: "CM differs between factories. Leave blank only if every unit quotes the same rate."
    },
    {
      key: "headOfficeCostPct",
      label: "Head office cost %",
      type: "number",
      hint: "Added to the manufacturing cost."
    },
    {
      key: "targetMarginPct",
      label: "Target margin %",
      type: "number",
      hint: "Taken on the selling price, not added to the cost \u2014 12% means cost / 0.88."
    },
    { key: "isDefault", label: "Default for this product type", type: "check" },
    { key: "status", label: "Status", type: "select", options: ["ACTIVE", "ARCHIVED"] }
  ];
  lineColumns = [
    {
      key: "itemGroup",
      label: "Group",
      type: "select",
      width: "110px",
      options: ["FABRIC", "TRIM", "PACK", "PROCESS", "CM", "OTHER"]
    },
    { key: "itemName", label: "Item", type: "text", width: "220px" },
    {
      key: "uom",
      label: "UOM",
      type: "select",
      width: "90px",
      options: ["KG", "YDS", "MTR", "PCS", "SET", "CONE", "DZN", "ROLL", "GROSS"]
    },
    { key: "defaultConsumption", label: "Consumption", type: "number", align: "r", width: "110px" },
    { key: "defaultRate", label: "Rate", type: "number", align: "r", width: "100px" },
    {
      key: "rateCurrency",
      label: "Currency",
      type: "select",
      width: "95px",
      options: ["USD", "BDT", "EUR", "GBP"]
    },
    { key: "wastageAllowance", label: "Wastage %", type: "number", align: "r", width: "100px" },
    {
      key: "purchaseType",
      label: "Bought",
      type: "select",
      width: "120px",
      options: ["LOCAL", "IMPORT", "NOMINATED"]
    },
    { key: "defaultSupplierCode", label: "Supplier", type: "text", width: "120px" },
    { key: "isMandatory", label: "Required", type: "check", width: "80px" }
  ];
  ngOnInit() {
    this.templatesSvc.listCosting().subscribe({
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
    this.cost.set(null);
    this.costError.set(null);
  }
  runCost() {
    const id = this.selectedId();
    if (!id)
      return;
    this.costError.set(null);
    this.templatesSvc.costSheet(id, {
      orderQtyPcs: this.qty(),
      bdtPerQuoteCurrency: this.fx(),
      quoteCurrency: "USD"
    }).subscribe({
      next: (c) => this.cost.set(c),
      error: (err) => {
        this.cost.set(null);
        this.costError.set(err?.error?.message ?? "This sheet could not be costed.");
      }
    });
  }
  canWrite() {
    return this.auth.has("M1_COSTING_WRITE");
  }
  add() {
    this.editing.set(null);
    this.editorHeader.set({
      status: "ACTIVE",
      isDefault: false,
      headOfficeCostPct: 4,
      targetMarginPct: 12
    });
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
      unitCode: s.unitCode ?? "",
      headOfficeCostPct: s.headOfficeCostPct,
      targetMarginPct: s.targetMarginPct,
      isDefault: s.isDefault,
      status: s.status
    });
    this.editorLines.set(s.items.map((i) => __spreadValues({}, i)));
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
      unitCode: payload.header["unitCode"] || null,
      items: payload.lines.map((l) => ({
        sequenceNo: l["sequenceNo"],
        itemGroup: l["itemGroup"],
        itemName: l["itemName"],
        uom: l["uom"],
        defaultConsumption: Number(l["defaultConsumption"] ?? 0),
        defaultRate: Number(l["defaultRate"] ?? 0),
        rateCurrency: l["rateCurrency"],
        wastageAllowance: Number(l["wastageAllowance"] ?? 0),
        purchaseType: l["purchaseType"],
        defaultSupplierCode: l["defaultSupplierCode"] || null,
        isMandatory: !!l["isMandatory"]
      }))
    });
    const existing = this.editing();
    if (existing) {
      body["version"] = existing.version;
    }
    this.templatesSvc.saveCostingTemplate(existing?.id ?? null, body).subscribe({
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
    this.templatesSvc.removeCosting(s.id).subscribe({
      next: () => this.reload(),
      error: (err) => this.error.set(err?.error?.message ?? "This template could not be removed.")
    });
  }
  /**
   * Exports the sheet, and the costed figures when it has been costed — which
   * is the file a merchandiser actually sends to the buyer.
   */
  download(format) {
    const s = this.selected();
    if (!s)
      return;
    const costed = this.cost();
    const columns = [
      { key: "sequenceNo", label: "#" },
      { key: "itemGroup", label: "Group" },
      { key: "itemName", label: "Item" },
      { key: "uom", label: "UOM" },
      { key: "defaultConsumption", label: "Consumption" },
      { key: "wastageAllowance", label: "Wastage %" },
      { key: "defaultRate", label: "Rate" },
      { key: "rateCurrency", label: "Currency" },
      { key: "purchaseType", label: "Bought" },
      { key: "defaultSupplierCode", label: "Supplier" },
      ...costed ? [{ key: "costPerPc", label: `Cost / pc (${costed.quoteCurrency})` }] : []
    ];
    const rows = s.items.map((i) => __spreadProps(__spreadValues({}, i), {
      costPerPc: this.costFor(i.sequenceNo) ?? ""
    }));
    void exportAs(format, {
      title: `${s.templateCode} \u2014 ${s.templateName}`,
      columns,
      rows,
      subtitle: costed ? `Costed at ${costed.suggestedFobPerPc} ${costed.quoteCurrency} / pc` : `${s.productType} \xB7 ${s.totalItems} lines`
    });
  }
  reload() {
    const keep = this.selectedId();
    this.templatesSvc.listCosting().subscribe({
      next: (page) => {
        this.templates.set(page.content);
        const found = page.content.find((t) => t.id === keep) ?? page.content[0] ?? null;
        this.selectedId.set(found?.id ?? null);
        this.selected.set(found);
        this.cost.set(null);
      }
    });
  }
  costFor(sequenceNo) {
    return this.cost()?.items.find((i) => i.sequenceNo === sequenceNo)?.costPerPc;
  }
  grossFor(sequenceNo) {
    return this.cost()?.items.find((i) => i.sequenceNo === sequenceNo)?.grossConsumption;
  }
  static \u0275fac = function CostingTemplateScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CostingTemplateScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CostingTemplateScreenComponent, selectors: [["app-costing-template-screen"]], decls: 30, vars: 18, consts: [[3, "meta"], [1, "panel"], [1, "toolbar"], ["aria-label", "Template", 1, "filter", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pill", 4, "ngIf"], ["class", "scope", 4, "ngIf"], ["class", "count", 4, "ngIf"], [3, "chosen", "disabled"], [4, "ngIf"], ["class", "error", 4, "ngIf"], ["class", "grid", 4, "ngIf"], ["lineNoun", "line", 3, "title", "headerFields", "lineColumns", "header", "rows", "existing", "busy", "error", "fieldErrors", "lineDefaults", "save", "cancelled", 4, "ngIf"], ["for", "style", 1, "label"], ["id", "style", "type", "text", "placeholder", "ST-4001", 3, "ngModelChange", "ngModel"], ["for", "qty", 1, "label"], ["id", "qty", "type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["for", "fx", 1, "label"], ["id", "fx", "type", "number", "min", "1", "step", "0.01", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "primary", 3, "click"], ["class", "kpis", 4, "ngIf"], ["class", "load", 4, "ngIf"], [3, "value"], [1, "pill"], [1, "scope"], [1, "count"], ["type", "button", 1, "btn", 3, "click", "disabled"], [1, "error"], [1, "grid"], [1, "right"], ["class", "right", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "right", "ident"], ["class", "star", "title", "Required", 4, "ngIf"], [1, "ident"], [1, "right", "num"], ["class", "right num", 4, "ngIf"], ["title", "Required", 1, "star"], ["lineNoun", "line", 3, "save", "cancelled", "title", "headerFields", "lineColumns", "header", "rows", "existing", "busy", "error", "fieldErrors", "lineDefaults"], [1, "kpis"], [1, "kpi"], [1, "label"], [1, "value"], [1, "load"]], template: function CostingTemplateScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "select", 3);
      \u0275\u0275listener("ngModelChange", function CostingTemplateScreenComponent_Template_select_ngModelChange_3_listener($event) {
        return ctx.select(+$event);
      });
      \u0275\u0275template(4, CostingTemplateScreenComponent_option_4_Template, 2, 3, "option", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(5, CostingTemplateScreenComponent_span_5_Template, 2, 2, "span", 5)(6, CostingTemplateScreenComponent_span_6_Template, 2, 0, "span", 5)(7, CostingTemplateScreenComponent_span_7_Template, 11, 15, "span", 6)(8, CostingTemplateScreenComponent_span_8_Template, 3, 6, "span", 7);
      \u0275\u0275elementStart(9, "app-export-menu", 8);
      \u0275\u0275listener("chosen", function CostingTemplateScreenComponent_Template_app_export_menu_chosen_9_listener($event) {
        return ctx.download($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, CostingTemplateScreenComponent_ng_container_10_Template, 7, 2, "ng-container", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, CostingTemplateScreenComponent_p_11_Template, 2, 1, "p", 10)(12, CostingTemplateScreenComponent_table_12_Template, 25, 3, "table", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, CostingTemplateScreenComponent_app_line_editor_13_Template, 1, 11, "app-line-editor", 12);
      \u0275\u0275elementStart(14, "section", 1)(15, "div", 2)(16, "label", 13);
      \u0275\u0275text(17, "Style");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 14);
      \u0275\u0275listener("ngModelChange", function CostingTemplateScreenComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.styleNo.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "label", 15);
      \u0275\u0275text(20, "Order qty (pcs)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 16);
      \u0275\u0275listener("ngModelChange", function CostingTemplateScreenComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.qty.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(22, "label", 17);
      \u0275\u0275text(23, "BDT per USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 18);
      \u0275\u0275listener("ngModelChange", function CostingTemplateScreenComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.fx.set(+$event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(25, "button", 19);
      \u0275\u0275listener("click", function CostingTemplateScreenComponent_Template_button_click_25_listener() {
        return ctx.runCost();
      });
      \u0275\u0275text(26, "Cost this sheet");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, CostingTemplateScreenComponent_p_27_Template, 2, 1, "p", 10)(28, CostingTemplateScreenComponent_div_28_Template, 43, 30, "div", 20)(29, CostingTemplateScreenComponent_p_29_Template, 2, 0, "p", 21);
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
      \u0275\u0275property("ngModel", ctx.styleNo());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.qty());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.fx());
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.costError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cost());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.cost() && !ctx.costError());
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    MinValidator,
    NgModel,
    ScreenHeaderComponent,
    LineEditorComponent,
    ExportMenuComponent,
    DecimalPipe,
    TPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostingTemplateScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-costing-template-screen",
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
          <span class="pill" [class.any]="!s.unitCode">
            {{ s.unitCode ? ('Unit' | t) + ': ' + s.unitCode : ('All units' | t) }}
          </span>
        </span>
        <span class="count" *ngIf="selected() as s">
          {{ s.totalItems }} {{ 'lines' | t }} \xB7 {{ s.headOfficeCostPct }}% + {{ s.targetMarginPct }}%
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
            <td>{{ i.itemName }}<span class="star" *ngIf="i.isMandatory" title="Required">\u2605</span></td>
            <td class="ident">{{ i.uom }}</td>
            <td class="right num">{{ i.defaultConsumption | number: '1.4-4' }}</td>
            <td class="right num">{{ i.wastageAllowance | number: '1.1-1' }}%</td>
            <td class="right num" *ngIf="cost()">
              {{ grossFor(i.sequenceNo) | number: '1.4-4' }}
            </td>
            <td class="right num">{{ i.defaultRate | number: '1.2-4' }} {{ i.rateCurrency }}</td>
            <td><span class="pill" [attr.data-state]="i.purchaseType">{{ i.purchaseType }}</span></td>
            <td class="ident">{{ i.defaultSupplierCode ?? '\u2014' }}</td>
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
        saved \u2014 this is what the style costs and what it has to be quoted at.
      </p>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CostingTemplateScreenComponent, { className: "CostingTemplateScreenComponent", filePath: "src/app/features/merchandising/costing-template-screen.component.ts", lineNumber: 174 });
})();
export {
  CostingTemplateScreenComponent
};
//# debugId=2db0f6b5-09fe-591e-8473-0ffd7d8c8ffc
//# sourceMappingURL=chunk-3GWRV33R.js.map
