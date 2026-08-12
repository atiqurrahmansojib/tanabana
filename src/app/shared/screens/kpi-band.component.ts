import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Kpi {
  label: string;
  value: string | number;
  /** Shown under the value — what the number means, not what it is called. */
  note?: string;
  tone?: 'good' | 'warn' | 'bad';
  /** The one figure the screen is really about, if there is one. */
  lead?: boolean;
}

/**
 * The four-tile band the prototype puts above every list.
 *
 * One component rather than a band per screen: with 234 lists, a tile written
 * screen by screen is 234 chances for the same number to be worked out two
 * different ways.
 *
 * The tiles carry counts the server actually returned. A band that invents
 * "Added this month" because the layout has a fourth slot is worse than three
 * tiles — people plan against these numbers.
 */
@Component({
  selector: 'app-kpi-band',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="kpis band" *ngIf="kpis.length">
      <div class="kpi" *ngFor="let k of kpis" [class.lead]="k.lead"
           [attr.data-tone]="k.tone ?? null">
        <span class="label">{{ k.label }}</span>
        <span class="value">{{ k.value }}</span>
        <span class="note" *ngIf="k.note">{{ k.note }}</span>
      </div>
    </div>
  `,
})
export class KpiBandComponent {
  @Input() kpis: Kpi[] = [];
}
