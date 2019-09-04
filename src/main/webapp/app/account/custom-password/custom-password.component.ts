import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AccountService } from 'app/core';
import { CustomPasswordService } from 'app/account/custom-password/custom-password.service';

@Component({
  selector: 'jhi-custom-password',
  templateUrl: './custom-password.component.html',
  styleUrls: ['./custom-password.component.scss']
})
export class CustomPasswordComponent implements OnInit {
  doNotMatch: string;
  error: string;
  success: string;
  account: any;
  passwordForm = this.fb.group({
    currentPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
  });

  constructor(private passwordService: CustomPasswordService, private accountService: AccountService, private fb: FormBuilder) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.account = account;
    });
  }

  changePassword() {
    const newPassword = this.passwordForm.get(['newPassword']).value;
    if (newPassword !== this.passwordForm.get(['confirmPassword']).value) {
      this.error = null;
      this.success = null;
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.passwordService.save(newPassword, this.passwordForm.get(['currentPassword']).value).subscribe(
        () => {
          this.error = null;
          this.success = 'OK';
        },
        () => {
          this.success = null;
          this.error = 'ERROR';
        }
      );
    }
  }
}
