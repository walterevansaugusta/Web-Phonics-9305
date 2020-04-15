import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson/:id',
    component: LessonComponent,
    canActivate: [AuthGuard],
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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    }, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
