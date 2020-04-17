import { Component, OnInit } from '@angular/core';
import * as words from '../constants/lesson.constant';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  choices = [words.bear, words.candy, words.cardinal, words.chop];
  clicked = false; 

  constructor() { }

  ngOnInit() {
  }

}
