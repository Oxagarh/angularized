import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { EventsHubService } from '../../services/events-hub/events-hub.service';
import { PermissionsService } from './../../services/permissions/permissions.service';

@Component({
  selector: 'h-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;
  public user;

  constructor(
    private authentication: AuthenticationService,
    private eventHub: EventsHubService,
    public permissions: PermissionsService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = false;
    
    this.eventHub.loggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
      if(this.isLoggedIn == true){
        this.getUser();
      }
    });
  }

  public logout(): void {
    this.authentication.logout();
  }

  private getUser(): void {
    this.user = this.authentication.getLoggedUser();
  }

}