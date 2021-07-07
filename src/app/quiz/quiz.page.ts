import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { ToastController } from '@ionic/angular';
import { Quiz } from '../interfaces/quiz.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  quizs: Quiz[] = [];
  activeIndex = 0;
  score = 0;

  constructor(
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.quizs = [
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
  }

  onNextQuiz() {
    this.activeIndex = this.activeIndex + 1;
  }

  onPreviousQuiz() {
    this.activeIndex = this.activeIndex - 1;
  }

  onFinishQuiz() {
    this.quizs.forEach(quiz => {
      if (quiz.selectedOption === quiz.correctOption) {
        this.score = this.score + 1;
      }
    });
    this.presentResults();
  }

  onSelectedQuizOption(quiz: Quiz, option: string) {
    quiz.selectedOption = option;
  }

  async presentResults() {
    const toast = await this.toastController.create({
      message: `Felicitationes, terminaste el quiz. Tu resultado es ${this.score}/${this.quizs.length}`,
      duration: 5000,
      color: 'success'
    });
    toast.present();
  }
}
