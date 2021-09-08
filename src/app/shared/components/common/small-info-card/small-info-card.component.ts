import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-info-card',
  templateUrl: './small-info-card.component.html',
  styleUrls: ['./small-info-card.component.scss'],
})
export class SmallInfoCardComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;
  @Input() info: string;
  @Input() extraInfo: string;
  @Input() selected: boolean;
  @Output() itemCliked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.itemCliked.emit(this.title);
  }

}
