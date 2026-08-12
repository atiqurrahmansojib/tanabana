import {
  I18nService,
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  AuthService
} from "./chunk-QXGMD44U.js";
import {
  NAV,
  railRank,
  sectionCode
} from "./chunk-DOSEESBN.js";
import "./chunk-SO5TSJGE.js";
import "./chunk-HCPETOFS.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
import "./chunk-XANLCPOO.js";

// src/app/shell/shell.component.ts
function ShellComponent_div_17_ng_container_8_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sec_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, sec_r4.name));
  }
}
function ShellComponent_div_17_ng_container_8_ng_container_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_div_17_ng_container_8_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "t");
    \u0275\u0275template(3, ShellComponent_div_17_ng_container_8_ng_container_1_a_2_span_3_Template, 2, 0, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", ctx_r2.screenPath(s_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, s_r5.title), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r5.flagship);
  }
}
function ShellComponent_div_17_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ShellComponent_div_17_ng_container_8_ng_container_1_div_1_Template, 3, 3, "div", 16)(2, ShellComponent_div_17_ng_container_8_ng_container_1_a_2_Template, 4, 5, "a", 17);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const sec_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", sec_r4.name !== "General");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", sec_r4.screens);
  }
}
function ShellComponent_div_17_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ShellComponent_div_17_ng_container_8_ng_container_1_Template, 3, 2, "ng-container", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.visibleSections(m_r2));
  }
}
function ShellComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function ShellComponent_div_17_Template_button_click_1_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(m_r2.module));
    });
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "t");
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ShellComponent_div_17_ng_container_8_Template, 2, 1, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.isOpen(m_r2.module) ? "\u25BE" : "\u25B8");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 4, m_r2.label), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.count(m_r2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isOpen(m_r2.module));
  }
}
var ShellComponent = class _ShellComponent {
  auth = inject(AuthService);
  i18n = inject(I18nService);
  /**
   * Ownership is not exclusivity: a role reads more modules than it writes.
   *
   * Driven by granted authorities, not `NAV[].roles` directly — `NAV.roles`
   * is the coarse, module-only statement of who may *ever* open a module;
   * `authoritiesFor()` is what actually decides, and can deny a module
   * outright even for a role `NAV.roles` still lists (Supply Chain is
   * listed under Finance for the same historical reason `Prototype/index.html`
   * models access per module — the section table is the current decision).
   *
   * Ordered by `railRank()`, not raw `NAV` position: `NAV` lists Reports
   * before Administration because that is M12 before M13, but for the one
   * role that opens both (ADMIN), Administration reads as the primary
   * workspace and belongs first.
   */
  visibleModules = computed(
    () => {
      const granted = this.auth.user()?.authorities ?? [];
      return NAV.filter((m) => granted.includes(`${m.module}_READ`)).sort((a, b) => railRank(a.module) - railRank(b.module));
    },
    ...ngDevMode ? [{ debugName: "visibleModules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Every module the role can open starts expanded — nobody should have to
   * click each one just to see what's there. Computed once at construction,
   * the same moment `visibleModules` first has an answer (auth is already
   * set by the time the shell mounts, behind `authGuard`). Held as a set
   * rather than one selected module, so more than one stays open at once;
   * `toggle()` still lets a user collapse one back if the rail gets long.
   */
  open = signal(
    new Set(this.visibleModules().map((m) => m.module)),
    ...ngDevMode ? [{ debugName: "open" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** "ALL", "U4", or "U4 +2" when the list is too long for the bar. */
  unitScopeLabel() {
    const units = this.auth.user()?.unitScope ?? [];
    if (!units.length)
      return "";
    return units.length <= 2 ? units.join(" ") : `${units[0]} +${units.length - 1}`;
  }
  isOpen(module) {
    return this.open().has(module);
  }
  toggle(module) {
    this.open.update((current) => {
      const next = new Set(current);
      if (next.has(module))
        next.delete(module);
      else
        next.add(module);
      return next;
    });
  }
  /**
   * Sections of a module this role may read.
   *
   * A module is not one thing. Merchandising holds the T&A board a General
   * Manager runs the floor from and the costing sheets that carry the quoted
   * price — so the grant is per section, and the rail must not offer a screen
   * the API would refuse. The backend still decides; this only saves a
   * wasted navigation.
   *
   * A direct membership check, not an inferred "has this been narrowed at
   * all" guess: `authoritiesFor()` always issues an explicit `_READ` for
   * every section this role may actually open, for every module it visits —
   * an owner's full access and a narrowed role's partial access look the
   * same here, a list of what is actually granted.
   */
  visibleSections(m) {
    const granted = this.auth.user()?.authorities ?? [];
    return m.sections.filter((sec) => granted.includes(`${m.module}_${sectionCode(sec.name)}_READ`));
  }
  count(m) {
    return this.visibleSections(m).reduce((n, s) => n + s.screens.length, 0);
  }
  /**
   * The object archetype is a single record with no register to list it —
   * its only real route is `path/:id`. Linking the rail at the bare path
   * 404s and falls through to the wildcard route, which lands back on
   * Merchandising no matter what was clicked. Opening record `1` is the
   * closest a menu link can get to "open this screen" for a detail view.
   */
  screenPath(s) {
    return s.archetype === "object" ? `${s.path}/1` : s.path;
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 20, vars: 17, consts: [[1, "shell"], [1, "bar"], [1, "brand"], [1, "role"], [1, "unit"], [1, "btn", "lang", 3, "click"], [1, "btn", 3, "click"], [1, "rail"], ["class", "grp", 4, "ngFor", "ngForOf"], [1, "main"], [1, "grp"], [1, "glbl", 3, "click"], [1, "tw"], [1, "gn"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "slbl", 4, "ngIf"], ["class", "nav", "routerLinkActive", "on", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "slbl"], ["routerLinkActive", "on", 1, "nav", 3, "routerLink"], ["class", "star", 4, "ngIf"], [1, "star"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 4);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "t");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275pipe(11, "t");
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_10_listener() {
        return ctx.i18n.toggle();
      });
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_13_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "t");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "nav", 7);
      \u0275\u0275template(17, ShellComponent_div_17_Template, 9, 6, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "main", 9);
      \u0275\u0275element(19, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 9, "Tanabana"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.auth.user()?.fullName, " \xB7 ", ctx.auth.user()?.role);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(9, 11, "Unit scope"), " ", ctx.unitScopeLabel());
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 13, "Language"));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.i18n.isBangla() ? "EN" : "\u09AC\u09BE\u0982\u09B2\u09BE", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "Sign out"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.visibleModules());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterOutlet, RouterLink, RouterLinkActive, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{
      selector: "app-shell",
      standalone: true,
      imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, TPipe],
      template: `
    <div class="shell">
      <header class="bar">
        <span class="brand">{{ 'Tanabana' | t }}</span>
        <span class="role">{{ auth.user()?.fullName }} \xB7 {{ auth.user()?.role }}</span>
        <span class="unit">{{ 'Unit scope' | t }} {{ unitScopeLabel() }}</span>
        <button class="btn lang" (click)="i18n.toggle()" [attr.aria-label]="'Language' | t">
          {{ i18n.isBangla() ? 'EN' : '\u09AC\u09BE\u0982\u09B2\u09BE' }}
        </button>
        <button class="btn" (click)="auth.logout()">{{ 'Sign out' | t }}</button>
      </header>

      <nav class="rail">
        <div class="grp" *ngFor="let m of visibleModules()">
          <button class="glbl" (click)="toggle(m.module)">
            <span class="tw">{{ isOpen(m.module) ? '\u25BE' : '\u25B8' }}</span>
            {{ m.label | t }}
            <span class="gn">{{ count(m) }}</span>
          </button>

          <ng-container *ngIf="isOpen(m.module)">
            <ng-container *ngFor="let sec of visibleSections(m)">
              <div class="slbl" *ngIf="sec.name !== 'General'">{{ sec.name | t }}</div>
              <a class="nav" *ngFor="let s of sec.screens"
                 [routerLink]="screenPath(s)" routerLinkActive="on">
                {{ s.title | t }}
                <span class="star" *ngIf="s.flagship">\u2605</span>
              </a>
            </ng-container>
          </ng-container>
        </div>
      </nav>

      <main class="main"><router-outlet /></main>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/shell/shell.component.ts", lineNumber: 60 });
})();
export {
  ShellComponent
};
//# debugId=50a2c874-97b5-5c2a-b66f-9892734c4b8c
//# sourceMappingURL=chunk-QZUVXDVA.js.map
