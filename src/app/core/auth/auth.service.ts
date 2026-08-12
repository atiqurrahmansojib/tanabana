import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of, throwError } from 'rxjs';
import { CurrentUser, Role } from '../models/role.model';
import { ScreenDataService } from '../services/screen-data.service';
import { authoritiesFor } from './authorities';

/** A row from the M13.3 Users register — the real, editable account directory. */
export interface AppUserRow {
  id: number;
  username: string;
  fullName: string;
  title: string;
  role: Role;
  unit: string;
  status: string;
}

/**
 * Holds the session. The role decides which modules exist in the navigation at
 * all, and the unit scope decides which rows are shown.
 *
 * There is no backend behind this, but there is a real account directory:
 * `login` reads the M13.3 Users register (`ScreenDataService` for entity
 * `AppUser`), seeded from the fifteen original personas. From there it is
 * mutable like any other mock entity — an admin adding a row through M13.3
 * creates a sign-in-capable account, removing one or setting its status to
 * INACTIVE blocks that account immediately. Any non-empty password is
 * accepted, the same rule `Prototype/index.html` uses ("any password is
 * accepted. The MFA prompt is cosmetic") — this is a walkthrough app, not an
 * authentication system; what it does enforce is *which accounts exist*.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userSignal = signal<CurrentUser | null>(this.restore());
  private readonly data = inject(ScreenDataService);

  readonly user = this.userSignal.asReadonly();
  readonly isAuthenticated = computed(() => this.userSignal() !== null);
  readonly role = computed<Role | null>(() => this.userSignal()?.role ?? null);

  private readonly router = inject(Router);

  login(username: string, password: string): Observable<CurrentUser> {
    if (!password.trim()) {
      return throwError(() => ({
        error: { message: 'That username and password did not match an account.' } }));
    }

    return this.data.list<AppUserRow>('AppUser', { size: 1000 }).pipe(map(page => {
      const account = page.content.find(
        u => u.username.toLowerCase() === username.trim().toLowerCase());
      if (!account) {
        throw { error: { message: 'That username and password did not match an account.' } };
      }
      if (account.status !== 'ACTIVE') {
        throw { error: { message: 'This account has been deactivated. '
          + 'An administrator can reactivate it from Users.' } };
      }

      const user: CurrentUser = {
        username: account.username,
        fullName: account.fullName,
        role: account.role,
        unitScope: account.unit === 'ALL' ? ['ALL'] : [account.unit],
        authorities: authoritiesFor(account.role),
      };
      localStorage.setItem('token', 'mock-session');
      localStorage.setItem('user', JSON.stringify(user));
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
  signInOptions(): Observable<AppUserRow[]> {
    return this.data.list<AppUserRow>('AppUser', { size: 1000 }).pipe(
      map(page => page.content.filter(u => u.status === 'ACTIVE')));
  }

  /**
   * Ends the session and leaves.
   *
   * The navigation belongs here, not at each call site: clearing the token
   * without moving leaves the user staring at a shell whose every request now
   * 401s, which reads as the application having frozen. `replaceUrl` keeps
   * Back from returning to a screen that no longer has a session behind it.
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSignal.set(null);
    void this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Does this session hold an authority?
   *
   * Grants are per module *and section* — `M1_MASTER_WRITE`, not `M1_WRITE` —
   * so callers ask for the authority they actually need rather than passing a
   * module and guessing at the rest.
   */
  has(authority: string): boolean {
    return this.userSignal()?.authorities.includes(authority) ?? false;
  }

  /** Write access to a whole module. Owners hold this; readers do not. */
  canWrite(module: string): boolean {
    return this.has(`${module}_WRITE`);
  }

  private restore(): CurrentUser | null {
    const raw = localStorage.getItem('user');
    return raw ? (JSON.parse(raw) as CurrentUser) : null;
  }
}
