import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { leaveSignUpGuard } from './leave-sign-up-guard';

describe('leaveSignUpGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => leaveSignUpGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
