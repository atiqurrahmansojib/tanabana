import { Component, EventEmitter, HostListener, Input, Output, inject, signal }
  from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportFormat } from '../../core/data/export';
import { TPipe } from '../../core/i18n/t.pipe';
import { I18nService } from '../../core/i18n/i18n.service';

/**
 * One Export button that asks which format.
 *
 * Three buttons in a row spent the toolbar on a decision most people make once
 * and then repeat — and it put CSV, the least-wanted format, at the same weight
 * as Excel, the most. A single button with a short menu says "export" first and
 * "as what" second, which is the order the question is actually asked in.
 *
 * Excel is listed first because that is where the work continues; PDF next
 * because that is what gets attached to an email a buyer should not edit; CSV
 * last because it is for another system, not a person.
 */
@Component({
  selector: 'app-export-menu',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <div class="menuwrap">
      <button type="button" class="btn" [disabled]="disabled || busy"
              [attr.aria-expanded]="open()" aria-haspopup="menu"
              (click)="toggle($event)">
        {{ (busy ? 'Exporting…' : 'Export') | t }}
        <span class="caret" aria-hidden="true">▾</span>
      </button>

      <div class="menu" role="menu" *ngIf="open()">
        <button type="button" role="menuitem" (click)="pick('xlsx')">
          {{ 'Export as Excel' | t }}
          <span class="dim">.xlsx</span>
        </button>
        <button type="button" role="menuitem" (click)="pick('pdf')">
          {{ 'Export as PDF' | t }}
          <span class="dim">.pdf</span>
        </button>
        <button type="button" role="menuitem" (click)="pick('csv')">
          {{ 'Export as CSV' | t }}
          <span class="dim">.csv</span>
        </button>
      </div>
    </div>
  `,
})
export class ExportMenuComponent {
  @Input() disabled = false;
  @Input() busy = false;

  @Output() chosen = new EventEmitter<ExportFormat>();

  protected readonly i18n = inject(I18nService);
  protected readonly open = signal(false);

  protected toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update(o => !o);
  }

  protected pick(format: ExportFormat): void {
    this.open.set(false);
    this.chosen.emit(format);
  }

  /** A menu that stays open after you have looked elsewhere is a menu in the way. */
  @HostListener('document:click')
  protected closeOnOutsideClick(): void {
    this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  protected closeOnEscape(): void {
    this.open.set(false);
  }
}
