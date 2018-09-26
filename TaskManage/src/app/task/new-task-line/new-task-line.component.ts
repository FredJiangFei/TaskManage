import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task-line',
  templateUrl: './new-task-line.component.html',
  styleUrls: ['./new-task-line.component.css']
})
export class NewTaskLineComponent {
  title: string;

  constructor(
    private dialogRef: MatDialogRef<NewTaskLineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if (data) {
        this.title = data.line.title;
      }
    }

  save() {
   this.dialogRef.close(this.title);
  }
}
