import { User } from './../../services/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IImage } from 'src/app/interfaces/image.interface';

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
  name: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(v => {
        this.showRegister = v["isRegister"];
    });
    for (let i = 1; i <= 20; i++) {
      const img: IImage = {
        url: `../../../assets/images/passcode/${i}.png`,
        id: i,
      };
      this.imgs.push(img);
    }
  }

  onCancel() {
    this.userService.selectedUser = {
      name: '',
      password: '',
    };
    this.router.navigate([`../landing/`]);
  }

  onLogin() {
    if (!this.name) {
      alert('Please enter your name');
    } else if (this.chosenImgs.length < 4) {
      alert('Please select 4 animal pictures');
    } else {
      let userImages = '';
      this.chosenImgs.forEach(img => {
        userImages += img['id'];
      });
      const user: User = {
        name: this.name,
        password: userImages,
      };
      if (this.showRegister) {
        this.userService.registerUser(user)
        .subscribe(
          res => {
            this.router.navigate([`../home/`]);
            this.homeClick.emit();
          },
          err => {},
        );
      } else {
        this.userService.loginUser(user)
          .subscribe(
            res => {
              this.userService.token = res['token'];
              this.userService.getUser(res)
              this.router.navigate([`../home/`]);
              this.homeClick.emit();
            },
            err => {},
          );
      }
    }
  }

  onImgClick(img: IImage) {
    console.log(img);
    this.chosenImgs.length === 4 ? alert('You may only choose 4 animal pictures')
      : this.chosenImgs.push(img);
  }
}
