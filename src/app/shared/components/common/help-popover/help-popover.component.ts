import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-popover',
  templateUrl: './help-popover.component.html',
  styleUrls: ['./help-popover.component.scss'],
})
export class HelpPopoverComponent implements OnInit {

  page: string;
  card: string;

  constructor() { }

  ngOnInit() { }

}
