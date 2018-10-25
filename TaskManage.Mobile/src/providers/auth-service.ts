import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { User } from '../_models/user';
import { LoginCommand } from '../_commands/login.command';
import { RegisterCommand } from '../_commands/register.command';

@Injectable()
export class AuthService {
  // jwtService = new JwtHelperService();
  baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return token; //!this.jwtService.isTokenExpired(token);
  }

  LoggedUser(): User {
    const user = localStorage.getItem('loginUser');
    return JSON.parse(user);
  }

  login(user: LoginCommand) {
    return this.http.post<User>(`${this.baseUrl}/users/login`, user)
    .pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('loginUser', JSON.stringify(response.user));
      })
    );
  }

  register(user: RegisterCommand) {
    return this.http.post(`${this.baseUrl}/users/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loginUser');
  }
}
