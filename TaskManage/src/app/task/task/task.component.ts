import { Task } from './../../_models/task';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DelModalComponent } from '../del-modal/del-modal.component';
import { TasksService } from '../../_services/tasks.service';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;

  constructor(private dialog: MatDialog, private tasksService: TasksService) { }

  showEditModal() {
   this.dialog.open(NewTaskComponent, { data: Object.assign({}, this.task) });
  }

  toggleComplete() {
      this.tasksService.toggleComplete(this.task.id).subscribe();
  }

  showDeleteModal() {
    const dialog = this.dialog.open(DelModalComponent);
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.tasksService.deleteTask(this.task.lineId, this.task.id).subscribe();
      }
    });
  }
}
