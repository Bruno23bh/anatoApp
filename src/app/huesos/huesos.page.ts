import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';


@Component({
  selector: 'app-huesos',
  templateUrl: './huesos.page.html',
  styleUrls: ['./huesos.page.scss'],
})
export class HuesosPage implements OnInit {
  items: {
    tema: string;
    icono: string;
    url?: string;
  }[] = [];

  copiaItems: {
    tema: string;
    icono: string;
    url?: string;
  }[] = [];


  constructor() { }

  ngOnInit() {
    this.items = [
      {
        tema: 'Craneo',
        icono: 'skull-outline',
        url: '../quiz/1',
      },
      {
        tema: 'Miembros Superiores',
        icono: "hand-right-outline",
        url: '../quiz/2',
      },

      {
        tema: 'Torax',
        icono: "shirt-outline",
        url: '../quiz/3',
      },
      {
        tema: 'Pelvis',
        icono: "warning-outline",
        url: '../quiz/4',
      },
      {
        tema: 'Miembros Inferiores',
        icono: "pin-outline",
        url: '../quiz/5',
      },

    ];
    this.copiaItems = this.items;
  }

  inicilizarItems() {
    this.items = this.copiaItems;
  }

  onSearchChange(event) {
    let textoIngresado: string = event.detail.value;
    this.inicilizarItems();
    if (textoIngresado.length >= 3) {
      console.log(textoIngresado);
      console.log(this.items.length);
      this.items = this.items.filter(item => {
        return item.tema.toLowerCase().indexOf(textoIngresado.toLowerCase()) > -1;
      });
    }
  }


}
