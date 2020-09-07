import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(
    private readonly service: AuthenticationService
  ) {}

  public hasRole(role: string): boolean {
    const userRole = this.service.getLoggedUser().roles;

    return role === userRole;
  }
}
