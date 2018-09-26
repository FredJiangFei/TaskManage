import { Component, OnInit, Input } from '@angular/core';
import { TaskLine } from '../../_models/taskLine';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../../_services/tasks.service';

@Component({
  selector: 'app-task-line',
  templateUrl: './task-line.component.html',
  styleUrls: ['./task-line.component.css']
})
export class TaskLineComponent {

  @Input() line: TaskLine;

  constructor(private dialog: MatDialog, private tasksService: TasksService) { }

  showAddTaskModal() {
    const dialog = this.dialog.open(NewTaskComponent);

    dialog.afterClosed().subscribe(result => {
      if (result) {
        result.lineId = this.line.id;
        this.tasksService.addTask(result).subscribe();
      }
    });
  }
}
