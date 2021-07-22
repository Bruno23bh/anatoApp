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
      case 'Huesos':
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
        break;
      case 'Musculos':
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
        break;
      case 'Sistema Nervioso Periférico':
        this.items = [
          {
            theme: 'Nervios Craneales',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios Cervicales',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios Dorsales',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios Lumbares',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios Sacros',
            icon: '',
            //url: '',
          },
          {
            theme: 'Nervios Coccígeos',
            icon: '',
            //url: '',
          },
          {
            theme: 'Plexo Cervical',
            icon: '',
            //url: '',
          },
          {
            theme: 'Plexo Braquial',
            icon: '',
            //url: '',
          },
          {
            theme: 'Plexo Lumbar',
            icon: '',
            //url: '',
          },
          {
            theme: 'Plexo Sacro',
            icon: '',
            //url: '',
          },

        ];
        break;
      case 'Sistema Nervioso Central':
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
      console.log(textEntered);
      console.log(this.items.length);
      this.items = this.items.filter(item => {
        return item.theme.toLowerCase().indexOf(textEntered.toLowerCase()) > -1;
      });
    }
  }

}
