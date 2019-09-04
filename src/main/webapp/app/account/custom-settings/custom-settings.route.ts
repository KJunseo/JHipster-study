import { Route } from '@angular/router';

import { CustomSettingsComponent } from 'app/account/custom-settings/custom-settings.component';
import { CustomUserRouteAccessService } from 'app/core/auth/custom-user-route-access-service';
//custom-settings가 path로 오면 CustomSettingsComponent를 연결시켜줌
export const customSettingsRoute: Route = {
  path: 'custom-settings',
  component: CustomSettingsComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'Custom-Settings'
  },
  canActivate: [CustomUserRouteAccessService]
};
