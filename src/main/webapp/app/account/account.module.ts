import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TutorialSharedModule } from 'app/shared';

import {
  PasswordStrengthBarComponent,
  RegisterComponent,
  ActivateComponent,
  PasswordComponent,
  PasswordResetInitComponent,
  PasswordResetFinishComponent,
  SettingsComponent,
  CustomSettingsComponent,
  accountState
} from './';
import { CustomRegisterComponent } from './custom-register/custom-register.component';
import { CustomPasswordComponent } from './custom-password/custom-password.component';
import { CustomPasswordResetInitComponent } from './custom-password-reset/init/custom-password-reset-init.component';
import { CustomPasswordStrengthBarComponent } from 'app/account/custom-password/custom-password-strength-bar.component';
import { CustomPasswordResetFinishComponent } from 'app/account/custom-password-reset/finish/custom-password-reset-finish.component';
import { CustomActivateComponent } from './custom-activate/custom-activate.component';

@NgModule({
  imports: [TutorialSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    CustomSettingsComponent,
    CustomRegisterComponent,
    CustomPasswordComponent,
    CustomPasswordStrengthBarComponent,
    CustomPasswordResetInitComponent,
    CustomPasswordResetFinishComponent,
    CustomActivateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialAccountModule {}
