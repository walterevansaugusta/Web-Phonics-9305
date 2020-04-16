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

  userName: string;

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          this.userName = res['user']['name']
          this.userService.userProgress = res['user']['progress'];

          // Temporary to test new API
          const update = {
            category: "VowelPairs",
            constant: "ai",
            stars: 12
          };
          this.userService.updateUserProgress(update)
            .subscribe(
              res => {},
              err => {}
            );
          // End of temporary block
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
}
