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

import { FinishComponent } from './custom-password-reset/finish/finish.component';
import { InitComponent } from './custom-password-reset/init/init.component';
import { CustomPasswordStrengthBarComponent } from 'app/account/custom-password/custom-password-strength-bar.component';

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
    FinishComponent,
    InitComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialAccountModule {}
