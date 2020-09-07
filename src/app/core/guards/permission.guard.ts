import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanLoad {

  constructor(
    private readonly auth: AuthenticationService
  ) { }

  canLoad(route: Route): boolean {
    const role = this.auth.getLoggedUser().roles;
    if (role === route.data.rolesNeeded) {
      return true;
    }
    return false;
  }
}
