import { UsersService } from './../_services/users.service';
import { TasksService } from '../_services/tasks.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskLineComponent } from './new-task-line/new-task-line.component';
import { slideToRight } from '../_animations/task.animate';
import { Task } from '../_models/task';
import { TaskLine } from '../_models/taskLine';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [
    slideToRight
  ]
})
export class TasksComponent implements OnInit {
  @HostBinding('@slideAnim') state;

  taskLines$ = this.tasksService.tasks$;
  constructor(
    private tasksService: TasksService,
    private usersService: UsersService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.tasksService.getAll().subscribe();
    this.usersService.getAll().subscribe();
  }

  showAddModal() {
    this.dialog.open(NewTaskLineComponent);
  }

  moveTask(task: Task, line: TaskLine) {
    if (task.lineId !== line.id) {
      this.tasksService.moveTask(task, line.id).subscribe();
    }
  }
}
