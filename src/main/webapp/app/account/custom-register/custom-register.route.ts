import { Route } from '@angular/router';
import { CustomRegisterComponent } from 'app/account/custom-register/custom-register.component';
//custom-register가 path로 오면 CustomRegisterComponent를 연결시켜줌
export const customRegisterRoute: Route = {
  path: 'custom-register',
  component: CustomRegisterComponent,
  data: {
    authorities: [],
    pageTitle: 'Custom-Registration'
  }
};
