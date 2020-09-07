import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinksIndexComponent } from './drinks-index/drinks-index.component';
import { DrinkModalComponent } from './drink-modal/drink-modal.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';


@NgModule({
  declarations: [DrinksIndexComponent, DrinkModalComponent, DrinkDetailsComponent],
  imports: [
    SharedModule,
    DrinksRoutingModule
  ]
})
export class DrinksModule { }
