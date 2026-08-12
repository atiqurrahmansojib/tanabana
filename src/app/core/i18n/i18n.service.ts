import { Injectable, computed, signal } from '@angular/core';
import { BN } from './messages';

export type Lang = 'en' | 'bn';

const STORAGE_KEY = 'lang';

/**
 * English and Bangla, switched at runtime.
 *
 * Keyed by the English text rather than by an opaque key. `t('Buyer code')`
 * stays readable in a template, and an untranslated string degrades to correct
 * English instead of showing `m1.buyer.code` to a user.
 *
 * The choice is remembered per browser, because it is a property of the person
 * at the desk — a store keeper in Bangla, a merchandiser writing to a buyer in
 * English — not of the account or the session.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly langSignal = signal<Lang>(this.restore());

  readonly lang = this.langSignal.asReadonly();
  readonly isBangla = computed(() => this.langSignal() === 'bn');

  t(text: string | null | undefined): string {
    if (!text) return '';
    return this.langSignal() === 'bn' ? (BN[text] ?? text) : text;
  }

  set(lang: Lang): void {
    this.langSignal.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    this.set(this.langSignal() === 'bn' ? 'en' : 'bn');
  }

  private restore(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    const lang: Lang = stored === 'bn' ? 'bn' : 'en';
    document.documentElement.lang = lang;
    return lang;
  }
}
