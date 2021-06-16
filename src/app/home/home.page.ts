import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Vartibles
  // items = ['Huesos', 'Musculos', 'S.N.P', 'S.N.C'];

  // icon = []
  // texto = 'texto plano';
  // numero = 2;
  // unbooleano = false;
  // un arreglo de objetos 
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

  // Metodos
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        tema: 'Huesos', // huesos
        icono: 'skull-outline',
        url: '/huesos'
      },
      {
        tema: 'Musculos',
        icono: 'accessibility-outline',
        url: '/musculos'
      },
      {
        tema: 'S.N.P',
        icono: 'body-outline'
      },
      {
        tema: 'S.N.C',
        icono: 'git-merge-outline'
      }
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
