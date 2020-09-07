import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from "ngx-bar-rating";
import { HtmlPipe } from './pipes/html/html.pipe';
import { AlcoholPipe } from './pipes/alcohol/alcohol.pipe';
import { PreparationPipe } from './pipes/preparation/preparation.pipe';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DrinkCardComponent, HtmlPipe, AlcoholPipe, PreparationPipe, CommentBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    BarRatingModule
  ],
  exports: [
    CommonModule,
    DrinkCardComponent,
    ReactiveFormsModule,
    BarRatingModule,
    TranslateModule,
    HtmlPipe,
    AlcoholPipe,
    PreparationPipe
  ]
})
export class SharedModule { }
