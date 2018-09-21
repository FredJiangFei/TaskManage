import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { tap, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginCommand } from '../_commands/login.command';
import { RegisterCommand } from '../_commands/register.command';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  LoggedIn() {
    const user = localStorage.getItem('loginUser');
    return !!user;
  }

  LoggedUser(): User {
    const user = localStorage.getItem('loginUser');
    return JSON.parse(user);
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
    return this.http.get<User>(`${environment.baseUrl}/users`, {
      params: {
        username: user.username
      }
    })
    .pipe(
      tap(response => {
        const loginUser = response[0];
        if (!!loginUser) {
          throw new Error('User exist');
        }
      }),
      switchMap(_ => this.http.post(`${environment.baseUrl}/users`, user))
    );
  }

  logout() {
    localStorage.removeItem('loginUser');
  }
}
