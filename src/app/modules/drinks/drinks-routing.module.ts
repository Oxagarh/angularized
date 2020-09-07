import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinksIndexComponent } from './drinks-index/drinks-index.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component'

const routes: Routes = [
  {
    path: '',
    component: DrinksIndexComponent
  },
  {
    path: ':drinkId',
    component: DrinkDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
