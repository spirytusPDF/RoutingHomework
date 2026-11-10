import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { signupGuardGuard } from './signup-guard-guard';

describe('signupGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => signupGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
