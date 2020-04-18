import { StateService } from './../services/state.service';
import { IPhoneme } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import * as w from '../constants/lesson.constant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  phoneme: IPhoneme;
  choices = [];
  quizChoices = [];
  correctWord: IPhoneme;
  private catParam;
  private choicesInd = 0;
  private interval;
  private isDuplicate = false;
  private allPhonemes: IPhoneme[];

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

    this.allPhonemes = this.stateService.getAll();
    this.correctChoice();
    this.findRandomChoices();
    this.shuffleChoices();
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

  private generateRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * this.allPhonemes.length);
    this.phoneme = this.allPhonemes[randomIndex];

    const phonWords = this.phoneme.words;
    const wordIndex = Math.floor(Math.random() * phonWords.length);
    this.correctWord = phonWords[wordIndex];

    this.findRandomChoices();
    this.shuffleChoices();
    console.log(this.quizChoices);
    console.log(this.phoneme);
  }

  private correctChoice() {
    const phonWords = this.phoneme.words;
    const wordIndex = Math.floor(Math.random() * phonWords.length);
    this.correctWord = phonWords[wordIndex];
  }

  private shuffleChoices() {
    for (let i = this.quizChoices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.quizChoices[i];
      this.quizChoices[i] = this.quizChoices[j];
      this.quizChoices[j] = temp;
    }
  }

  private findRandomChoices() {
    while (true) {
      const randInd = Math.floor(Math.random() * (Object.keys(w)).length);
      const randKey = Object.keys(w)[randInd];

      if (!randKey.includes(this.phoneme.label)) {
        const randChoice = {
          word: w[randKey],
          isClicked: false,
        };
        this.quizChoices.push(randChoice);
      }
      if (this.quizChoices.length === 2) {
        break;
      }
    }
    const correct = {
      word: this.correctWord,
      isClicked: false,
    };
    this.quizChoices.push(correct);
  }
}
