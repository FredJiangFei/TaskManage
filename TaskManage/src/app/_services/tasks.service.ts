import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskLine } from '../_models/taskLine';
import { NewTaskCommand } from '../_commands/newTask.command';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksSubject = new Subject<TaskLine[]>();
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) { }

  addLine(title: string) {
    return this.http.post<TaskLine>(`${environment.baseUrl}/tasklines`, { title: title})
    .pipe(
      tap(_ => this.getAll().subscribe())
    );
  }

  addTask(task: NewTaskCommand) {
    return this.http.post<TaskLine>(`${environment.baseUrl}/tasks`, task).pipe(
      tap(_ => this.getAll().subscribe())
    );
  }

  getAll() {
    return this.http.get<TaskLine[]>(`${environment.baseUrl}/tasklines`)
    .pipe(
      tap(lines => this.tasksSubject.next(lines))
    );
  }
}
