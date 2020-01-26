import { Component, OnInit } from '@angular/core';
// import { IncomingMessage } from 'http';

@Component({
  selector: 'loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss']
})
export class LoginregisterComponent implements OnInit {

  imgs = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.imgs.push('../../../assets/images/lion_icon.jpg');
    }
  }

}
