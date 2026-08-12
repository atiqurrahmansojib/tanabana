import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

/**
 * No `provideHttpClient` — there is no backend behind this build.
 * `ScreenDataService` and `AuthService` read and write `localStorage`
 * directly; see `Product_context.md` / `Development.md` for why.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
  ],
};
