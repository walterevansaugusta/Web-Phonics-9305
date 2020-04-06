import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Output() loginClick: EventEmitter<any> = new EventEmitter();
  @Output() registerClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onRegisterClick() {
    this.router.navigate([`../register/`]);
  }

  onLoginClick() {
    this.router.navigate([`../login/`]);
  }
}
