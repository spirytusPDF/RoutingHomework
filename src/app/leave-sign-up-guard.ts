import { CanDeactivateFn } from '@angular/router';

interface LeaveSignUpComponent {
  hasUnsavedChanges?: boolean;
}

export const leaveSignUpGuard: CanDeactivateFn<LeaveSignUpComponent> = (component) => {
    return confirm('Are you sure you want to leave?');
};
