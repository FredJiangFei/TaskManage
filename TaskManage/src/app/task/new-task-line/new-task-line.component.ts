import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskLine } from '../../_models/taskLine';

@Component({
  selector: 'app-new-task-line',
  templateUrl: './new-task-line.component.html',
  styleUrls: ['./new-task-line.component.css']
})
export class NewTaskLineComponent {
  title: string;

  constructor(
    private dialogRef: MatDialogRef<NewTaskLineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskLine) {
      if (data) {
        this.title = data.title;
      }
    }

  save() {
   this.dialogRef.close(this.title);
  }
}
