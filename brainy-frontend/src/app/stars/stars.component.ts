import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  stars = [1,2,3,4,5,6,7];

  constructor() { }

  ngOnInit() {
  }

}

