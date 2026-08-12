import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from '../models/role.model';

/**
 * Route-level access. The server enforces the same rule with @PreAuthorize —
 * this only keeps the user out of a screen that would return 403 anyway, and
 * lets the shell hide modules the role cannot open.
 */
export const roleGuard: CanActivateFn = (route, _state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowed = (route.data['roles'] ?? []) as Role[];
  const role = auth.role();

  if (!role) return router.createUrlTree(['/login']);
  if (allowed.length === 0 || allowed.includes(role)) return true;
  return router.createUrlTree(['/denied'], { queryParams: { from: route.routeConfig?.path } });
};
