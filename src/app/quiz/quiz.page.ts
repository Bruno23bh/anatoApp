import { Component, OnInit } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  quizs: {
    question: string;
    imgUrl: string;
    options: string[];
    correctOption: string;
  }[] = [];

  constructor() { }

  ngOnInit() {
    this.quizs = [
      {
        question: '¿que tipo de huesos conforma el craneo?',
        imgUrl: 'https://www.visiblebody.com/hubfs/learn/assets/es/skeletal/2C-Cinco-tipos-de-huesos-ES.jpg',
        options: ['largo', 'plano', 'irregular'],
        correctOption: 'plano',
      }

    ]
  }
  onClick() {

  }
}
