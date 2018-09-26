import { Component, OnInit, Input } from '@angular/core';
import { TaskLine } from '../../_models/taskLine';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../../_services/tasks.service';
import { NewTaskLineComponent } from '../new-task-line/new-task-line.component';
import { DelModalComponent } from '../del-modal/del-modal.component';

@Component({
  selector: 'app-task-line',
  templateUrl: './task-line.component.html',
  styleUrls: ['./task-line.component.css']
})
export class TaskLineComponent {

  @Input() line: TaskLine;

  constructor(private dialog: MatDialog, private tasksService: TasksService) { }

  showAddTaskModal() {
    const dialog = this.dialog.open(NewTaskComponent, {
      data: { }
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        result.lineId = this.line.id;
        this.tasksService.addTask(result).subscribe();
      }
    });
  }

  showEditModal() {
    const dialog = this.dialog.open(NewTaskLineComponent, {
      data: this.line
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.tasksService.editLine(this.line.id, result).subscribe();
      }
    });
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
