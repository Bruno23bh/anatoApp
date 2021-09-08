import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-button',
  templateUrl: './calendar-button.component.html',
  styleUrls: ['./calendar-button.component.scss'],
})
export class CalendarButtonComponent implements OnInit {
  @Input() start: string;
  @Input() title: string;
  @Input() description: string;
  @Input() location: string;

  constructor() { }

  ngOnInit() {
    if (this.start === '') {
      this.start = moment().add(1, 'month').format('YYYY-MM-DD');
    } else {
      this.start = moment(this.start, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }
  }

  calendarOptionSelected(option: any) {
    const url = `https://calndr.link/d/event/?service=${option.detail.value}&start=${this.start}&title=${this.title}&description=${this.description}&location=${this.location}&timezone=America/Argentina/Buenos_Aires`;
    window.open(url, '_blank');
  }

}
