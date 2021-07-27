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
            //url: '',
          },
        ];
        break;
      case 'Miembro Inferior':
        this.items = [
          {
            theme: 'Pelvis y cadera',
            icon: '',
            //url: '',
          },
          {
            theme: 'Rodilla y Pierna',
            icon: '',
            //url: '',
          },
          {
            theme: 'Tobillo y Pie',
            icon: '',
            //url: '',
          },
          {
            theme: 'Vasos',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios',
            icon: '',
            //url: '',
          },
        ];
        break;
      case 'Cabeza y Pares Craneales':
        this.items = [
          {
            theme: 'Cráneo',
            icon: '',
            //url: '',
          },
          {
            theme: 'Cabeza',
            icon: '',
            //url: '',
          },
          {
            theme: 'Pares Craneanos',
            icon: '',
            //url: '',
          },
        ];
        break;
      case 'Sistema Nervioso Central':
        this.items = [
          {
            theme: 'Generalidades',
            icon: '',
            //url: '',
          },
          {
            theme: 'Médula',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervio raquídeo',
            icon: '',
            //url: '',
          },
          {
            theme: 'Tronco encefálico',
            icon: '',
            //url: '',
          },
          {
            theme: 'Cerebelo',
            icon: '',
            //url: '',
          },
          {
            theme: 'Cerebro',
            icon: '',
            //url: '',
          },
          {
            theme: 'Vías de conducción del impulso nervioso',
            icon: '',
            //url: '',
          },
          {
            theme: 'Vascularización del SNC',
            icon: '',
            //url: '',
          },
          {
            theme: 'Sistema ventricular',
            icon: '',
            //url: '',
          },
          {
            theme: 'Meninges',
            icon: '',
            //url: '',
          },
          {
            theme: 'Sistema nervioso autónomo',
            icon: '',
            //url: '',
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
