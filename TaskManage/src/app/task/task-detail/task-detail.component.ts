import { User } from './../../_models/user';
import { Observable } from 'rxjs';
import { UsersService } from './../../_services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteSelectedEvent } from '@angular/material';
import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { Task } from '../../_models/task';

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
    private ref: MatDialogRef<TaskDetailComponent>) {
    this.task = data;
    this.userIds = data.userIds;
    this.users$ = usersService.users$;
  }

  remove(userId: number) {
    this.userIds = this.userIds.filter(id => id !== userId);
  }

  addUser(e: MatAutocompleteSelectedEvent) {
    this.usersInput.nativeElement.blur();
    this.usersInput.nativeElement.value = '';
    if (!this.userIds.includes(e.option.value.id)) {
      this.userIds.push(e.option.value.id);
    }
  }
}
