import { Consonants } from './../constants/consonant.constants';
import { StateService } from './../services/state.service';
import { IPhoneme, ICategory } from './../interfaces/phoneme.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MockVowels, MockConsonants } from '../constants/phoneme.constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
  ) { }

  chosenCategory: ICategory;
  categoryImages: IPhoneme[];
  header: string;
  iterations = [1,2,3,4,5,6,7,8,9];

  ngOnInit() {
    this.chosenCategory = this.stateService.categoryState;
    this.stateService.categoryState = undefined;
    this.header = this.chosenCategory.label;
    this.categoryImages = this.stateService.getCategory(this.chosenCategory.key);
    console.log(this.categoryImages);
    // this.route.data
    //   .subscribe(d => {
    //     this.header = d.header;
    //     console.log(this.header);
    //     this.header === 'Vowels'
    //       ? this.categoryImages = MockVowels
    //       : this.categoryImages = MockConsonants;
    //   });
  }

}
