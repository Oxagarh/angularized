import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/data-services/users/users.service';


@Component({
  selector: 'h-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private subscription: any;
  public user: User;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: UsersService
  ) { }

  ngOnInit(): void {
    this.getUserId();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  private getUserId(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        const userId = +params['userId'];
        this.getUserDetails(userId);
      }
    );
  }

  private getUserDetails(userId: number): void {
    this.service.getUser(userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }

}