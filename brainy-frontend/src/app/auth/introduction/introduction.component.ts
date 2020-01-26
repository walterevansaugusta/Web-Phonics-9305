import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

    @Output() clickedOnGo: EventEmitter<any> = new EventEmitter();

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

    toLogin() {
      this.clickedOnGo.emit();
    }

    private stopTimer() {
      if (this.timer) {
          clearInterval(this.timer);
      }
    }

}
