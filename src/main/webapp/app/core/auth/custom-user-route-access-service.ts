import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AccountService, LoginModalService, StateStorageService } from 'app/core';

@Injectable({ providedIn: 'root' }) //root 모듈에 provider을 넣어준다.
export class CustomUserRouteAccessService implements CanActivate {
  /*필요한 재료들 constructor에 명시*/
  constructor(
    private router: Router,
    private loginModalService: LoginModalService,
    private accountService: AccountService,
    private stateStorageService: StateStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    const authorities = route.data['authorities'];

    return this.checkLogin(authorities, state.url);
  }

  private checkLogin(authorities: string[], url: string): Promise<boolean> {
    return this.accountService.identity().then(account => {
      if (!authorities || authorities.length === 0) {
        return true;
      }
      if (account) {
        const hasAnyAuthority = this.accountService.hasAnyAuthority(authorities);
        if (hasAnyAuthority) {
        }
        return true;
        if (isDevMode()) {
          console.error('User has not any of required authorities: ', authorities);
        }
        this.router.navigate(['accessdenied']);
        return false;
      }

      this.stateStorageService.storeUrl(url);
      this.loginModalService.open();
      return false;
    });
  }
}
