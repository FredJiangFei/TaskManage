import { map } from 'rxjs/operators';
import { User } from './../../_models/user';
import { Observable } from 'rxjs';
import { UsersService } from './../../_services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteSelectedEvent } from '@angular/material';
import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../../_models/task';
import { TasksService } from '../../_services/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  task: Task;
  users$: Observable<User[]>;
  userIds: number[];
  @ViewChild('usersInput') usersInput: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Task,
    private usersService: UsersService,
    private tasksService: TasksService,
    private ref: MatDialogRef<TaskDetailComponent>) {
    this.task = data;
    this.userIds = data.userIds;
    this.users$ = usersService.users$;
  }

  removeUser(userId: number) {
    this.userIds = this.userIds.filter(id => id !== userId);
    this.saveUsers();
  }

  addUser(e: MatAutocompleteSelectedEvent) {
    this.usersInput.nativeElement.blur();
    this.usersInput.nativeElement.value = '';
    if (!this.userIds.includes(e.option.value.id)) {
      this.userIds = [...this.userIds, e.option.value.id];
    }
    this.saveUsers();
  }

  saveUsers() {
    this.tasksService.updateUsers(this.task.id, this.userIds).subscribe();
  }
}
