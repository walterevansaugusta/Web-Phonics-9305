import { IPhoneme } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import * as w from '../constants/lesson.constant';

@Component({
  selector: 'quiz-landing',
  templateUrl: './quiz-landing.component.html',
  styleUrls: ['./quiz-landing.component.scss']
})
export class QuizLandingComponent implements OnInit {

  constructor(
    private router: Router,
    private stateService: StateService,
    ) { }

  randomPhoneme: IPhoneme;
  quizChoices = [];
  correctWord: IPhoneme;

  ngOnInit() {
    const allPhonemes = this.stateService.getAll();
    const randomIndex = Math.floor(Math.random() * allPhonemes.length);
    this.randomPhoneme = allPhonemes[randomIndex];

    const phonWords = this.randomPhoneme.words;
    const wordIndex = Math.floor(Math.random() * phonWords.length);
    this.correctWord = phonWords[wordIndex];

  }

  onStart() {
    this.randomPhoneme.dupKey ? this.router.navigate([`../quiz/${this.randomPhoneme.dupKey}`])
      : this.router.navigate([`../quiz/${this.randomPhoneme.label}`]);
  }
}
