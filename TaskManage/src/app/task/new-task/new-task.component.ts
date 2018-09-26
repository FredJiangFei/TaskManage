import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../../_models/task';
import { TasksService } from '../../_services/tasks.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  task: Task;
  saving: boolean;

  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private tasksService: TasksService) {
      this.task = data;
    }

  save() {
    this.saving = true;
    const save$ = this.task.id ? this.tasksService.editTask(this.task) : this.tasksService.addTask(this.task);
    save$.pipe(finalize(() => this.saving = false)).subscribe(_ => this.dialogRef.close());
  }
}
