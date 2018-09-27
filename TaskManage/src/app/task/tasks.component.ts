import { TasksService } from '../_services/tasks.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskLineComponent } from './new-task-line/new-task-line.component';
import { slideToRight } from '../_animations/task.animate';

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
  constructor(private tasksService: TasksService, private dialog: MatDialog) { }

  ngOnInit() {
    this.tasksService.getAll().subscribe();
  }

  showAddModal() {
    this.dialog.open(NewTaskLineComponent);
  }
}
