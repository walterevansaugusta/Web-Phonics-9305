import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss']
})
export class LoginregisterComponent implements OnInit {

  @Input() showRegister: boolean;
  @Input() showLogin: boolean;
  @Output() cancelClick: EventEmitter<any> = new EventEmitter();

  imgs = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 20; i++) {
      this.imgs.push(`../../../assets/images/passcode/${i}.png`);
    }
  }

  onCancel() {
    this.cancelClick.emit();
  }
}
