import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  userName: string; 

  ngOnInit() {
    this.userService.getUserProfile()
      .subscribe(
        res => {
          this.userName = res['user']['name']
        },
        err => {}
      );
  }

}
