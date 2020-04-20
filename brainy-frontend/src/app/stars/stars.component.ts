import { UserService } from './../services/user.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { IPhoneme } from '../interfaces/phoneme.interface';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() phoneme: IPhoneme;
  @Input() quizCompleted: boolean;
  @Input() starsWon: number;
  @Output() starCount = new EventEmitter();

  stars = [];
  category;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(res => {
        this.userService.userProgress = res['user']['progress'];
        this.category = this.phoneme.category.label.replace(/\s/g, '');
        const phonCat = this.userService.userProgress[this.category];

        let phonStars: number;
        this.phoneme.dupKey ? phonStars = phonCat[this.phoneme.dupKey.slice(1, this.phoneme.dupKey.length)]
          : phonStars = phonCat[this.phoneme.label];
        this.stars = Array(phonStars).fill(0);
        console.log(this.stars.length);
        this.starCount.emit(this.stars.length);
      });
  }

}

