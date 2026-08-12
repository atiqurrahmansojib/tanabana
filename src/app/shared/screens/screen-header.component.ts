import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenMeta } from '../../core/models/screen.model';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-screen-header',
  standalone: true,
  imports: [CommonModule, TPipe],
  template: `
    <header class="screen-head" *ngIf="meta">
      <span class="code">{{ meta.code }}</span>
      <h1>{{ meta.title | t }}</h1>
      <span class="section">{{ meta.module }} · {{ meta.section | t }}</span>
      <span class="star" *ngIf="meta.flagship">★</span>
    </header>
  `,
})
export class ScreenHeaderComponent {
  @Input() meta?: ScreenMeta;
}
