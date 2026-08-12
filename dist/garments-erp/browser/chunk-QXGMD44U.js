import {
  authoritiesFor
} from "./chunk-DOSEESBN.js";
import {
  ScreenDataService
} from "./chunk-SO5TSJGE.js";
import {
  Injectable,
  Router,
  computed,
  inject,
  map,
  setClassMetadata,
  signal,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-S4ERSNJR.js";

// src/app/core/auth/auth.service.ts
var AuthService = class _AuthService {
  userSignal = signal(
    this.restore(),
    ...ngDevMode ? [{ debugName: "userSignal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  data = inject(ScreenDataService);
  user = this.userSignal.asReadonly();
  isAuthenticated = computed(
    () => this.userSignal() !== null,
    ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  role = computed(
    () => this.userSignal()?.role ?? null,
    ...ngDevMode ? [{ debugName: "role" }] : (
      /* istanbul ignore next */
      []
    )
  );
  router = inject(Router);
  login(username, password) {
    if (!password.trim()) {
      return throwError(() => ({
        error: { message: "That username and password did not match an account." }
      }));
    }
    return this.data.list("AppUser", { size: 1e3 }).pipe(map((page) => {
      const account = page.content.find((u) => u.username.toLowerCase() === username.trim().toLowerCase());
      if (!account) {
        throw { error: { message: "That username and password did not match an account." } };
      }
      if (account.status !== "ACTIVE") {
        throw { error: { message: "This account has been deactivated. An administrator can reactivate it from Users." } };
      }
      const user = {
        username: account.username,
        fullName: account.fullName,
        role: account.role,
        unitScope: account.unit === "ALL" ? ["ALL"] : [account.unit],
        authorities: authoritiesFor(account.role)
      };
      localStorage.setItem("token", "mock-session");
      localStorage.setItem("user", JSON.stringify(user));
      this.userSignal.set(user);
      return user;
    }));
  }
  /**
   * Active accounts, for the login screen's "sign in as" picker. Reads the
   * same directory `login()` checks, so a deactivated or removed persona
   * simply is not offered — the picker cannot drift from what can actually
   * sign in.
   */
  signInOptions() {
    return this.data.list("AppUser", { size: 1e3 }).pipe(map((page) => page.content.filter((u) => u.status === "ACTIVE")));
  }
  /**
   * Ends the session and leaves.
   *
   * The navigation belongs here, not at each call site: clearing the token
   * without moving leaves the user staring at a shell whose every request now
   * 401s, which reads as the application having frozen. `replaceUrl` keeps
   * Back from returning to a screen that no longer has a session behind it.
   */
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.userSignal.set(null);
    void this.router.navigateByUrl("/login", { replaceUrl: true });
  }
  get token() {
    return localStorage.getItem("token");
  }
  /**
   * Does this session hold an authority?
   *
   * Grants are per module *and section* — `M1_MASTER_WRITE`, not `M1_WRITE` —
   * so callers ask for the authority they actually need rather than passing a
   * module and guessing at the rest.
   */
  has(authority) {
    return this.userSignal()?.authorities.includes(authority) ?? false;
  }
  /** Write access to a whole module. Owners hold this; readers do not. */
  canWrite(module) {
    return this.has(`${module}_WRITE`);
  }
  restore() {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  AuthService
};
//# debugId=df4e8cc4-3295-50de-923c-44b3b74b18a1
//# sourceMappingURL=chunk-QXGMD44U.js.map
