import {
  CommonModule,
  Component,
  Input,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-S4ERSNJR.js";

// src/app/shared/screens/kpi-band.component.ts
function KpiBandComponent_div_0_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(k_r1.note);
  }
}
function KpiBandComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, KpiBandComponent_div_0_div_1_span_5_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = ctx.$implicit;
    \u0275\u0275classProp("lead", k_r1.lead);
    \u0275\u0275attribute("data-tone", k_r1.tone ?? null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r1.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", k_r1.note);
  }
}
function KpiBandComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, KpiBandComponent_div_0_div_1_Template, 6, 6, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.kpis);
  }
}
var KpiBandComponent = class _KpiBandComponent {
  kpis = [];
  static \u0275fac = function KpiBandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KpiBandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KpiBandComponent, selectors: [["app-kpi-band"]], inputs: { kpis: "kpis" }, decls: 1, vars: 1, consts: [["class", "kpis band", 4, "ngIf"], [1, "kpis", "band"], ["class", "kpi", 3, "lead", 4, "ngFor", "ngForOf"], [1, "kpi"], [1, "label"], [1, "value"], ["class", "note", 4, "ngIf"], [1, "note"]], template: function KpiBandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, KpiBandComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.kpis.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KpiBandComponent, [{
    type: Component,
    args: [{
      selector: "app-kpi-band",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="kpis band" *ngIf="kpis.length">
      <div class="kpi" *ngFor="let k of kpis" [class.lead]="k.lead"
           [attr.data-tone]="k.tone ?? null">
        <span class="label">{{ k.label }}</span>
        <span class="value">{{ k.value }}</span>
        <span class="note" *ngIf="k.note">{{ k.note }}</span>
      </div>
    </div>
  `
    }]
  }], null, { kpis: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KpiBandComponent, { className: "KpiBandComponent", filePath: "src/app/shared/screens/kpi-band.component.ts", lineNumber: 40 });
})();

export {
  KpiBandComponent
};
//# debugId=8213319d-ccf9-5d59-a0f8-17993fb18072
//# sourceMappingURL=chunk-2UE75WRO.js.map
