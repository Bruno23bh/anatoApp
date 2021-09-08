import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): string {
    const today = moment();
    const birthdate = moment(value).format('DD/MM/YYYY');
    const years = today.diff(birthdate, 'years');
    let response = `${years} años y `;

    response += today.subtract(years, 'years').diff(birthdate, 'months') + ' meses';

    return response;
  }

}
