import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { IPhoneme } from '../interfaces/phoneme.interface';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  @Input() phoneme: IPhoneme;

  // stars = [1,2,3,4,5,6,7];
  stars;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    const category = this.phoneme.category.label.replace(/\s/g, '');
    const phonCat = this.userService.userProgress[category];

    let phonStars: number;
    this.phoneme.dupKey ? phonStars = phonCat[this.phoneme.dupKey.slice(1, this.phoneme.dupKey.length)]
      : phonStars = phonCat[this.phoneme.label];
    this.stars = Array(phonStars).fill(0);
  }

}

