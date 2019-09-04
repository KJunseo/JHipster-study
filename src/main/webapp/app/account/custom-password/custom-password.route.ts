import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { CustomPasswordComponent } from 'app/account/custom-password/custom-password.component';
//path가 custom-password로 넘어올 경우, CustomPasswordComponent 보여줌
export const customPasswordRoute: Route = {
  path: 'custom-password',
  component: CustomPasswordComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'Custom Password'
  },
  canActivate: [UserRouteAccessService]
};
