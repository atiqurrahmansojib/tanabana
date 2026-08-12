import { CommonModule } from "@angular/common";
import { Component, OnInit, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppUserRow, AuthService } from "../../core/auth/auth.service";
import { TPipe } from "../../core/i18n/t.pipe";
import { firstVisiblePath } from "../../core/nav/landing";

/**
 * The entry screen. The role that comes back decides which modules exist in
 * the navigation at all, so nothing is routed until this resolves.
 *
 * Outside production it also lists the active accounts from the M13.3 Users
 * register, one card each, so the system can be walked through as each kind
 * of user without keeping a list of logins on paper — and so an account an
 * admin just deactivated or removed disappears from here too, not just from
 * `login()`'s own check. That list is gated on the environment on purpose: a
 * production login page that enumerates its own accounts hands an attacker the
 * user list for free.
 */
@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TPipe],
  template: `
    <section class="login">
      <aside class="brandside">
        <span class="wordmark">{{ "Tanabana" | t }}</span>
        <h1>{{ "The ERP that tells you early." | t }}</h1>
        <p>
          {{
            "Multi-unit manufacturing control for ready-made garment exporters."
              | t
          }}
        </p>
        <p class="meaning">
          {{
            "Tanabana — warp and weft, the threads a fabric is woven from." | t
          }}
        </p>
      </aside>

      <div class="formside">
        <form class="signin-card" [formGroup]="form" (ngSubmit)="submit()">
          <h2>{{ "Sign in" | t }}</h2>
          <p class="lead">
            {{ "Your role decides which modules you can open." | t }}
          </p>
          <p class="error" *ngIf="error()">{{ error() }}</p>

          <label>{{ "Username" | t }}</label>
          <input formControlName="username" autocomplete="username" />

          <label>{{ "Password" | t }}</label>
          <input
            type="password"
            formControlName="password"
            autocomplete="current-password"
          />

          <button
            class="btn primary"
            type="submit"
            [disabled]="form.invalid || busy()"
          >
            {{ (busy() ? "Signing in…" : "Sign in") | t }}
          </button>
        </form>

        <div class="demo" *ngIf="demoUsers().length">
          <div class="demorule">
            <span>{{ "Sign in as — development only" | t }}</span>
          </div>
          <div class="demogrid">
            <button
              type="button"
              class="democard"
              *ngFor="let u of demoUsers()"
              [disabled]="busy()"
              (click)="signInAs(u)"
              [title]="u.unit"
            >
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
  `,
})
export class LoginComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly busy = signal(false);
  protected readonly error = signal<string | null>(null);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  /** Empty in production, so the list simply is not there to read. */
  protected readonly demoUsers = signal<AppUserRow[]>([]);

  ngOnInit(): void {
    // if (environment.production) return;
    this.auth.signInOptions().subscribe((users) => this.demoUsers.set(users));
  }

  /**
   * Fills the form and submits it, rather than logging in behind the form.
   * The password still goes to the server and is still checked — this is a
   * shortcut for typing, not a way around authentication.
   */
  protected initials(fullName: string): string {
    const parts = fullName.split(" ").filter(Boolean);
    return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
  }

  protected signInAs(user: AppUserRow): void {
    this.form.setValue({ username: user.username, password: "demo1234" });
    this.submit();
  }

  protected submit(): void {
    if (this.form.invalid) return;
    this.busy.set(true);
    this.error.set(null);
    const { username, password } = this.form.getRawValue();

    this.auth.login(username, password).subscribe({
      next: () => {
        // Where a role lands has to follow its grants. Finance cannot read the
        // Master section, so the old fixed redirect to the buyer master made
        // "Your role cannot open this screen" the first thing they saw.
        //
        // This is decided here rather than in a functional `redirectTo`: a
        // redirect that runs inside route matching and returns a path the
        // matcher rejects loops until the tab dies.
        const next =
          this.route.snapshot.queryParamMap.get("next") ??
          firstVisiblePath(this.auth.user());
        void this.router.navigateByUrl(next);
      },
      error: (err: unknown) => {
        this.busy.set(false);
        const message = (err as { error?: { message?: string } })?.error
          ?.message;
        this.error.set(
          message ?? "That username and password did not match an account.",
        );
      },
    });
  }
}
