import { IPhoneme } from './../interfaces/phoneme.interface';
import { Component, OnInit } from '@angular/core';
import { ConsonantPairs } from '../constants/consonant.constants';
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
  header: string;

  ngOnInit() {
    const categoryList = this.stateService.getAll();
    console.log(this.catParam);
    this.chosenPhoneme = categoryList.find(phon => {
      return phon.label === this.catParam;
    });
    if (!this.chosenPhoneme) {
      this.router.navigate(['home']);
    }
    this.chosenPhoneme = this.stateService.phonemeState;
    this.header = this.chosenPhoneme.label;
  }

}
