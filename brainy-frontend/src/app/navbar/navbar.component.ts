import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  // url_name = (this.router['url'] != '/quiz-landing'); 
  url_name = (this.router['url'] == '/home' || this.router['url'] == '/user');
  userName: string;

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          this.userName = res['user']['name']
          this.userService.userProgress = res['user']['progress'];
        },
        err => {}
      );
  }

  onHome() {
    this.router.navigate([`../home/`]);
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate([`../landing/`]);
  }

  onUser() {
    this.router.navigate(['../user/'])
  }

  onTakeQuiz() { 
    this.router.navigate(['../quiz-landing/'])
  }
}
