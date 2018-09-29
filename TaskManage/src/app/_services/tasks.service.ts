import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskLine } from '../_models/taskLine';
import { NewTaskCommand } from '../_commands/newTask.command';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from '../_models/task';
import { EditTaskCommand } from '../_commands/editTask.command';

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

  editLine(id: number, title: string) {
    const params = {
      id: id,
      title: title
    };
    return this.http.put<TaskLine>(`${environment.baseUrl}/tasklines`, params)
      .pipe(
        tap(_ => {
          const currentLine = this.tasksSubject.value.find(x => x.id === id);
          currentLine.title = title;
        })
      );
  }

  deleteLine(id: number) {
    return this.http.delete<TaskLine>(`${environment.baseUrl}/tasklines/${id}`)
      .pipe(
        tap(_ => {
          let lines = this.tasksSubject.value;
          lines = lines.filter(line => line.id !== id);
          this.tasksSubject.next(lines);
        })
      );
  }

  addTask(task: NewTaskCommand) {
    return this.http.post<Task>(`${environment.baseUrl}/tasks`, task).pipe(
      tap(t => {
        const currentLine = this.tasksSubject.value.find(x => x.id === task.lineId);
        if (!currentLine.tasks) {
          currentLine.tasks = [];
        }
        const newTasks = [...currentLine.tasks, t];
        currentLine.tasks = newTasks;
      })
    );
  }

  editTask(task: EditTaskCommand) {
    return this.http.put<Task>(`${environment.baseUrl}/tasks`, task).pipe(
      tap(t => {
        const currentLine = this.tasksSubject.value.find(x => x.id === task.lineId);
        const currentTask = currentLine.tasks.find(x => x.id === task.id);
        currentTask.title = t.title;
        currentTask.description = t.description;
        currentTask.duteDate = t.duteDate;
      })
    );
  }

  deleteTask(lineId: number, id: number) {
    return this.http.delete<Task>(`${environment.baseUrl}/tasks/${id}`).pipe(
      tap(_ => {
        const currentLine = this.tasksSubject.value.find(x => x.id === lineId);
        const newTasks = currentLine.tasks.filter(t => t.id !== id);
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

  toggleComplete(id: number) {
    return this.http.put(`${environment.baseUrl}/tasks/toggle-complete/${id}`, {});
  }

  updateUsers(id: number, userIds: number[]) {
    return this.http.put(`${environment.baseUrl}/tasks/update-users/${id}`, {
      userIds: userIds
    });
  }

  moveTask(task: Task, newLineId: number) {
    return this.http.put(`${environment.baseUrl}/tasks/move`, {
      id: task.id,
      lineId: newLineId
    }).pipe(
      tap(_ => {
        // remove from old
        const oldLine = this.tasksSubject.value.find(x => x.id === task.lineId);
        oldLine.tasks = oldLine.tasks.filter(t => t.id !== task.id);

        // add to new
        const newLine = this.tasksSubject.value.find(x => x.id === newLineId);
        task.lineId = newLineId;
        newLine.tasks = [...newLine.tasks, task];
      })
    );
  }
}
