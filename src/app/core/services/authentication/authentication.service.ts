import { Injectable } from '@angular/core';
import { SecurityService } from './../../data-services/security-service/security.service';
import { UsersService } from './../../data-services/users/users.service';
import { EventsHubService } from './../events-hub/events-hub.service';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private token: string;
  private loggedUser: any;

  constructor(
    private readonly securityService: SecurityService,
    private readonly userService: UsersService,
    private readonly eventsHubService: EventsHubService,
    private readonly localStorageService: LocalStorageService,
    private router: Router
  ) {
    const authData = this.localStorageService.get('authData', null);
    if (authData) {
      this.token = authData.token;
      this.loggedUser = authData.loggedUser;
      this.eventsHubService.setLoggedIn(true);
    }
  }

  public login(credentials): Promise<any> {
    return new Promise((resolve, reject) => {
      this.securityService.login(credentials).subscribe(
        (result) => {   //  result is array
          this.token = result[0].token;
          const userId = result[0].id;

          this.userService.getUser(userId).subscribe(
            (user) => {
              this.loggedUser = user;
              this.eventsHubService.setLoggedIn(true);
              this.localStorageService.set('authData', {
                token: this.token,
                loggedUser: this.loggedUser
              });
              resolve(result);
            },
            () => {
              reject({message: 'useless human readable message'});
            }
          )
          
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public getToken(): string {   // interceptor
    return this.token;
  }

  public getLoggedUser(): any {
    return this.loggedUser;     //  persission-service+guard
  }

  public isLoggedIn(): boolean {
    return this.eventsHubService.loggedIn$.getValue();
  }

  public logout(): void {
    this.securityService.logout();
    this.localStorageService.deleteAll();
    this.eventsHubService.setLoggedIn(false);
    this.router.navigate(['/']);
  }

}