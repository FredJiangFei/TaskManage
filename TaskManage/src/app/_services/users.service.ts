import { HttpClient } from '@angular/common/http';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.baseUrl}/users`)
    .pipe(
      tap(users => this.usersSubject.next(users))
    );
  }
}
