import { UserService } from './../services/user.service';
import { StateService } from './../services/state.service';
import { IPhoneme } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as w from '../constants/lesson.constant';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  phoneme: IPhoneme;
  quizChoices = [];
  correctWord: IPhoneme;
  starsWon = 2;
  quizCompleted = false;
  mySubscription;
  starCount;
  private catParam;
  private choicesInd = 0;
  private interval;
  private isDuplicate = false;
  private allPhonemes: IPhoneme[];
  private incorrect = 0;

  constructor(
    private userService: UserService,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.params.subscribe( params => this.catParam = params['id'] );
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
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

    this.allPhonemes = this.stateService.getAll();
    this.correctChoice();
    this.findRandomChoices();
    this.shuffleChoices();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  onCardClick(word) {
    if (word['word'] !== this.correctWord) {
      word['isClicked'] = true;
      this.incorrect++;
    } else {
      this.quizChoices.forEach((choice) => {
        choice['isClicked'] = true;
      });
      this.starsWon -= this.incorrect;
      this.quizCompleted = true;
      this.completeQuiz();
      const randomIndex = Math.floor(Math.random() * this.allPhonemes.length);
      const nextPhoneme = this.allPhonemes[randomIndex];
      nextPhoneme.dupKey ? this.router.navigate([`../quiz/${nextPhoneme.dupKey}`])
        : this.router.navigate([`../quiz/${nextPhoneme.label}`]);
    }
  }

  onAudioPlay() {
    const audio = new Audio();
    this.interval = setInterval(() => {
      const currWord = this.quizChoices[this.choicesInd];
      this.quizChoices.forEach((word) => {
        word['isPlaying'] = false;
      });
      currWord['isPlaying'] = true;
      console.log(currWord);
      audio.src = currWord['word']['sound'];
      audio.load();
      audio.play();
      this.choicesInd++;
      if (this.choicesInd === this.quizChoices.length) clearInterval(this.interval);
    }, 2000);
    this.choicesInd = 0;
  }

  onStarCount(count) {
    this.starCount = count;
  }

  private completeQuiz() {
    let currStars = this.starCount;
    currStars += this.starsWon;
    if (currStars > 12) currStars = 12;

    const category = this.phoneme.category.label.replace(/\s/g, '');
    let constant;
    this.phoneme.dupKey ? constant = this.phoneme.dupKey.slice(1, this.phoneme.dupKey.length)
      : constant = this.phoneme.label;
    const payload = {
      category,
      constant,
      stars: currStars,
    };
    console.log(payload);
    this.userService.updateUserProgress(payload)
      .subscribe();
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

      if (!randKey.includes(this.phoneme.label) && !this.quizChoices.includes(w[randKey])) {
        this.quizChoices.push(w[randKey]);
      }
      if (this.quizChoices.length === 2) {
        break;
      }
    }
    this.quizChoices.push(this.correctWord);
    for (let i = 0; i < this.quizChoices.length; i++) {
      const choice = {
          word: this.quizChoices[i],
          isClicked: false,
          isPlaying: false,
      };
      this.quizChoices[i] = choice;
    }
  }
}
