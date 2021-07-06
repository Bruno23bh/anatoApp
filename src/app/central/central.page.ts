import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {
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
        theme: 'Encéfalo',
        icon: '',
        //url: '',
      },
      {
        theme: 'Médula',
        icon: '',
        //url: '',
      },
    ];
    this.copyItems = this.items;
  }
  inicializarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    let textoIngresado: string = event.detail.value;
    this.inicializarItems();
    if (textoIngresado.length >= 3) {
      console.log(textoIngresado);
      this.items = this.items.filter(item => {
        return item.theme.toLocaleLowerCase().indexOf(textoIngresado.toLocaleLowerCase()) > -1;
      });

    }
  }

}
