import { IPhoneme, ICategory } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../services/state.service';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService,
    private router: Router,
  ) {
    this.route.params.subscribe( params => this.catParam = params['id'] );
  }

  catParam: string;
  chosenPhoneme: IPhoneme;
  chosenCategory: ICategory;
  chosenCategoryList: IPhoneme[];
  header: string;

  ngOnInit() {
    const categoryList = this.stateService.getAll();
    this.chosenPhoneme = categoryList.find(phon => {
      return this.catParam.length === 2 ? phon.dupKey === this.catParam
        : phon.label === this.catParam;
    });
    if (!this.chosenPhoneme) {
      this.router.navigateByUrl('/home');
    }
    this.chosenCategory = this.chosenPhoneme['category'];
    this.chosenCategoryList = this.stateService.getCategory(this.chosenCategory['key']);
    console.log(this.chosenCategoryList);
    this.header = this.chosenPhoneme.label;
  }

}
