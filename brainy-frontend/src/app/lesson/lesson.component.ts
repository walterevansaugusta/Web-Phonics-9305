import { Component, OnInit } from '@angular/core';
import { ConsonantPairs } from '../constants/consonant.constants';

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson = ConsonantPairs[0]; 

  constructor() { }

  ngOnInit() {
  }

}
