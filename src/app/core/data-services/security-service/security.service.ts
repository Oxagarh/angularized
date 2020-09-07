import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Credentials } from 'src/app/shared/models/credentials.model';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {
  private apiPath = `${CONFIG.apiPath}`;

  constructor(private readonly http: HttpClient) { }
  
  public login(credentials: Credentials): Observable<any> {
    return this.http
      .get(`${this.apiPath}/users`, {params: {username: credentials.username, password: credentials.password}})
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  public logout(): Observable<any> {
    return this.http
      .post(`${this.apiPath}/logout`, {})
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}