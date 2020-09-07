import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/shared/models/drink.model';
import { DrinksService } from './../../../core/data-services/drinks/drinks.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DrinkModalComponent } from './../drink-modal/drink-modal.component'


@Component({
  selector: 'h-drinks-index',
  templateUrl: './drinks-index.component.html',
  styleUrls: ['./drinks-index.component.scss']
})
export class DrinksIndexComponent implements OnInit {
  public list: Drink[];

  constructor(
    private readonly service: DrinksService,
    private readonly modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.retrieveDrinks();
  }

  public retrieveDrinks(): void {
    this.service.getDrinks().subscribe(
      (result) => {
        console.log("drinks loaded");
        this.list = result;
      },
      (err) => {
        console.log("err when loading drinks");
      }
    );
  }

  public createDrink(): void {
    const modref = this.modal.open(DrinkModalComponent, {
      size: 'md',
      centered: true
    });

    modref.componentInstance.successfulTransaction.subscribe(() => {
      this.retrieveDrinks();
    });
  }

  public deleteDrink(drinkId: number): void {
    this.service.deleteDrink(drinkId).subscribe(() => {
      console.log("drink drunk");
      this.retrieveDrinks();
    });
  }

  public confirmDeleteModal(drink: Drink): void {
    if(confirm(`cru-Delete ${drink.name}?`)){
      this.deleteDrink(drink.id)
    }
  }

  public editDrink(drink: Drink) {
    const modref = this.modal.open(DrinkModalComponent, {
      size: 'md',
      centered: true
    });
    
    modref.componentInstance.drink = drink;

    modref.componentInstance.successfulTransaction.subscribe(() => {
      this.retrieveDrinks();
    });
  }

}