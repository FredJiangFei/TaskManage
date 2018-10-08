import { AuthService } from './../../_services/auth.service';
import { NewCommentCommand } from './../../_commands/newComment.command';
import { CommentsService } from './../../_services/comments.service';
import { map, debounceTime, switchMap, tap } from 'rxjs/operators';
import { User } from './../../_models/user';
import { Observable, fromEvent } from 'rxjs';
import { UsersService } from './../../_services/users.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteSelectedEvent } from '@angular/material';
import { Component, Inject, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Task } from '../../_models/task';
import { TasksService } from '../../_services/tasks.service';
import { Comment } from '../../_models/comment';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  users$: Observable<User[]>;
  comments$: Observable<Comment[]>;
  userIds: number[];
  @ViewChild('usersInput') usersInput: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Task,
    private usersService: UsersService,
    private tasksService: TasksService,
    private authService: AuthService,
    private commentsService: CommentsService,
    private ref: MatDialogRef<TaskDetailComponent>) {
  }

  ngOnInit(): void {
    this.task = this.data;
    this.userIds = this.data.userIds;
    this.resetUserList();
    this.comments$ = this.commentsService.comments$;
    this.commentsService.getCommentsByTaskId(this.task.id).subscribe();
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
    this.tasksService.updateUsers(this.task, this.userIds).subscribe();
    this.resetUserList();
  }

  resetUserList() {
    const filterByIds$ = this.usersService.users$.pipe(map(us => us.filter(u => !this.userIds.includes(u.id))));
    this.users$ = filterByIds$;
    fromEvent(this.usersInput.nativeElement, 'keyup')
      .subscribe((e: any) => {
        const v = e.target.value.toLowerCase();
        this.users$ = filterByIds$.pipe(map(us => us.filter(u => u.username.toLowerCase().includes(v))));
      });
  }

  addComment(comment: string) {
    const command: NewCommentCommand = {
      description: comment,
      createdById: this.authService.LoggedUser().id,
      taskId: this.task.id
    };
    this.commentsService.add(command).subscribe();
  }

  deleteComment(comment: Comment) {
    this.commentsService.delete(comment.id).subscribe();
  }

  isMyComment(comment: Comment) {
    return comment.createdBy.id === this.authService.LoggedUser().id;
  }
}
