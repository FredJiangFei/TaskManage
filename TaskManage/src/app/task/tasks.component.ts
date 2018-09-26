import { TasksService } from '../_services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskLineComponent } from './new-task-line/new-task-line.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskLines$ = this.tasksService.tasks$;
  constructor(private tasksService: TasksService, private dialog: MatDialog) { }

  ngOnInit() {
    this.tasksService.getAll().subscribe();
  }

  showAddModal() {
    this.dialog.open(NewTaskLineComponent);
  }
}
