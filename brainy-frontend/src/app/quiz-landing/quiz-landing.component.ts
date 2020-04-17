import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-landing',
  templateUrl: './quiz-landing.component.html',
  styleUrls: ['./quiz-landing.component.scss']
})
export class QuizLandingComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  onStart() { 
    this.router.navigate(['../quiz/'])
  }
}
