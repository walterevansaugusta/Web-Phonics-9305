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
  lessonIndex: number;
  header: string;
  isDuplicate = false;

  ngOnInit() {
    const categoryList = this.stateService.getAll();
    if (this.catParam[0] === ':') this.isDuplicate = true;
    this.chosenPhoneme = categoryList.find(phon => {
      return this.isDuplicate ? phon.dupKey === this.catParam
        : phon.label === this.catParam;
    });

    if (!this.chosenPhoneme) {
      this.router.navigateByUrl('/home');
    }
    this.chosenCategory = this.chosenPhoneme['category'];
    this.chosenCategoryList = this.stateService.getCategory(this.chosenCategory['key']);
    this.lessonIndex = this.chosenCategoryList.indexOf(this.chosenPhoneme);
    console.log(this.lessonIndex);
    this.header = this.chosenPhoneme.label;
  }
<<<<<<< HEAD

  onLeftArrow() {
    this.lessonIndex--;
    this.chosenPhoneme = this.chosenCategoryList[this.lessonIndex];
  }

  onRightArrow() {
    this.lessonIndex++;
    this.chosenPhoneme = this.chosenCategoryList[this.lessonIndex];
  }

=======
  
>>>>>>> master
}
