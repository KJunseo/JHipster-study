import { Routes } from '@angular/router';

import { activateRoute, passwordRoute, passwordResetFinishRoute, passwordResetInitRoute, registerRoute, settingsRoute } from './';

import { customSettingsRoute } from './custom-settings/custom-settings.route';
import { customRegisterRoute } from 'app/account/custom-register/custom-register.route';
import { customPasswordRoute } from 'app/account/custom-password/custom-password.route';
import { customPasswordResetInitRoute } from 'app/account/custom-password-reset/init/custom-password-reset-init.route';
import { customPasswordResetFinishRoute } from 'app/account/custom-password-reset/finish/custom-password-reset-finish.route';
import { customActivateRoute } from 'app/account/custom-activate/custom-activate.route';

const ACCOUNT_ROUTES = [
  activateRoute,
  passwordRoute,
  passwordResetFinishRoute,
  passwordResetInitRoute,
  registerRoute,
  settingsRoute,
  customSettingsRoute,
  customRegisterRoute,
  customPasswordRoute,
  customPasswordResetInitRoute,
  customPasswordResetFinishRoute,
  customActivateRoute
];

export const accountState: Routes = [
  {
    path: '',
    children: ACCOUNT_ROUTES
  }
];
