import { Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit, OnChanges {

    introWords = ['HELLO', 'HEY', 'HI', 'WELCOME!'];
    currentInd = 0;
    currentWord = "";

    constructor() { }

    ngOnInit() {
        this.currentWord = this.introWords[this.currentInd];
    }

//    ngOnChanges() {
 //       this.currentWord = this.introWords[this.currentInd];
 //   }

}
