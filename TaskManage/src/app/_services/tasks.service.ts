import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskLine } from '../_models/taskLine';
import { NewTaskCommand } from '../_commands/newTask.command';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../_models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksSubject = new BehaviorSubject<TaskLine[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) { }

  addLine(title: string) {
    return this.http.post<TaskLine>(`${environment.baseUrl}/tasklines`, { title: title })
      .pipe(
        tap(line => {
          const currentValue = this.tasksSubject.value;
          const updatedValue = [...currentValue, line];
          this.tasksSubject.next(updatedValue);
        })
      );
  }

  addTask(task: NewTaskCommand) {
    return this.http.post<Task>(`${environment.baseUrl}/tasks`, task).pipe(
      tap(t => {
        const currentLine = this.tasksSubject.value.find(x => x.id === task.lineId);
        const newTasks = [...currentLine.tasks, t];
        currentLine.tasks = newTasks;
      })
    );
  }

  getAll() {
    return this.http.get<TaskLine[]>(`${environment.baseUrl}/tasklines`)
      .pipe(
        tap(lines => this.tasksSubject.next(lines))
      );
  }
}
