import {
  Component,
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-S4ERSNJR.js";
import "./chunk-XANLCPOO.js";

// src/app/shell/denied.component.ts
var DeniedComponent = class _DeniedComponent {
  static \u0275fac = function DeniedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeniedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeniedComponent, selectors: [["app-denied"]], decls: 7, vars: 0, consts: [[1, "deny"], ["routerLink", "/", 1, "btn"]], template: function DeniedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "You do not have access to this screen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, " This screen belongs to a module your role cannot open. Ask an administrator to grant access, or sign in as another user. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "a", 1);
      \u0275\u0275text(6, "Back to my workspace");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeniedComponent, [{
    type: Component,
    args: [{
      selector: "app-denied",
      standalone: true,
      imports: [RouterLink],
      template: `
    <section class="deny">
      <h1>You do not have access to this screen</h1>
      <p>
        This screen belongs to a module your role cannot open. Ask an
        administrator to grant access, or sign in as another user.
      </p>
      <a class="btn" routerLink="/">Back to my workspace</a>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeniedComponent, { className: "DeniedComponent", filePath: "src/app/shell/denied.component.ts", lineNumber: 19 });
})();
export {
  DeniedComponent
};
//# debugId=8c7e5529-b937-5225-938d-7f5515c21cae
//# sourceMappingURL=chunk-4LMI73PC.js.map
