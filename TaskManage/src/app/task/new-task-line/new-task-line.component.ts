import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-line',
  templateUrl: './new-task-line.component.html',
  styleUrls: ['./new-task-line.component.css']
})
export class NewTaskLineComponent {

  constructor(private dialogRef: MatDialogRef<NewTaskLineComponent>) { }

  save(title: string) {
   this.dialogRef.close(title);
  }
}
