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
import {
  ScreenDataService,
  resourceFor
} from "./chunk-SO5TSJGE.js";
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
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
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

// src/app/shared/screens/form-screen.component.ts
function FormScreenComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r1 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1);
  }
}
function FormScreenComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "Saved as a new record."));
  }
}
function FormScreenComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Your role can read this screen but not submit against it."), " ");
  }
}
function FormScreenComponent_label_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, " *");
    \u0275\u0275elementEnd();
  }
}
function FormScreenComponent_label_6_select_5_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
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
function FormScreenComponent_label_6_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 21);
    \u0275\u0275listener("ngModelChange", function FormScreenComponent_label_6_select_5_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.set(f_r3.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 22);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FormScreenComponent_label_6_select_5_option_3_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r3.canWrite())("ngModel", ctx_r3.value(f_r3.key));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", f_r3.options);
  }
}
function FormScreenComponent_label_6_textarea_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 25);
    \u0275\u0275listener("ngModelChange", function FormScreenComponent_label_6_textarea_6_Template_textarea_ngModelChange_0_listener($event) {
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
    \u0275\u0275property("disabled", !ctx_r3.canWrite())("ngModel", ctx_r3.value(f_r3.key));
    \u0275\u0275control();
  }
}
function FormScreenComponent_label_6_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 26);
    \u0275\u0275listener("ngModelChange", function FormScreenComponent_label_6_input_7_Template_input_ngModelChange_0_listener($event) {
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
    \u0275\u0275property("type", f_r3.type)("disabled", !ctx_r3.canWrite())("ngModel", ctx_r3.value(f_r3.key))("placeholder", f_r3.placeholder ?? "");
    \u0275\u0275control();
  }
}
function FormScreenComponent_label_6_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.hint);
  }
}
function FormScreenComponent_label_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 14)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275template(4, FormScreenComponent_label_6_span_4_Template, 2, 0, "span", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FormScreenComponent_label_6_select_5_Template, 4, 3, "select", 17)(6, FormScreenComponent_label_6_textarea_6_Template, 1, 2, "textarea", 18)(7, FormScreenComponent_label_6_input_7_Template, 1, 4, "input", 19)(8, FormScreenComponent_label_6_small_8_Template, 2, 1, "small", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, f_r3.label));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r3.required);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.type !== "select" && f_r3.type !== "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r3.hint);
  }
}
function FormScreenComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "This entity has no fields registered yet."), " ");
  }
}
function FormScreenComponent_section_15_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275classProp("right", c_r8.align === "r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, c_r8.label));
  }
}
function FormScreenComponent_section_15_tr_10_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("right", c_r9.align === "r");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10[c_r9.key] ?? "\u2014");
  }
}
function FormScreenComponent_section_15_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, FormScreenComponent_section_15_tr_10_td_1_Template, 2, 3, "td", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.columns());
  }
}
function FormScreenComponent_section_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "t");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 29)(6, "thead")(7, "tr");
    \u0275\u0275template(8, FormScreenComponent_section_15_th_8_Template, 3, 5, "th", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "tbody");
    \u0275\u0275template(10, FormScreenComponent_section_15_tr_10_Template, 2, 1, "tr", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "Recent entries"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r3.columns());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.rows());
  }
}
var FormScreenComponent = class _FormScreenComponent {
  route = inject(ActivatedRoute);
  data = inject(ScreenDataService);
  auth = inject(AuthService);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  draft = signal(
    {},
    ...ngDevMode ? [{ debugName: "draft" }] : (
      /* istanbul ignore next */
      []
    )
  );
  fields = signal(
    [],
    ...ngDevMode ? [{ debugName: "fields" }] : (
      /* istanbul ignore next */
      []
    )
  );
  columns = signal(
    [],
    ...ngDevMode ? [{ debugName: "columns" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
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
  justSaved = signal(
    false,
    ...ngDevMode ? [{ debugName: "justSaved" }] : (
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
  writeAuthority;
  ngOnInit() {
    const meta = this.meta();
    if (!meta)
      return;
    const resource = resourceFor(meta.entity);
    this.fields.set(resource?.fields ?? []);
    this.columns.set((resource?.columns ?? []).slice(0, 6));
    this.writeAuthority = resource?.writeAuthority;
    this.load();
  }
  /** Same rule as the list and object archetypes: read is not write. */
  canWrite() {
    return !!this.writeAuthority && this.auth.has(this.writeAuthority);
  }
  load() {
    const meta = this.meta();
    if (!meta)
      return;
    this.data.list(meta.entity, { page: 0, size: 8 }).subscribe((page) => this.rows.set(page.content));
  }
  value(key) {
    return this.draft()[key] ?? "";
  }
  set(key, value) {
    this.draft.update((d) => __spreadProps(__spreadValues({}, d), { [key]: value }));
    this.justSaved.set(false);
  }
  discard() {
    this.draft.set({});
    this.justSaved.set(false);
    this.error.set(null);
  }
  submit() {
    const meta = this.meta();
    if (!meta || !this.canWrite())
      return;
    this.busy.set(true);
    this.error.set(null);
    const body = {};
    for (const f of this.fields()) {
      const raw = this.draft()[f.key];
      if (raw === "" || raw === null || raw === void 0)
        continue;
      body[f.key] = f.type === "number" ? Number(raw) : raw;
    }
    this.data.create(meta.entity, body).subscribe({
      next: () => {
        this.busy.set(false);
        this.justSaved.set(true);
        this.draft.set({});
        this.load();
      },
      error: () => {
        this.busy.set(false);
        this.error.set("This could not be saved.");
      }
    });
  }
  static \u0275fac = function FormScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormScreenComponent, selectors: [["app-form-screen"]], decls: 16, vars: 15, consts: [[3, "meta"], [1, "panel"], ["class", "error", 4, "ngIf"], ["class", "load", 4, "ngIf"], ["class", "hint", 4, "ngIf"], [1, "fields"], ["class", "field", 4, "ngFor", "ngForOf"], [1, "actions"], ["type", "button", 1, "btn", 3, "click", "disabled"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["class", "panel", 4, "ngIf"], [1, "error"], [1, "load"], [1, "hint"], [1, "field"], [1, "label"], ["class", "req", "aria-hidden", "true", 4, "ngIf"], [3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["rows", "2", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "disabled", "ngModel", "placeholder", "ngModelChange", 4, "ngIf"], ["aria-hidden", "true", 1, "req"], [3, "ngModelChange", "disabled", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["rows", "2", 3, "ngModelChange", "disabled", "ngModel"], [3, "ngModelChange", "type", "disabled", "ngModel", "placeholder"], [1, "toolbar"], [1, "count"], [1, "grid"], [3, "right", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"]], template: function FormScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "section", 1);
      \u0275\u0275template(2, FormScreenComponent_p_2_Template, 2, 1, "p", 2)(3, FormScreenComponent_p_3_Template, 3, 3, "p", 3)(4, FormScreenComponent_p_4_Template, 3, 3, "p", 4);
      \u0275\u0275elementStart(5, "div", 5);
      \u0275\u0275template(6, FormScreenComponent_label_6_Template, 9, 8, "label", 6)(7, FormScreenComponent_p_7_Template, 3, 3, "p", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "footer", 7)(9, "button", 8);
      \u0275\u0275listener("click", function FormScreenComponent_Template_button_click_9_listener() {
        return ctx.discard();
      });
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function FormScreenComponent_Template_button_click_12_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "t");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, FormScreenComponent_section_15_Template, 11, 5, "section", 10);
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.justSaved());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.canWrite());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.fields());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.fields().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "Discard"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || !ctx.fields().length || !ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 13, ctx.busy() ? "Saving\u2026" : "Submit for approval"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.rows().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ScreenHeaderComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-form-screen",
      standalone: true,
      imports: [CommonModule, FormsModule, ScreenHeaderComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <section class="panel">
      <p class="error" *ngIf="error() as e">{{ e }}</p>
      <p class="load" *ngIf="justSaved()">{{ 'Saved as a new record.' | t }}</p>
      <p class="hint" *ngIf="!canWrite()">
        {{ 'Your role can read this screen but not submit against it.' | t }}
      </p>

      <div class="fields">
        <label class="field" *ngFor="let f of fields()">
          <span class="label">
            {{ f.label | t }}<span class="req" *ngIf="f.required" aria-hidden="true"> *</span>
          </span>

          <select *ngIf="f.type === 'select'" [disabled]="!canWrite()"
                  [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)">
            <option value="">\u2014</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <textarea *ngIf="f.type === 'textarea'" rows="2" [disabled]="!canWrite()"
                    [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"></textarea>

          <input *ngIf="f.type !== 'select' && f.type !== 'textarea'"
                 [type]="f.type" [disabled]="!canWrite()"
                 [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"
                 [placeholder]="f.placeholder ?? ''" />

          <small class="hint" *ngIf="f.hint">{{ f.hint }}</small>
        </label>
        <p class="hint" *ngIf="!fields().length">
          {{ 'This entity has no fields registered yet.' | t }}
        </p>
      </div>

      <footer class="actions">
        <button type="button" class="btn" [disabled]="busy()" (click)="discard()">
          {{ 'Discard' | t }}
        </button>
        <button type="button" class="btn primary"
                [disabled]="busy() || !fields().length || !canWrite()"
                (click)="submit()">
          {{ (busy() ? 'Saving\u2026' : 'Submit for approval') | t }}
        </button>
      </footer>
    </section>

    <section class="panel" *ngIf="rows().length">
      <div class="toolbar"><span class="count">{{ 'Recent entries' | t }}</span></div>
      <table class="grid">
        <thead>
          <tr><th *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ c.label | t }}</th></tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows()">
            <td *ngFor="let c of columns()" [class.right]="c.align === 'r'">{{ row[c.key] ?? '\u2014' }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormScreenComponent, { className: "FormScreenComponent", filePath: "src/app/shared/screens/form-screen.component.ts", lineNumber: 88 });
})();
export {
  FormScreenComponent
};
//# debugId=950eac66-8717-5bd1-9f85-563c9ddce3b1
//# sourceMappingURL=chunk-ZVMG3UK3.js.map
