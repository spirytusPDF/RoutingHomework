import { CanActivateFn } from '@angular/router';

export const signupGuardGuard: CanActivateFn = (route, state) => {
  return confirm("Are you older than 18?");
};
