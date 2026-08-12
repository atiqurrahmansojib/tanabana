import {
  TPipe
} from "./chunk-Y7RVDZ6T.js";
import {
  CommonModule,
  Component,
  DestroyRef,
  Input,
  NgIf,
  RuntimeError,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-S4ERSNJR.js";
import {
  __spreadValues
} from "./chunk-XANLCPOO.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

// src/app/shared/screens/screen-header.component.ts
function ScreenHeaderComponent_header_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
}
function ScreenHeaderComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "t");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ScreenHeaderComponent_header_0_span_9_Template, 2, 0, "span", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.meta.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx_r0.meta.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.meta.module, " \xB7 ", \u0275\u0275pipeBind1(8, 7, ctx_r0.meta.section));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.meta.flagship);
  }
}
var ScreenHeaderComponent = class _ScreenHeaderComponent {
  meta;
  static \u0275fac = function ScreenHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScreenHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScreenHeaderComponent, selectors: [["app-screen-header"]], inputs: { meta: "meta" }, decls: 1, vars: 1, consts: [["class", "screen-head", 4, "ngIf"], [1, "screen-head"], [1, "code"], [1, "section"], ["class", "star", 4, "ngIf"], [1, "star"]], template: function ScreenHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScreenHeaderComponent_header_0_Template, 10, 9, "header", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.meta);
    }
  }, dependencies: [CommonModule, NgIf, TPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScreenHeaderComponent, [{
    type: Component,
    args: [{
      selector: "app-screen-header",
      standalone: true,
      imports: [CommonModule, TPipe],
      template: `
    <header class="screen-head" *ngIf="meta">
      <span class="code">{{ meta.code }}</span>
      <h1>{{ meta.title | t }}</h1>
      <span class="section">{{ meta.module }} \xB7 {{ meta.section | t }}</span>
      <span class="star" *ngIf="meta.flagship">\u2605</span>
    </header>
  `
    }]
  }], null, { meta: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScreenHeaderComponent, { className: "ScreenHeaderComponent", filePath: "src/app/shared/screens/screen-header.component.ts", lineNumber: 19 });
})();

export {
  toSignal,
  ScreenHeaderComponent
};
//# debugId=dc898fb7-56ef-5975-aaee-75391244891a
//# sourceMappingURL=chunk-NW5637YH.js.map
