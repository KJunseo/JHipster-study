import { AfterViewInit, Component, ElementRef, OnInit, Renderer } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { EMAIL_NOT_FOUND_TYPE } from 'app/shared';
import { CustomPasswordResetInitService } from 'app/account/custom-password-reset/init/custom-password-reset-init.service';

@Component({
  selector: 'jhi-init',
  templateUrl: './custom-password-reset-init.component.html',
  styleUrls: ['./custom-password-reset-init.component.scss']
})
export class CustomPasswordResetInitComponent implements AfterViewInit {
  error: string;
  errorEmailNotExists: string;
  success: string;
  resetRequestForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]]
  });

  constructor(
    private passwordResetInitService: CustomPasswordResetInitService,
    private elementRef: ElementRef,
    private renderer: Renderer,
    private fb: FormBuilder
  ) {}

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
  }

  requestReset() {
    this.error = null;
    this.errorEmailNotExists = null;

    this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(
      () => {
        this.success = 'OK';
      },
      response => {
        this.success = null;
        if (response.status === 400 && response.error.type === EMAIL_NOT_FOUND_TYPE) {
          this.errorEmailNotExists = 'ERROR';
        } else {
          this.error = 'ERROR';
        }
      }
    );
  }
}
