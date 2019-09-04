import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalService } from 'app/core';
import { ActivatedRoute } from '@angular/router';
import { CustomActivateService } from 'app/account/custom-activate/custom-activate.service';

@Component({
  selector: 'jhi-custom-activate',
  templateUrl: './custom-activate.component.html',
  styleUrls: ['./custom-activate.component.scss']
})
export class CustomActivateComponent implements OnInit {
  error: string;
  success: string;
  modalRef: NgbModalRef;

  constructor(
    private activateService: CustomActivateService,
    private loginModalService: LoginModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activateService.get(params['key']).subscribe(
        () => {
          this.error = null;
          this.success = 'OK';
        },
        () => {
          this.success = null;
          this.error = 'ERROR';
        }
      );
    });
  }

  login() {
    this.modalRef = this.loginModalService.open();
  }
}
