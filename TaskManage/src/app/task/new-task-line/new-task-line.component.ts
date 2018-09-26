import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskLine } from '../../_models/taskLine';
import { TasksService } from '../../_services/tasks.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-task-line',
  templateUrl: './new-task-line.component.html',
  styleUrls: ['./new-task-line.component.css']
})
export class NewTaskLineComponent {
  title: string;
  saving: boolean;

  constructor(
    private dialogRef: MatDialogRef<NewTaskLineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskLine,
    private tasksService: TasksService) {
    if (data) {
      this.title = data.title;
    }
  }

  save() {
    this.saving = true;
    const save$ = this.data ? this.tasksService.editLine(this.data.id, this.title) : this.tasksService.addLine(this.title);
    save$.pipe(finalize(() => this.saving = false)).subscribe(_ => this.dialogRef.close());
  }
}
