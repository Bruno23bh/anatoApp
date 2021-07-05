import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-huesos',
  templateUrl: './huesos.page.html',
  styleUrls: ['./huesos.page.scss'],
})
export class HuesosPage implements OnInit {
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
        theme: 'Craneo',
        icon: 'skull-outline',
        url: '../quiz/1',
      },
      {
        theme: 'Miembros Superiores',
        icon: "hand-right-outline",
        url: '../quiz/2',
      },

      {
        theme: 'Torax',
        icon: "shirt-outline",
        url: '../quiz/3',
      },
      {
        theme: 'Pelvis',
        icon: "warning-outline",
        url: '../quiz/4',
      },
      {
        theme: 'Miembros Inferiores',
        icon: "pin-outline",
        url: '../quiz/5',
      },

    ];
    this.copyItems = this.items;
  }

  inicilizarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    let textEntered: string = event.detail.value;
    this.inicilizarItems();
    if (textEntered.length >= 3) {
      console.log(textEntered);
      console.log(this.items.length);
      this.items = this.items.filter(item => {
        return item.theme.toLowerCase().indexOf(textEntered.toLowerCase()) > -1;
      });
    }
  }


}
