import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(
    private readonly authentication: AuthenticationService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    if(this.authentication.isLoggedIn()){
      return this.router.createUrlTree(['/', 'drinks']);
    }

    return true;
  }
  
}
