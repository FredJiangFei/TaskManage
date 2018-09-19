import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  LoggedIn() {
    const isLogin = localStorage.getItem('loginUser');
    return !!isLogin;
  }

  login(user: User) {
    return this.http.get<User>(`${environment.baseUrl}/users`, {
      params: {
        username: user.username,
        password: user.password
      }
    }).pipe(
      tap(response => {
        const loginUser = response[0];
        if (!!loginUser) {
          localStorage.setItem('loginUser', JSON.stringify(loginUser));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('loginUser');
  }
}
