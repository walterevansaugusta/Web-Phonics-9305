import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './auth/introduction/introduction.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { LandingComponent } from './auth/landing/landing.component'; 

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    LoginregisterComponent, 
    LandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
