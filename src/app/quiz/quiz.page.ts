import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { ToastController } from '@ionic/angular';
import { Question } from '../interfaces/question.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  selectedQuiz: string;
  questions: Question[] = [];
  activeIndex = 0;
  score = 0;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedQuiz = this.activatedRoute.snapshot.params.id;
    switch (this.selectedQuiz) {
      case "1":
        this.questions = [
          {
            question: '¿Cúantos segmentos posee la columna vertebral de un adulto?',
            imgUrl: 'https://img.freepik.com/vector-gratis/ilustracion-realista-hueso-perfil-humano-columna-vertebral_81522-911.jpg?size=338&ext=jpg',
            options: ['1', '2', '3', '4'],
            correctOption: '4',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: 'Nombre del elemento numero 2',
            imgUrl: 'https://static.wixstatic.com/media/e3e597_28f6c5de043a44738b9d3187810e6ac1.png/v1/fill/w_315,h_327,al_c/e3e597_28f6c5de043a44738b9d3187810e6ac1.png',
            options: ['Cuerpo Vetebral', 'Arco posterior', 'Lámina', 'Apófisis artucular'],
            correctOption: 'Arco posterior',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: 'Esta vertebra es de tipo..',
            imgUrl: 'https://cerebriti.b-cdn.net/uploads/f420a32b5718e10dcbc98b675cb3e5be.png',
            options: ['Cervical', 'Lumbar', 'Dorsal'],
            correctOption: 'Cervical',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: 'Esta vertebra es de tipo..',
            imgUrl: 'https://thumbs.dreamstime.com/b/espina-dorsal-v%C3%A9rtebra-en-segundo-lugar-lumbar-82092907.jpg',
            options: ['Cervical', 'Lumbar', 'Dorsal'],
            correctOption: 'Dorsal',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: 'El foramen vertebral está delimitado adelante por',
            imgUrl: '',
            options: ['la cara posterior del cuerpo vertebral', 'las láminas Y base del proceso', 'pedículos y procesos articulares',],
            correctOption: 'la cara posterior del cuerpo vertebral',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: 'Caracterista de vertebras lumbares',
            imgUrl: '',
            options: ['Láminas:son cuadriláteras,casi verticales', 'Láminas: espesas, cuadriláteras, más altas que anchas', 'Láminas: cuadriláteras, más largas que anchas'],
            correctOption: 'Láminas: espesas, cuadriláteras, más altas que anchas',
            type: 'Columna vertebral',
            selectedOption: null
          },
          {
            question: '¿Que transcurre el conducto sacro?',
            imgUrl: '',
            options: ['Arterias y venas', 'las raíces nerviosas de la cola de caballo (raíces de nervios espinales situados debajo de L1)', 'a médula espina'],
            correctOption: 'las raíces nerviosas de la cola de caballo (raíces de nervios espinales situados debajo de L1)',
            type: 'Columna vertebral',
            selectedOption: null
          },

        ]
        break;
      case "2":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "3":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "4":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "5":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "6":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "7":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "8":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "9":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "10":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "11":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "12":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "13":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "14":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "15":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "16":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "17":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "18":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "19":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "20":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "21":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "22":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "23":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "24":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "25":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "26":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "27":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;
      case "28":
        this.questions = [
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
          {
            question: '    ',
            imgUrl: '',
            options: [],
            correctOption: '',
            type: '',
            selectedOption: null
          },
        ]
        break;



    }

  }

  onNextQuiz() {
    this.activeIndex = this.activeIndex + 1;
  }

  onPreviousQuiz() {
    this.activeIndex = this.activeIndex - 1;
  }

  onFinishQuiz() {
    this.questions.forEach(quiz => {
      if (quiz.selectedOption === quiz.correctOption) {
        this.score = this.score + 1;
      }
    });
    this.router.navigate(['/results'], { queryParams: { score: this.score, total: this.questions.length } });
  }

  onSelectedQuizOption(quiz: Question, option: string) {
    quiz.selectedOption = option;
  }
}
