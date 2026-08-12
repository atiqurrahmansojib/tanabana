import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from './i18n.service';

/**
 * `{{ 'Buyer code' | t }}`.
 *
 * Impure on purpose: the language is a signal that changes while the page is
 * open, and a pure pipe would leave every already-rendered label in the old
 * language until something else happened to redraw it. The cost is a map
 * lookup per binding per change detection run, which is nothing next to a
 * screen that is half Bangla and half English.
 */
@Pipe({ name: 't', standalone: true, pure: false })
export class TPipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(value: string | null | undefined): string {
    return this.i18n.t(value);
  }
}
