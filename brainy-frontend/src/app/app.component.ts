import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brainy-frontend';
  showIntro = true;
  showLanding = false;
  showRegister = false;
  showLogin = false;
  showHome = false;

  onClickedGo() {
    this.showLanding = true;
    this.showIntro = false;
  }

  onRegister() {
    this.showLogin = false;
    this.showRegister = true;
    this.showLanding = false;
  }

  onLogin() {
    this.showRegister = false;
    this.showLogin = true;
    this.showLanding = false;
  }

  onLogout() {
    this.showLanding = true;
    this.showRegister = false;
    this.showLogin = false;
    this.showHome = false;
  }

  onCancel() {
    this.showLogin = false;
    this.showRegister = false;
    this.showLanding = true;
  }

  onHome() {
    this.showLanding = false;
    this.showRegister = false;
    this.showLogin = false;
    this.showHome = true;
  }
}
