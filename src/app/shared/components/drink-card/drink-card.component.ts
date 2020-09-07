import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Drink } from '../../models/drink.model';

@Component({
  selector: 'h-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent implements OnInit, OnChanges {
  @Input() drink: Drink;

  constructor() { }

  ngOnInit(): void {
    console.log(this.drink + "inits");
  }
  
  ngOnChanges(changes: any): void {
    console.log(this.drink + "changes");
  }
}
