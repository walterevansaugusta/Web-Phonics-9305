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
        const charId = String.fromCharCode(96 + img['id']);
        userImages += charId;
      });
      const user: User = {
        name: this.name,
        password: userImages,
      };
      if (this.showRegister) {
        this.userService.registerUser(user)
        .subscribe(
          res => {
            this.userLogin(user);
          },
          err => {},
        );
      } else {
        this.userLogin(user);
      }
    }
  }

  onImgClick(img: IImage) {
    if (this.chosenImgs.length === 4) {
      alert('You may only choose 4 animal pictures');
    } else {
      let isAdded = false;
      for (let i = 0; i < this.chosenImgs.length; i++) {
        if (!this.chosenImgs[i]) {
          this.chosenImgs.splice(i, 1, img);
          isAdded = true;
          console.log(this.chosenImgs);
          break;
        }
      }
      if (!isAdded) this.chosenImgs.push(img);
    }
  }

  onChosenClick(chosen: IImage) {
    const index = this.chosenImgs.indexOf(chosen);
    if (index === this.chosenImgs.length - 1) {
      this.chosenImgs.length--;
    }
    delete this.chosenImgs[index];
    console.log(this.chosenImgs);
  }

  private userLogin(user: User) {
    this.userService.loginUser(user)
      .subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.router.navigate([`../home/`]);
          this.homeClick.emit();
        },
        err => {
          alert('You may only choose 4 animal pictures');
        }
      );
  }
}
