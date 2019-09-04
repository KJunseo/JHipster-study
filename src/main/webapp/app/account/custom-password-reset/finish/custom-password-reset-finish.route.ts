import { Route } from '@angular/router';
import { CustomPasswordResetFinishComponent } from 'app/account/custom-password-reset/finish/custom-password-reset-finish.component';

export const customPasswordResetFinishRoute: Route = {
  path: 'reset/custom-finish',
  component: CustomPasswordResetFinishComponent,
  data: {
    authorities: [],
    pageTitle: 'custom-Password'
  }
};
