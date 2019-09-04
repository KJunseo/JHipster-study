import { Route } from '@angular/router';
import { CustomActivateComponent } from 'app/account/custom-activate/custom-activate.component';

export const customActivateRoute: Route = {
  path: 'activate',
  component: CustomActivateComponent,
  data: {
    authorities: [],
    pageTitle: 'custom-Activation'
  }
};
