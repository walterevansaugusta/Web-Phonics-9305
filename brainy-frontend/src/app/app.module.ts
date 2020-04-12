import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { LandingComponent } from './auth/landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './categories/card/card.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: LoginregisterComponent,
    data: { isRegister: true }
  },
  {
    path: 'login',
    component: LoginregisterComponent,
    data: { isRegister: false }
  },
  {
    path: 'category/:id',
    component: CategoriesComponent,
  },
  {
    path: 'lesson/:id',
    component: LessonComponent,
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginregisterComponent,
    LandingComponent,
    HomeComponent,
    CategoriesComponent,
    NavbarComponent,
    CardComponent,
    LessonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
