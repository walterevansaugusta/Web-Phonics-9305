import { StateService } from './../services/state.service';
import { IPhoneme } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import * as words from '../constants/lesson.constant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  phoneme: IPhoneme;
  words = [words.bear, words.candy, words.cardinal, words.chop];
  choices = [];
  private catParam;
  private choicesInd = 0;
  private interval;
  private isDuplicate = false;

  constructor(
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.params.subscribe( params => this.catParam = params['id'] );
   }

  ngOnInit() {
    const categoryList = this.stateService.getAll();
    if (this.catParam[0] === ':') this.isDuplicate = true;
    this.phoneme = categoryList.find(phon => {
      return this.isDuplicate ? phon.dupKey === this.catParam
        : phon.label === this.catParam;
    });

    if (!this.phoneme) {
      this.router.navigateByUrl('/home');
    }

    console.log(this.phoneme);
    for (const w of this.phoneme.words) {
      const wordObj = {
        word: w,
        isClicked: false,
      };
      this.choices.push(wordObj);
    }
  }

  onCardClick(word) {
    for (const w of this.choices) {
      w['isClicked'] = false;
    }
    word['isClicked'] = !word['isClicked'];
  }

  onAudioPlay() {
    const audio = new Audio();
    this.interval = setInterval(() => {
      const currWord = this.choices[this.choicesInd];
      console.log(currWord);
      audio.src = currWord['word']['sound'];
      audio.autoplay = true;
      audio.muted = false;
      audio.load();
      audio.play();
      this.choicesInd++;
      if (this.choicesInd === this.choices.length) clearInterval(this.interval);
    }, 1000);
  }

}
