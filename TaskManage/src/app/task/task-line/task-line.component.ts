import { Component, OnInit, Input } from '@angular/core';
import { TaskLine } from '../../_models/taskLine';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../../_services/tasks.service';
import { NewTaskLineComponent } from '../new-task-line/new-task-line.component';
import { DelModalComponent } from '../del-modal/del-modal.component';
import { Task } from '../../_models/task';

@Component({
  selector: 'app-task-line',
  templateUrl: './task-line.component.html',
  styleUrls: ['./task-line.component.css']
})
export class TaskLineComponent {

  @Input() line: TaskLine;

  constructor(private dialog: MatDialog, private tasksService: TasksService) { }

  showAddTaskModal() {
    this.dialog.open(NewTaskComponent, { data: { lineId: this.line.id }
    });
  }

  showEditModal() {
    this.dialog.open(NewTaskLineComponent, { data: this.line });
  }

  showDeleteModal() {
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.tasksService.deleteLine(this.line.id).subscribe();
      }
    });
  }
}
