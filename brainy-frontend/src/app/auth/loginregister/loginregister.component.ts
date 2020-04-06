import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.scss']
})
export class LoginregisterComponent implements OnInit {

  @Output() cancelClick: EventEmitter<any> = new EventEmitter();
  @Output() homeClick: EventEmitter<any> = new EventEmitter();

  imgs = [];
  chosenImgs = [];
  showRegister: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(v => {
        this.showRegister = v["isRegister"];
    });
    for (let i = 1; i <= 20; i++) {
      this.imgs.push(`../../../assets/images/passcode/${i}.png`);
    }
  }

  onCancel() {
    this.router.navigate([`../landing/`]);
  }

  onHome() {
    this.router.navigate([`../home/`]);
    this.homeClick.emit();
  }

  onImgClick(img: string) {
    this.chosenImgs.push(img);
  }
}
