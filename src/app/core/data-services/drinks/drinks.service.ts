import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { Drink } from 'src/app/shared/models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private apiPath = `${CONFIG.apiPath}/drinks`;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getDrinks(): Observable<any> {
    return this.http
    .get(this.apiPath)
    .pipe(timeout(CONFIG.timeoutRequest));
  }

  public createDrink(body: Drink ): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  public deleteDrink(drinkId: number): Observable<any> {
    return this.http
      .delete(`${this.apiPath}/${drinkId}`)
      .pipe(timeout(CONFIG.timeoutRequest));  
  }

  public getDrink(drinkId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${drinkId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  public editDrink(drinkId: number, body: Drink): Observable<any> {
    return this.http
      .put(`${this.apiPath}/${drinkId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
