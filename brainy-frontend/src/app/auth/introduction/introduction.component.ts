import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

    introWords = ['HELLO', 'HEY', 'HI', 'WELCOME!'];
    currentInd = 0;
    currentWord = '';
    timer = null;

    constructor() { }

    ngOnInit() {
        this.currentWord = this.introWords[this.currentInd];
        this.timer = setInterval(() => {
            this.currentInd++;
            this.currentWord = this.introWords[this.currentInd];
            if (this.currentInd === 4) {
                this.stopTimer();
            }
        }, 1000);
    }

    private stopTimer() {
      if (this.timer) {
          clearInterval(this.timer);
      }
    }

}
