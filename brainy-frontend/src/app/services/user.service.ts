import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    name: '',
    password: '',
  };

  token: string;

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }

  loginUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', user);
  }

  getUser() {
    return this.http.get(environment.apiBaseUrl + '/userProfile', this.token);
  }
}
