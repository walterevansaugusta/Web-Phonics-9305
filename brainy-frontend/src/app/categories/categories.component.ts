import { Categories } from './../constants/category.constants';
import { StateService } from './../services/state.service';
import { IPhoneme, ICategory } from './../interfaces/phoneme.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private router: Router,
  ) {
    this.route.params.subscribe( params => this.catParam = params['id'] );
  }

  catParam: string;
  chosenCategory: ICategory;
  categoryImages: IPhoneme[];
  header: string;

  ngOnInit() {
    if (this.catParam === 'all') {
      this.chosenCategory = {
        label: 'All',
        key: 'all',
        img: '',
      };
    } else {
      this.chosenCategory = Categories.find(category => {
        return category['key'] === this.catParam.toLowerCase();
      });
    }
    if (!this.chosenCategory) {
      this.router.navigate(['home']);
    }
    this.header = this.chosenCategory.label;
    this.categoryImages = this.stateService.getCategory(this.chosenCategory.key);
  }

  onCardClick(card: IPhoneme) {
    this.router.navigate(['lesson', card.label, this.categoryImages]);
  }
}
