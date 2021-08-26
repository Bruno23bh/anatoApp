import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizs',
  templateUrl: './quizs.page.html',
  styleUrls: ['./quizs.page.scss'],
})
export class QuizsPage implements OnInit {
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
  quiz: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.quiz = this.activatedRoute.snapshot.queryParams.quiz;
    switch (this.quiz) {
      case 'Tronco':
        this.items = [
          {
            theme: 'Columna vertebral',
            icon: "file-tray-stacked-outline",
            url: '../quiz/1',
          },
          {
            theme: 'Músculos de Tronco',
            icon: "shirt-outline",
            url: '../quiz/2',
          },
          {
            theme: 'Tórax',
            icon: 'skull-outline',
            url: '../quiz/3',
          },
          {
            theme: 'Abdomen',
            icon: "hand-right-outline",
            url: '../quiz/4',
          },
        ];
        break;
      case 'Miembro superior':
        this.items = [
          {
            theme: 'Complejo articular del hombro',
            icon: 'happy-outline',
            url: '../quiz/5',
          },
          {
            theme: 'Codo',
            icon: 'shirt-outline',
            url: '../quiz/6',
          },
          {
            theme: 'Mano',
            icon: 'hand-right-outline',
            url: '../quiz/7',
          },
          {
            theme: 'Vasos',
            icon: 'triangle-outline',
            url: '../quiz/8',
          },
          {
            theme: 'Nervios',
            icon: 'pin-outline',
            url: '../quiz/9',
          },
        ];
        break;
      case 'Esplacnología':
        this.items = [
          {
            theme: '',
            icon: '',
            url: '../quiz/10',
          },
        ];
        break;
      case 'Miembro Inferior':
        this.items = [
          {
            theme: 'Pelvis y cadera',
            icon: '',
            url: '../quiz/11',
          },
          {
            theme: 'Rodilla y Pierna',
            icon: '',
            url: '../quiz/12',
          },
          {
            theme: 'Tobillo y Pie',
            icon: '',
            url: '../quiz/12',
          },
          {
            theme: 'Vasos',
            icon: '',
            url: '../quiz/13',
          },
          {
            theme: 'Nervios',
            icon: '',
            url: '../quiz/14',
          },
        ];
        break;
      case 'Cabeza y Pares Craneales':
        this.items = [
          {
            theme: 'Cráneo',
            icon: '',
            url: '../quiz/15',
          },
          {
            theme: 'Cabeza',
            icon: '',
            url: '../quiz/16'
          },
          {
            theme: 'Pares Craneanos',
            icon: '',
            url: '../quiz/17'
          },
        ];
        break;
      case 'Sistema Nervioso Central':
        this.items = [
          {
            theme: 'Generalidades',
            icon: '',
            url: '../quiz/18'
          },
          {
            theme: 'Médula',
            icon: '',
            url: '../quiz/19'
          },
          {
            theme: 'Nervio raquídeo',
            icon: '',
            url: '../quiz/20'
          },
          {
            theme: 'Tronco encefálico',
            icon: '',
            url: '../quiz/21'
          },
          {
            theme: 'Cerebelo',
            icon: '',
            url: '../quiz/22'
          },
          {
            theme: 'Cerebro',
            icon: '',
            url: '../quiz/23'
          },
          {
            theme: 'Vías de conducción del impulso nervioso',
            icon: '',
            url: '../quiz/24'
          },
          {
            theme: 'Vascularización del SNC',
            icon: '',
            url: '../quiz/25'
          },
          {
            theme: 'Sistema ventricular',
            icon: '',
            url: '../quiz/26'
          },
          {
            theme: 'Meninges',
            icon: '',
            url: '../quiz/27'
          },
          {
            theme: 'Sistema nervioso autónomo',
            icon: '',
            url: '../quiz/28'
          },
        ];
        break;

    }

    this.copyItems = this.items;
  }

  inicilizarItems() {
    this.items = this.copyItems;
  }

  onSearchChange(event) {
    let textEntered: string = event.detail.value;
    this.inicilizarItems();
    if (textEntered.length >= 3) {
      this.items = this.items.filter(item => {
        return item.theme.toLowerCase().indexOf(textEntered.toLowerCase()) > -1;
      });
    }
  }

}
