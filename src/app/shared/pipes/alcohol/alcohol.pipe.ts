import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcohol'
})
export class AlcoholPipe implements PipeTransform {

  transform(value: boolean | string): string {
    let result: boolean;
    if (typeof value !== 'string'){
      result = value;
    } else {
      result = value === 'true';
    }
    return result ? `<span class="badge badge-warning">alcoholic</span>` : `<span class="badge badge-secondary">non alcoholic</span>`;
  }

}