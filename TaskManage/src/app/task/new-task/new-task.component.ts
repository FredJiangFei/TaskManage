import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  constructor(private dialogRef: MatDialogRef<NewTaskComponent>) { }

  save(value: any) {
    this.dialogRef.close(value);
  }
}
