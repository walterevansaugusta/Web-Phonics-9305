import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserProgress } from '../interfaces/phoneme.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    name: '',
    password: '',
  };

  constructor(
    private http: HttpClient
  ) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  userProgress: IUserProgress;

  // http
  registerUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
  }

  loginUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', user, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  updateUserProgress(progress) {
    console.log(progress);
    return this.http.put(environment.apiBaseUrl + '/update', progress);
  }

  // helper
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    const token = this.getToken();
    if (token) {
      const userPayload = atob(token.split('.')[1]);
      console.log(JSON.parse(userPayload));
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    }
    return false;
  }
}
