import { TasksService } from './../_services/tasks.service';
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
    this.loadTaskLines();
  }

  loadTaskLines() {
    this.tasksService.getAll().subscribe();
  }

  openAddTaskLineDialog() {
    const dialogRef = this.dialog.open(NewTaskLineComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasksService.addLine(result).subscribe();
      }
    });
  }
}
