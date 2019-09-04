import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'app/core';

@Component({
  selector: 'jhi-custom-settings',
  templateUrl: './custom-settings.component.html',
  styleUrls: ['./custom-settings.component.scss']
})
export class CustomSettingsComponent implements OnInit {
  error: string;
  success: string; //setting을 성공적으로 저장했을경우를 확인하는 변수
  languages: any[];
  //유효한 setting form 조건
  settingsForm = this.fb.group({
    firstName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    lastName: [undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    email: [undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    activated: [false],
    authorities: [[]],
    langKey: ['en'],
    login: [],
    imageUrl: []
  });

  constructor(private accountService: AccountService, private fb: FormBuilder) {}

  ngOnInit() {
    this.accountService.identity().then(account => {
      this.updateForm(account);
    });
  }
  //form에서 넘어온 값들을 저장해줌
  save() {
    const settingsAccount = this.accountFromForm();
    this.accountService.save(settingsAccount).subscribe(
      () => {
        this.error = null;
        this.success = 'OK';
        this.accountService.identity(true).then(account => {
          this.updateForm(account);
        });
      },
      () => {
        this.success = null;
        this.error = 'ERROR';
      }
    );
  }

  private accountFromForm(): any {
    const account = {};
    return {
      ...account,
      firstName: this.settingsForm.get('firstName').value,
      lastName: this.settingsForm.get('lastName').value,
      email: this.settingsForm.get('email').value,
      activated: this.settingsForm.get('activated').value,
      authorities: this.settingsForm.get('authorities').value,
      langKey: this.settingsForm.get('langKey').value,
      login: this.settingsForm.get('login').value,
      imageUrl: this.settingsForm.get('imageUrl').value
    };
  }

  updateForm(account: any): void {
    this.settingsForm.patchValue({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      activated: account.activated,
      authorities: account.authorities,
      langKey: account.langKey,
      login: account.login,
      imageUrl: account.imageUrl
    });
  }
}
