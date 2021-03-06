import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'h-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'noneh';

  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang('es');
  }
}
