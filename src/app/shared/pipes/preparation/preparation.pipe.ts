import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preparation'
})
export class PreparationPipe implements PipeTransform {

  transform(value: boolean | string): string {
    let result: boolean;
    if (typeof value !== 'string'){
      result = value;
    } else {
      result = value === 'true';
    }
    return result ? `<span class="badge badge-info">prepared</span>` : `<span class="badge badge-secondary">industrial</span>`;
  }

}