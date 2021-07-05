import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musculos',
  templateUrl: './musculos.page.html',
  styleUrls: ['./musculos.page.scss'],
})
export class MusculosPage implements OnInit {
  items: {
    theme: string;
    icon: string;
    url?: string;
  }[] = [];

  copyItems: {
    theme: string;
    icon: string;
    url?: string;
  }[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        theme: 'Faciales',
        icon: 'happy-outline',

      },
      {
        theme: 'Torax',
        icon: 'shirt-outline',

      },
      {
        theme: 'Miembros Superiores',
        icon: 'hand-right-outline',

      },
      {
        theme: 'Pelvís',
        icon: 'triangle-outline',

      },
      {
        theme: 'Miembros Inferiores',
        icon: 'pin-outline',

      },
    ];
    this.copyItems = this.items;
  }
  inicializarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    let textEntered: string = event.detail.value;
    this.inicializarItems();
    if (textEntered.length >= 3) {
      console.log(textEntered);
      console.log(this.items.length);
      this.items = this.items.filter(item => {
        return item.theme.toLowerCase().indexOf(textEntered.toLowerCase()) > -1;
      });
    }

  }

}
