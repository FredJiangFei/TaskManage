import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskLine } from '../_models/taskLine';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getAll () {
    return this.http.get<TaskLine[]>(`${environment.baseUrl}/tasklines`);
  }
}
