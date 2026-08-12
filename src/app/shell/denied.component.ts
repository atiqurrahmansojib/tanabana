import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-denied',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="deny">
      <h1>You do not have access to this screen</h1>
      <p>
        This screen belongs to a module your role cannot open. Ask an
        administrator to grant access, or sign in as another user.
      </p>
      <a class="btn" routerLink="/">Back to my workspace</a>
    </section>
  `,
})
export class DeniedComponent {}
