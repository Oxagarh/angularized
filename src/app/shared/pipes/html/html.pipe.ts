import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  transform(value: boolean | string): string {
    let result: boolean;
    if (typeof value !== 'string'){
      result = value;
    } else {
      result = value === 'true';
    }
    return result ? '✓' : '×';
  }

}
