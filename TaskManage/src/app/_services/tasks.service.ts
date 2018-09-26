import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskLine } from '../_models/taskLine';
import { NewTaskCommand } from '../_commands/newTask.command';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  addLine(title: string) {
    return this.http.post<TaskLine>(`${environment.baseUrl}/tasklines`, { title: title});
  }

  addTask(task: NewTaskCommand) {
    return this.http.post<TaskLine>(`${environment.baseUrl}/tasks`, task);
  }

  getAll() {
    return this.http.get<TaskLine[]>(`${environment.baseUrl}/tasklines`);
  }
}
