import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() logoutClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.router.navigate([`../landing/`]);
  }

}
