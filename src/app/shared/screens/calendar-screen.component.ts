import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ScreenMeta } from '../../core/models/screen.model';
import { ScreenHeaderComponent } from './screen-header.component';
import { TPipe } from '../../core/i18n/t.pipe';
import { ghash, gmix } from '../../core/data/mock-generator';

interface Cell { day: number | null; load: number; }

/**
 * The calendar archetype — capacity by day. Every calendar screen in the
 * information architecture routes here; the difference between them lives
 * in the route's `data`.
 *
 * The load percentage is fabricated the same way every other figure in this
 * app is: deterministically, from the entity's name and the day of month, so
 * it is stable across a reload rather than jittering on every render.
 */
@Component({
  selector: 'app-calendar-screen',
  standalone: true,
  imports: [CommonModule, ScreenHeaderComponent, TPipe],
  template: `
    <app-screen-header [meta]="meta()" />

    <div class="toolbar">
      <span class="count">{{ monthLabel }}</span>
      <button type="button" class="btn">{{ 'Today' | t }}</button>
      <button type="button" class="btn primary">{{ 'Book capacity' | t }}</button>
    </div>

    <section class="panel calendar">
      <div class="cell" *ngFor="let d of days()" [class.weekend]="d.day && isWeekend(d)">
        <ng-container *ngIf="d.day as day">
          <span class="date">{{ day }}</span>
          <strong class="num"
                  [style.color]="d.load > 90 ? 'var(--bad)' : d.load > 75 ? 'var(--warn)' : 'var(--good)'">
            {{ d.load }}%
          </strong>
        </ng-container>
      </div>
    </section>
  `,
})
export class CalendarScreenComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  protected readonly meta = toSignal(
    this.route.data.pipe(map(d => d['screen'] as ScreenMeta | undefined)),
    { initialValue: undefined });

  protected readonly days = signal<Cell[]>([]);
  protected readonly monthLabel = new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  ngOnInit(): void {
    const seed = ghash(this.meta()?.entity ?? 'capacity');
    const now = new Date();
    const firstDow = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    const cells: Cell[] = [];
    for (let i = 0; i < firstDow; i++) cells.push({ day: null, load: 0 });
    for (let day = 1; day <= daysInMonth; day++) {
      const k = gmix((seed + day * 97) >>> 0);
      cells.push({ day, load: 40 + (k % 60) });
    }
    this.days.set(cells);
  }

  protected isWeekend(d: Cell): boolean {
    const idx = this.days().indexOf(d);
    return idx % 7 === 5; // Friday is the day off, same convention as the prototype
  }
}
