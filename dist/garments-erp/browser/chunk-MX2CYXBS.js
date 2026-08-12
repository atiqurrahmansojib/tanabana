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

// src/app/shared/screens/wizard-screen.component.ts
function WizardScreenComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function WizardScreenComponent_button_2_Template_button_click_0_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.step.set(i_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("primary", i_r2 === ctx_r2.step());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", i_r2 + 1, ". ", \u0275\u0275pipeBind1(2, 4, s_r4), " ");
  }
}
function WizardScreenComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5);
  }
}
function WizardScreenComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Committed. Nothing was written until this step."), " ");
  }
}
function WizardScreenComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Your role can read this screen but not commit against it."), " ");
  }
}
function WizardScreenComponent_div_7_label_1_select_4_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275property("value", o_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r8);
  }
}
function WizardScreenComponent_div_7_label_1_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 23);
    \u0275\u0275listener("ngModelChange", function WizardScreenComponent_div_7_label_1_select_4_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set(f_r7.key, $event));
    });
    \u0275\u0275elementStart(1, "option", 24);
    \u0275\u0275text(2, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, WizardScreenComponent_div_7_label_1_select_4_option_3_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.canWrite())("ngModel", ctx_r2.value(f_r7.key));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", f_r7.options);
  }
}
function WizardScreenComponent_div_7_label_1_textarea_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 27);
    \u0275\u0275listener("ngModelChange", function WizardScreenComponent_div_7_label_1_textarea_5_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set(f_r7.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r2.canWrite())("ngModel", ctx_r2.value(f_r7.key));
    \u0275\u0275control();
  }
}
function WizardScreenComponent_div_7_label_1_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("ngModelChange", function WizardScreenComponent_div_7_label_1_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const f_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set(f_r7.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("type", f_r7.type)("disabled", !ctx_r2.canWrite())("ngModel", ctx_r2.value(f_r7.key));
    \u0275\u0275control();
  }
}
function WizardScreenComponent_div_7_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 18)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, WizardScreenComponent_div_7_label_1_select_4_Template, 4, 3, "select", 20)(5, WizardScreenComponent_div_7_label_1_textarea_5_Template, 1, 2, "textarea", 21)(6, WizardScreenComponent_div_7_label_1_input_6_Template, 1, 3, "input", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, f_r7.label));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r7.type === "select");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.type === "textarea");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r7.type !== "select" && f_r7.type !== "textarea");
  }
}
function WizardScreenComponent_div_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Nothing to fill in for this entity yet."), " ");
  }
}
function WizardScreenComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, WizardScreenComponent_div_7_label_1_Template, 7, 6, "label", 17)(2, WizardScreenComponent_div_7_p_2_Template, 3, 3, "p", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.fields());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.fields().length);
  }
}
function WizardScreenComponent_dl_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 18)(2, "dt", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "dd");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, f_r11.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.value(f_r11.key) || "\u2014");
  }
}
function WizardScreenComponent_dl_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "dl", 29);
    \u0275\u0275template(1, WizardScreenComponent_dl_8_ng_container_1_Template, 7, 4, "ng-container", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.fields());
  }
}
var WizardScreenComponent = class _WizardScreenComponent {
  route = inject(ActivatedRoute);
  data = inject(ScreenDataService);
  auth = inject(AuthService);
  meta = toSignal(this.route.data.pipe(map((d) => d["screen"])), { initialValue: void 0 });
  steps = ["Scope", "Inputs", "Simulate", "Review & commit"];
  step = signal(
    0,
    ...ngDevMode ? [{ debugName: "step" }] : (
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
  draft = signal(
    {},
    ...ngDevMode ? [{ debugName: "draft" }] : (
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
  committed = signal(
    false,
    ...ngDevMode ? [{ debugName: "committed" }] : (
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
    this.writeAuthority = resource?.writeAuthority;
  }
  /** Same rule as the list and object archetypes: read is not write. */
  canWrite() {
    return !!this.writeAuthority && this.auth.has(this.writeAuthority);
  }
  value(key) {
    return this.draft()[key] ?? "";
  }
  set(key, value) {
    this.draft.update((d) => __spreadProps(__spreadValues({}, d), { [key]: value }));
  }
  back() {
    this.step.update((s) => Math.max(0, s - 1));
  }
  next() {
    if (this.step() < this.steps.length - 1) {
      this.step.update((s) => s + 1);
      return;
    }
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
        this.committed.set(true);
        this.draft.set({});
        this.step.set(0);
      },
      error: () => {
        this.busy.set(false);
        this.error.set("This could not be committed.");
      }
    });
  }
  static \u0275fac = function WizardScreenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WizardScreenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardScreenComponent, selectors: [["app-wizard-screen"]], decls: 16, vars: 15, consts: [[3, "meta"], [1, "steps"], ["type", "button", "class", "btn", 3, "primary", "click", 4, "ngFor", "ngForOf"], [1, "panel"], ["class", "error", 4, "ngIf"], ["class", "load", 4, "ngIf"], ["class", "hint", 4, "ngIf"], ["class", "fields", 4, "ngIf"], ["class", "fields recordview", 4, "ngIf"], [1, "actions"], ["type", "button", 1, "btn", 3, "click", "disabled"], ["type", "button", 1, "btn", "primary", 3, "click", "disabled"], ["type", "button", 1, "btn", 3, "click"], [1, "error"], [1, "load"], [1, "hint"], [1, "fields"], ["class", "field", 4, "ngFor", "ngForOf"], [1, "field"], [1, "label"], [3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["rows", "2", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "disabled", "ngModel", "ngModelChange", 4, "ngIf"], [3, "ngModelChange", "disabled", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["rows", "2", 3, "ngModelChange", "disabled", "ngModel"], [3, "ngModelChange", "type", "disabled", "ngModel"], [1, "fields", "recordview"], [4, "ngFor", "ngForOf"]], template: function WizardScreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-screen-header", 0);
      \u0275\u0275elementStart(1, "nav", 1);
      \u0275\u0275template(2, WizardScreenComponent_button_2_Template, 3, 6, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 3);
      \u0275\u0275template(4, WizardScreenComponent_p_4_Template, 2, 1, "p", 4)(5, WizardScreenComponent_p_5_Template, 3, 3, "p", 5)(6, WizardScreenComponent_p_6_Template, 3, 3, "p", 6)(7, WizardScreenComponent_div_7_Template, 3, 2, "div", 7)(8, WizardScreenComponent_dl_8_Template, 2, 1, "dl", 8);
      \u0275\u0275elementStart(9, "footer", 9)(10, "button", 10);
      \u0275\u0275listener("click", function WizardScreenComponent_Template_button_click_10_listener() {
        return ctx.back();
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function WizardScreenComponent_Template_button_click_13_listener() {
        return ctx.next();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "t");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("meta", ctx.meta());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.steps);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.committed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() < ctx.steps.length - 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.step() === ctx.steps.length - 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.step() === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u2190 ", \u0275\u0275pipeBind1(12, 11, "Back"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy() || ctx.step() === ctx.steps.length - 1 && !ctx.canWrite());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 13, ctx.step() === ctx.steps.length - 1 ? ctx.busy() ? "Saving\u2026" : "Commit" : "Continue"), " \u2192 ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, ScreenHeaderComponent, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WizardScreenComponent, [{
    type: Component,
    args: [{
      selector: "app-wizard-screen",
      standalone: true,
      imports: [CommonModule, FormsModule, ScreenHeaderComponent, TPipe],
      template: `
    <app-screen-header [meta]="meta()" />

    <nav class="steps">
      <button type="button" *ngFor="let s of steps; let i = index" class="btn"
              [class.primary]="i === step()" (click)="step.set(i)">
        {{ i + 1 }}. {{ s | t }}
      </button>
    </nav>

    <section class="panel">
      <p class="error" *ngIf="error() as e">{{ e }}</p>
      <p class="load" *ngIf="committed()">
        {{ 'Committed. Nothing was written until this step.' | t }}
      </p>
      <p class="hint" *ngIf="!canWrite()">
        {{ 'Your role can read this screen but not commit against it.' | t }}
      </p>

      <div class="fields" *ngIf="step() < steps.length - 1">
        <label class="field" *ngFor="let f of fields()">
          <span class="label">{{ f.label | t }}</span>

          <select *ngIf="f.type === 'select'" [disabled]="!canWrite()"
                  [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)">
            <option value="">\u2014</option>
            <option *ngFor="let o of f.options" [value]="o">{{ o }}</option>
          </select>

          <textarea *ngIf="f.type === 'textarea'" rows="2" [disabled]="!canWrite()"
                    [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)"></textarea>

          <input *ngIf="f.type !== 'select' && f.type !== 'textarea'"
                 [type]="f.type" [disabled]="!canWrite()"
                 [ngModel]="value(f.key)" (ngModelChange)="set(f.key, $event)" />
        </label>
        <p class="hint" *ngIf="!fields().length">
          {{ 'Nothing to fill in for this entity yet.' | t }}
        </p>
      </div>

      <dl class="fields recordview" *ngIf="step() === steps.length - 1">
        <ng-container *ngFor="let f of fields()">
          <div class="field">
            <dt class="label">{{ f.label | t }}</dt>
            <dd>{{ value(f.key) || '\u2014' }}</dd>
          </div>
        </ng-container>
      </dl>

      <footer class="actions">
        <button type="button" class="btn" [disabled]="step() === 0" (click)="back()">
          \u2190 {{ 'Back' | t }}
        </button>
        <button type="button" class="btn primary"
                [disabled]="busy() || (step() === steps.length - 1 && !canWrite())"
                (click)="next()">
          {{ (step() === steps.length - 1 ? (busy() ? 'Saving\u2026' : 'Commit') : 'Continue') | t }} \u2192
        </button>
      </footer>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardScreenComponent, { className: "WizardScreenComponent", filePath: "src/app/shared/screens/wizard-screen.component.ts", lineNumber: 92 });
})();
export {
  WizardScreenComponent
};
//# debugId=b6d02329-d799-524a-a719-516364431500
//# sourceMappingURL=chunk-MX2CYXBS.js.map
