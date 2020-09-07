import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private readonly authentication: AuthenticationService,
    private readonly router: Router,
    private readonly translate: TranslateService
  ) { }

  canLoad(_route: Route): boolean {
    if(!this.authentication.isLoggedIn()){
      let errm = this.translate.instant("login.notallowed");
      confirm(errm);
      this.router.navigate(['/login']);
    }

    return this.authentication.isLoggedIn();
  }
}