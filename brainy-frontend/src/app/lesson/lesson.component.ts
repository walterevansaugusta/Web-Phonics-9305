import { Component, OnInit } from '@angular/core';
import { a } from '../constants/lesson.constant'; 

@Component({
  selector: 'lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson = a; 

  constructor() { }

  ngOnInit() {
  }

}
