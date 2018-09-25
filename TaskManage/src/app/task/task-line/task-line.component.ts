import { Component, OnInit, Input } from '@angular/core';
import { TaskLine } from '../../_models/taskLine';

@Component({
  selector: 'app-task-line',
  templateUrl: './task-line.component.html',
  styleUrls: ['./task-line.component.css']
})
export class TaskLineComponent implements OnInit {

  @Input()
  line: TaskLine;

  constructor() { }

  ngOnInit() {
  }
}
