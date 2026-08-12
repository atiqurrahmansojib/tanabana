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
  I18nService,
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  ScreenDataService
} from "./chunk-SO5TSJGE.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S4ERSNJR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XANLCPOO.js";

// src/app/shared/screens/record-form.component.ts
function RecordFormComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1);
  }
}
function RecordFormComponent_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, " *");
    \u0275\u0275elementEnd();
  }
}
function RecordFormComponent_label_9_select_5_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275property("value", o_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r5);
  }
}
function RecordFormComponent_label_9_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 20);
    \u0275\u0275listener("ngModelChange", function RecordFormComponent_label_9_select_5_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.set(f_r3.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RecordFormComponent_label_9_select_5_option_3_Template, 2, 2, "option", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r3.value(f_r3.key))("disabled", ctx_r3.isLocked(f_r3));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", f_r3.options);
  }
}
function RecordFormComponent_label_9_textarea_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 24);
    \u0275\u0275listener("ngModelChange", function RecordFormComponent_label_9_textarea_6_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.set(f_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r3.value(f_r3.key))("placeholder", f_r3.placeholder ?? "");
    \u0275\u0275control();
  }
}
function RecordFormComponent_label_9_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 25);
    \u0275\u0275listener("ngModelChange", function RecordFormComponent_label_9_input_7_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.set(f_r3.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("type", f_r3.type)("ngModel", ctx_r3.value(f_r3.key))("placeholder", f_r3.placeholder ?? "")("readonly", ctx_r3.isLocked(f_r3));
    \u0275\u0275control();
  }
}
function RecordFormComponent_label_9_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Fixed once the record exists \u2014 other records refer to it by this code."), " ");
  }
}
function RecordFormComponent_label_9_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.hint);
  }
}
function RecordFormComponent_label_9_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fe_r8 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fe_r8);
  }
}
function RecordFormComponent_label_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275template(4, RecordFormComponent_label_9_span_4_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RecordFormComponent_label_9_select_5_Template, 4, 3, "select", 14)(6, RecordFormComponent_label_9_textarea_6_Template, 1, 2, "textarea", 15)(7, RecordFormComponent_label_9_input_7_Template, 1, 4, "input", 16)(8, RecordFormComponent_label_9_small_8_Template, 3, 3, "small", 17)(9, RecordFormComponent_label_9_small_9_Template, 2, 1, "small", 17)(10, RecordFormComponent_label_9_small_10_Template, 2, 1, "small", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 8, f_r3.label));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r3.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type !== "select" && f_r3.type !== "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isLocked(f_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLocked(f_r3) && f_r3.hint);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.fieldErrors()[f_r3.key]);
  }
}
var RecordFormComponent = class _RecordFormComponent {
  entity;
  meta;
  /** Null when adding. */
  record = null;
  saved = new EventEmitter();
  cancelled = new EventEmitter();
  data = inject(ScreenDataService);
  i18n = inject(I18nService);
  draft = signal(
    {},
    ...ngDevMode ? [{ debugName: "draft" }] : (
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
  fieldErrors = signal(
    {},
    ...ngDevMode ? [{ debugName: "fieldErrors" }] : (
      /* istanbul ignore next */
      []
    )
  );
  busy = signal(
    false,
    ...ngDevMode ? [{ debugName: "busy" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    const start = {};
    for (const f of this.meta.fields ?? []) {
      start[f.key] = this.record?.[f.key] ?? "";
    }
    this.draft.set(start);
  }
  title() {
    const noun = this.i18n.t(this.meta.noun ?? "record");
    return this.record ? `${this.i18n.t("Edit")} ${noun}` : `+ ${noun}`;
  }
  /** A field with a condition is asked for only when the condition holds. */
  visibleFields() {
    return (this.meta.fields ?? []).filter((f) => !f.showWhen || f.showWhen.equals.includes(String(this.draft()[f.showWhen.field] ?? "")));
  }
  isLocked(field) {
    return !!field.immutable && !!this.record;
  }
  value(key) {
    return this.draft()[key] ?? "";
  }
  set(key, value) {
    this.draft.update((d) => __spreadProps(__spreadValues({}, d), { [key]: value }));
  }
  save() {
    this.busy.set(true);
    this.error.set(null);
    this.fieldErrors.set({});
    const body = {};
    for (const f of this.visibleFields()) {
      const raw = this.draft()[f.key];
      if (raw === "" || raw === null || raw === void 0) {
        continue;
      }
      body[f.key] = f.type === "number" ? Number(raw) : raw;
    }
    for (const f of this.meta.fields ?? []) {
      if (f.showWhen && !this.visibleFields().includes(f) && this.record?.[f.key] != null) {
        body[f.key] = null;
      }
    }
    const done = {
      next: () => {
        this.busy.set(false);
        this.saved.emit();
      },
      error: (err) => {
        this.busy.set(false);
        this.fieldErrors.set(err?.error?.fieldErrors ?? {});
        this.error.set(err?.error?.message ?? "This could not be saved. Check the fields marked below.");
      }
    };
    if (this.record) {
      body["version"] = this.record["version"];
      this.data.update(this.entity, this.record["id"], body).subscribe(done);
    } else {
      this.data.create(this.entity, body).subscribe(done);
    }
  }
  static \u0275fac = function RecordFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordFormComponent, selectors: [["app-record-form"]], inputs: { entity: "entity", meta: "meta", record: "record" }, outputs: { saved: "saved", cancelled: "cancelled" }, decls: 18, vars: 14, consts: [[1, "sheet-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "sheet"], [1, "sheet-head"], ["type", "button", "aria-label", "Close", 1, "btn", 3, "click"], ["class", "error", 4, "ngIf"], [1, "fields"], ["class", "field", 4, "ngFor", "ngForOf"], [1, "actions"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["type", "button", 1, "btn", 3, "click", "disabled"], [1, "error"], [1, "field"], [1, "label"], ["class", "req", "aria-hidden", "true", 4, "ngIf"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["rows", "2", 3, "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], [3, "type", "ngModel", "placeholder", "readonly", "ngModelChange", 4, "ngIf"], ["class", "hint", 4, "ngIf"], ["class", "fielderr", 4, "ngIf"], ["aria-hidden", "true", 1, "req"], [3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "type", "ngModel", "placeholder", "readonly"], [1, "hint"], [1, "fielderr"]], template: function RecordFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function RecordFormComponent_Template_div_click_0_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "section", 1)(2, "header", 2)(3, "h2");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 3);
      \u0275\u0275listener("click", function RecordFormComponent_Template_button_click_5_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275text(6, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, RecordFormComponent_p_7_Template, 2, 1, "p", 4);
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275template(9, RecordFormComponent_label_9_Template, 11, 10, "label", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "footer", 7)(11, "button", 8);
      \u0275\u0275listener("click", function RecordFormComponent_Template_button_click_11_listener() {
        return ctx.save();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "t");
      \u0275\u0275pipe(14, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function RecordFormComponent_Template_button_click_15_listener() {
        return ctx.cancelled.emit();
      });
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "t");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.title());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.title());
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.visibleFields());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? \u0275\u0275pipeBind1(13, 8, "Saving\u2026") : ctx.record ? \u0275\u0275pipeBind1(14, 10, "Save changes") : "+ " + ctx.i18n.t(ctx.meta.noun ?? "record"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 12, "Cancel"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecordFormComponent, [{
    type: Component,
    args: [{
      selector: "app-record-form",
      standalone: true,
      imports: [CommonModule, FormsModule, TPipe],
      template: `
    <div class="sheet-backdrop" (click)="cancelled.emit()"></div>

    <section class="sheet" role="dialog" aria-modal="true" [attr.aria-label]="title()">
      <header class="sheet-head">
        <h2>{{ title() }}</h2>
        <button type="button" class="btn" (click)="cancelled.emit()" aria-label="Close">\u2715</button>
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
            <option value="">\u2014</option>
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
            {{ 'Fixed once the record exists \u2014 other records refer to it by this code.' | t }}
          </small>
          <small class="hint" *ngIf="!isLocked(f) && f.hint">{{ f.hint }}</small>
          <small class="fielderr" *ngIf="fieldErrors()[f.key] as fe">{{ fe }}</small>
        </label>
      </div>

      <footer class="actions">
        <button type="button" class="btn primary" [disabled]="busy()" (click)="save()">
          {{ busy() ? ('Saving\u2026' | t)
             : (record ? ('Save changes' | t) : ('+ ' + i18n.t(meta.noun ?? 'record'))) }}
        </button>
        <button type="button" class="btn" [disabled]="busy()" (click)="cancelled.emit()">
          {{ 'Cancel' | t }}
        </button>
      </footer>
    </section>
  `
    }]
  }], null, { entity: [{
    type: Input,
    args: [{ required: true }]
  }], meta: [{
    type: Input,
    args: [{ required: true }]
  }], record: [{
    type: Input
  }], saved: [{
    type: Output
  }], cancelled: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordFormComponent, { className: "RecordFormComponent", filePath: "src/app/shared/screens/record-form.component.ts", lineNumber: 85 });
})();

export {
  RecordFormComponent
};
//# debugId=8b83a32b-2fcc-5061-b311-0ab352c2089f
//# sourceMappingURL=chunk-T5JPKE6X.js.map
