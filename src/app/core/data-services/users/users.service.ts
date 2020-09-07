import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiPath = `${CONFIG.apiPath}/users`;

  constructor(private readonly http: HttpClient) { }

  public getUser(userId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${userId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
