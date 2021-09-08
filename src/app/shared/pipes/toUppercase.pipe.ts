import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUppercase'
})
export class ToUpperCasePipe implements PipeTransform {

  transform(text: string, args?: any): string {

    if (text && text !== '' && text !== null) {
      return text.toUpperCase();
    }
  }
}
