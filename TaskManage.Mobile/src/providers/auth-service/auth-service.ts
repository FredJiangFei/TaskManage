import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) {

  }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  login() {
    localStorage.setItem('token', 'test token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
