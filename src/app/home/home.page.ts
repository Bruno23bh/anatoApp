import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Variables
  // items = ['Huesos', 'Musculos', 'S.N.P', 'S.N.C'];

  // icon = []
  // texto = 'texto plano';
  // numero = 2;
  // unbooleano = false;
  // un arreglo de objetos 
  // faHeadSideVirus = faHeadSideVirus;
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

  showHelpCard = true;
  // Metodos
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        theme: 'Tronco',
        icon: 'albums-outline',
        url: '/quizs'
      },
      {
        theme: 'Miembro superior',
        icon: 'ellipsis-vertical-outline',
        url: '/quizs'
      },
      {
        theme: 'Esplacnología',
        icon: 'heart-outline',
        url: '/quizs'
      },
      {
        theme: 'Miembro Inferior',
        icon: 'footsteps-outline',
        url: '/quizs'
      },
      {
        theme: 'Sistema Nervioso Central',
        icon: 'git-pull-request-outline',
        url: '/quizs'
      },

    ];
    this.copyItems = this.items;

  }

  inicilizarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    let textoIngresado: string = event.detail.value;
    this.inicilizarItems();
    if (textoIngresado.length >= 3) {
      console.log(textoIngresado);
      console.log(this.items.length);
      this.items = this.items.filter(item => {
        return item.theme.toLowerCase().indexOf(textoIngresado.toLowerCase()) > -1;
      });
    }
  }

  onCloseHelpCardClick() {
    this.showHelpCard = false;
  }


}
