import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { IUserProgress } from '../interfaces/phoneme.interface';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  userName: string;
  userProgress: IUserProgress;

  vowelPairsProgress: number[];
  sumVowelPairs: number;
  readonly totalVowelPairs = 96;
  percentVowelPairs: number;

  vowelsProgress: number[];
  sumVowels: number;
  readonly totalVowels = 204;
  percentVowels: number;

  consonantPairsProgress: number[];
  sumConsonantPairs: number;
  readonly totalConsonantPairs = 60;
  percentConsonantPairs: number;

  consonantBlendsProgress: number[];
  sumConsonantBlends: number;
  readonly totalConsonantBlends = 228;
  percentConsonantBlends: number;

  vowelConsonantBlendsProgress: number[];
  sumVowelConsonantBlends: number;
  readonly totalVowelConsonantBlends = 24;
  percentVowelConsonantBlends: number;

  consonantsProgress: number[];
  sumConsonants: number;
  readonly totalConsonants = 276;
  percentConsonants: number;

  totalSum: number;
  readonly grandTotal = 888;
  totalPercent: number;

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          this.userName = res['user']['name'];
          this.userProgress = res['user']['progress'];

          this.vowelPairsProgress = Object.values(this.userProgress['VowelPairs']);
          this.sumVowelPairs = this.vowelPairsProgress.reduce((a, b) => a + b, 0);

          this.vowelsProgress = Object.values(this.userProgress['Vowels']);
          this.sumVowels = this.vowelsProgress.reduce((a, b) => a + b, 0);

          this.consonantPairsProgress = Object.values(this.userProgress['ConsonantPairs']);
          this.sumConsonantPairs = this.consonantPairsProgress.reduce((a, b) => a + b, 0);

          this.consonantBlendsProgress = Object.values(this.userProgress['ConsonantBlends']);
          this.sumConsonantBlends = this.consonantBlendsProgress.reduce((a, b) => a + b, 0);

          this.vowelConsonantBlendsProgress = Object.values(this.userProgress['VowelConsonantBlends']);
          this.sumVowelConsonantBlends = this.vowelConsonantBlendsProgress.reduce((a, b) => a + b, 0);

          this.consonantsProgress = Object.values(this.userProgress['Consonants']);
          this.sumConsonants = this.consonantsProgress.reduce((a, b) => a + b, 0);

          this.totalSum = this.sumVowelPairs + this.sumVowels + this.sumConsonantPairs +
            this.sumConsonantBlends + this.sumVowelConsonantBlends + this.sumConsonants;

          this.totalPercent = Math.round((this.totalSum / this.grandTotal) * 100);
          
          this.percentVowelPairs = Math.round((this.sumVowelPairs / this.totalVowelPairs) * 100);
          this.percentVowels = Math.round((this.sumVowels / this.totalVowels) * 100);
          this.percentConsonantPairs = Math.round((this.sumConsonantPairs / this.totalConsonantPairs) * 100);
          this.percentConsonantBlends = Math.round((this.sumConsonantBlends / this.totalConsonantBlends) * 100);
          this.percentVowelConsonantBlends = Math.round((this.sumVowelConsonantBlends / this.totalVowelConsonantBlends) * 100);
          this.percentConsonants = Math.round((this.sumConsonants / this.totalConsonants) * 100);



        },
        err => {}
      );

  }

}
