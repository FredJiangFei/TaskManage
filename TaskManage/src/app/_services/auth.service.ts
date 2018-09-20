import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginCommand } from '../_commands/login.command';
import { RegisterCommand } from '../_commands/register.command';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  LoggedIn() {
    const isLogin = localStorage.getItem('loginUser');
    return !!isLogin;
  }

  login(user: LoginCommand) {
    return this.http.get<User>(`${environment.baseUrl}/users`, {
      params: {
        username: user.username,
        password: user.password
      }
    })
    .pipe(
      tap(response => {
        const loginUser = response[0];
        if (!!loginUser) {
          localStorage.setItem('loginUser', JSON.stringify(loginUser));
        } else {
          throw new Error('Username or password is wrong');
        }
      })
    );
  }

  register(user: RegisterCommand) {
    return this.http.post(`${environment.baseUrl}/users`, user);
  }

  logout() {
    localStorage.removeItem('loginUser');
  }
}
