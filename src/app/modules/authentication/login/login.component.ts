import { Component, OnInit } from '@angular/core';
import { Credentials } from './../../../shared/models/credentials.model';
import { AuthenticationService } from './../../../core/services/authentication/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'h-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials = new Credentials();
  public submitted: boolean;
  public err: string;

  constructor(
    private readonly service: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  public login(form) {
    this.submitted = true;
    this.err = '';
    if(!form.valid) {
      return;
    }

    this.service.login(this.credentials)
      .then(() => {
        this.router.navigateByUrl('/drinks');
      })
      .catch((error) => {
        this.err = error.message;
      });
  }

}
