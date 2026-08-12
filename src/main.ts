import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { appConfig } from './app/app.config';

/**
 * The application root is nothing but an outlet: the login screen and the
 * shell are both routed, so the shell's chrome never surrounds the login form.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class AppComponent {}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
