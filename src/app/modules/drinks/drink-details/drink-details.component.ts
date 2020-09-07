import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DrinksService } from 'src/app/core/data-services/drinks/drinks.service';
import { Drink } from 'src/app/shared/models/drink.model';

@Component({
  selector: 'h-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})

export class DrinkDetailsComponent implements OnInit, OnDestroy {
  private subscription: any;
  public drink: Drink;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: DrinksService
  ) { }

  ngOnInit(): void {
    this.getDrinkId();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  private getDrinkId(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        const drinkId = +params['drinkId'];
        this.getDrinkDetails(drinkId);
      }
    );
  }

  private getDrinkDetails(drinkId: number): void {
    this.service.getDrink(drinkId).subscribe(
      (drink: Drink) => {
        this.drink = drink;
      }
    );
  }
}
