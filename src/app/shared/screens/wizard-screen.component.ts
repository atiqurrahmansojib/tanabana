import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { ScreenDataService } from '../../core/services/screen-data.service';
import { FormField, resourceFor } from '../../core/data/resource.registry';
import { AuthService } from '../../core/auth/auth.service';
import { ScreenHeaderComponent } from './screen-header.component';
import { TPipe } from '../../core/i18n/t.pipe';

/**
 * The wizard archetype — guided steps, nothing committed until the last one.
 * Every wizard screen in the information architecture routes here; the
 * difference between them lives in the route's `data` and the resource
 * registry's `fields`.
 *
 * The four steps are the prototype's fixed shape (Scope, Inputs, Simulate,
 * Review & commit). The entity's fields are asked for during Inputs and
 * recapped at Review — a real wizard would split them per step by what each
 * step actually needs, which is business logic this mock does not have.
 */
@Component({
  selector: 'app-wizard-screen',
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
            <option value="">—</option>
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
            <dd>{{ value(f.key) || '—' }}</dd>
          </div>
        </ng-container>
      </dl>

      <footer class="actions">
        <button type="button" class="btn" [disabled]="step() === 0" (click)="back()">
          ← {{ 'Back' | t }}
        </button>
        <button type="button" class="btn primary"
                [disabled]="busy() || (step() === steps.length - 1 && !canWrite())"
                (click)="next()">
          {{ (step() === steps.length - 1 ? (busy() ? 'Saving…' : 'Commit') : 'Continue') | t }} →
        </button>
      </footer>
    </section>
  `,
})
export class WizardScreenComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly data = inject(ScreenDataService);
  private readonly auth = inject(AuthService);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly steps = ['Scope', 'Inputs', 'Simulate', 'Review & commit'];
  protected readonly step = signal(0);
  protected readonly fields = signal<FormField[]>([]);
  protected readonly draft = signal<Record<string, unknown>>({});
  protected readonly busy = signal(false);
  protected readonly committed = signal(false);
  protected readonly error = signal<string | null>(null);
  private writeAuthority: string | undefined;

  ngOnInit(): void {
    const meta = this.meta();
    if (!meta) return;
    const resource = resourceFor(meta.entity);
    this.fields.set(resource?.fields ?? []);
    this.writeAuthority = resource?.writeAuthority;
  }

  /** Same rule as the list and object archetypes: read is not write. */
  protected canWrite(): boolean {
    return !!this.writeAuthority && this.auth.has(this.writeAuthority);
  }

  protected value(key: string): unknown {
    return this.draft()[key] ?? '';
  }

  protected set(key: string, value: unknown): void {
    this.draft.update(d => ({ ...d, [key]: value }));
  }

  protected back(): void {
    this.step.update(s => Math.max(0, s - 1));
  }

  protected next(): void {
    if (this.step() < this.steps.length - 1) {
      this.step.update(s => s + 1);
      return;
    }
    const meta = this.meta();
    if (!meta || !this.canWrite()) return;

    this.busy.set(true);
    this.error.set(null);
    const body: Record<string, unknown> = {};
    for (const f of this.fields()) {
      const raw = this.draft()[f.key];
      if (raw === '' || raw === null || raw === undefined) continue;
      body[f.key] = f.type === 'number' ? Number(raw) : raw;
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
        this.error.set('This could not be committed.');
      },
    });
  }
}
