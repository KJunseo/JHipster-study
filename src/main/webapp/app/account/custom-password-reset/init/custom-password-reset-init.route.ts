import { Route } from '@angular/router';
import { CustomPasswordResetInitComponent } from 'app/account/custom-password-reset/init/custom-password-reset-init.component';

export const customPasswordResetInitRoute: Route = {
  path: 'custom-reset/request',
  component: CustomPasswordResetInitComponent,
  data: {
    authorities: [],
    pageTitle: 'Password'
  }
};
