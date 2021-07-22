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
            question: '¿que tipo de huesos conforma el craneo?',
            imgUrl: 'https://www.visiblebody.com/hubfs/learn/assets/es/skeletal/2C-Cinco-tipos-de-huesos-ES.jpg',
            options: ['largo', 'plano', 'irregular'],
            correctOption: 'plano',
            type: 'craneo',
            selectedOption: null
          },
          {
            question: 'pregunta 2',
            imgUrl: 'https://www.visiblebody.com/hubfs/learn/assets/es/skeletal/2C-Cinco-tipos-de-huesos-ES.jpg',
            options: ['largo', 'plano', 'irregular'],
            correctOption: 'irregular',
            type: 'craneo',
            selectedOption: null
          },
          {
            question: 'pregunta 3',
            imgUrl: 'https://www.visiblebody.com/hubfs/learn/assets/es/skeletal/2C-Cinco-tipos-de-huesos-ES.jpg',
            options: ['largo', 'plano', 'irregular'],
            correctOption: 'largo',
            type: 'craneo',
            selectedOption: null
          }
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
