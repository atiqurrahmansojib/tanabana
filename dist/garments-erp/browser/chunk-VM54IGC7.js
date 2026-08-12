import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DRVFIA4U.js";
import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  AuthService
} from "./chunk-QXGMD44U.js";
import {
  firstVisiblePath
} from "./chunk-DOSEESBN.js";
import "./chunk-SO5TSJGE.js";
import "./chunk-HCPETOFS.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
import "./chunk-XANLCPOO.js";

// src/environments/environment.ts
var environment = {
  production: false
};

// src/app/features/auth/login.component.ts
function LoginComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function LoginComponent_div_34_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function LoginComponent_div_34_button_6_Template_button_click_0_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.signInAs(u_r3));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19)(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.busy())("title", u_r3.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.initials(u_r3.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.role);
  }
}
function LoginComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "t");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 15);
    \u0275\u0275template(6, LoginComponent_div_34_button_6_Template, 10, 6, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "Sign in as \u2014 development only"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.demoUsers());
  }
}
var LoginComponent = class _LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  busy = signal(
    false,
    ...ngDevMode ? [{ debugName: "busy" }] : (
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
  form = inject(FormBuilder).nonNullable.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  /** Empty in production, so the list simply is not there to read. */
  demoUsers = signal(
    [],
    ...ngDevMode ? [{ debugName: "demoUsers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    if (environment.production)
      return;
    this.auth.signInOptions().subscribe((users) => this.demoUsers.set(users));
  }
  /**
   * Fills the form and submits it, rather than logging in behind the form.
   * The password still goes to the server and is still checked — this is a
   * shortcut for typing, not a way around authentication.
   */
  initials(fullName) {
    const parts = fullName.split(" ").filter(Boolean);
    return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
  }
  signInAs(user) {
    this.form.setValue({ username: user.username, password: "demo1234" });
    this.submit();
  }
  submit() {
    if (this.form.invalid)
      return;
    this.busy.set(true);
    this.error.set(null);
    const { username, password } = this.form.getRawValue();
    this.auth.login(username, password).subscribe({
      next: () => {
        const next = this.route.snapshot.queryParamMap.get("next") ?? firstVisiblePath(this.auth.user());
        void this.router.navigateByUrl(next);
      },
      error: (err) => {
        this.busy.set(false);
        const message = err?.error?.message;
        this.error.set(message ?? "That username and password did not match an account.");
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 35, vars: 31, consts: [[1, "login"], [1, "brandside"], [1, "wordmark"], [1, "meaning"], [1, "formside"], [1, "signin-card", 3, "ngSubmit", "formGroup"], [1, "lead"], ["class", "error", 4, "ngIf"], ["formControlName", "username", "autocomplete", "username"], ["type", "password", "formControlName", "password", "autocomplete", "current-password"], ["type", "submit", 1, "btn", "primary", 3, "disabled"], ["class", "demo", 4, "ngIf"], [1, "error"], [1, "demo"], [1, "demorule"], [1, "demogrid"], ["type", "button", "class", "democard", 3, "disabled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "democard", 3, "click", "disabled", "title"], [1, "avatar"], [1, "dcinfo"], [1, "dcname"], [1, "dctitle"], [1, "pill"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "aside", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 3);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "t");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 4)(15, "form", 5);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_15_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(16, "h2");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 6);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, LoginComponent_p_22_Template, 2, 1, "p", 7);
      \u0275\u0275elementStart(23, "label");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 8);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(27, "label");
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 9);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(31, "button", 10);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "t");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(34, LoginComponent_div_34_Template, 7, 4, "div", 11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "Tanabana"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "The ERP that tells you early."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "Multi-unit manufacturing control for ready-made garment exporters."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "Tanabana \u2014 warp and weft, the threads a fabric is woven from."));
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 21, "Sign in"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 23, "Your role decides which modules you can open."));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.error());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 25, "Username"));
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, "Password"));
      \u0275\u0275advance(2);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 29, ctx.busy() ? "Signing in\u2026" : "Sign in"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.demoUsers().length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, TPipe],
      template: `
    <section class="login">
      <aside class="brandside">
        <span class="wordmark">{{ 'Tanabana' | t }}</span>
        <h1>{{ 'The ERP that tells you early.' | t }}</h1>
        <p>{{ 'Multi-unit manufacturing control for ready-made garment exporters.' | t }}</p>
        <p class="meaning">{{ 'Tanabana \u2014 warp and weft, the threads a fabric is woven from.' | t }}</p>
      </aside>

      <div class="formside">
        <form class="signin-card" [formGroup]="form" (ngSubmit)="submit()">
          <h2>{{ 'Sign in' | t }}</h2>
          <p class="lead">{{ 'Your role decides which modules you can open.' | t }}</p>
          <p class="error" *ngIf="error()">{{ error() }}</p>

          <label>{{ 'Username' | t }}</label>
          <input formControlName="username" autocomplete="username" />

          <label>{{ 'Password' | t }}</label>
          <input type="password" formControlName="password" autocomplete="current-password" />

          <button class="btn primary" type="submit" [disabled]="form.invalid || busy()">
            {{ (busy() ? 'Signing in\u2026' : 'Sign in') | t }}
          </button>
        </form>

        <div class="demo" *ngIf="demoUsers().length">
          <div class="demorule">
            <span>{{ 'Sign in as \u2014 development only' | t }}</span>
          </div>
          <div class="demogrid">
            <button type="button" class="democard" *ngFor="let u of demoUsers()"
                    [disabled]="busy()" (click)="signInAs(u)" [title]="u.unit">
              <span class="avatar">{{ initials(u.fullName) }}</span>
              <span class="dcinfo">
                <span class="dcname">{{ u.fullName }}</span>
                <span class="dctitle">{{ u.title }}</span>
              </span>
              <span class="pill">{{ u.role }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login.component.ts", lineNumber: 72 });
})();
export {
  LoginComponent
};
//# debugId=8d4ce301-5651-5020-941b-4b5a0c79b2cc
//# sourceMappingURL=chunk-VM54IGC7.js.map
