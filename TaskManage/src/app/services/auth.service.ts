import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  LoggedIn() {
    const isLogin = localStorage.getItem('isLogin');
    return !!isLogin;
  }

  login() {
    localStorage.setItem('isLogin', 'true');
  }

  logout() {
    localStorage.removeItem('isLogin');
  }
}
