import { TasksService } from './../_services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.loadTaskLines();
  }

  loadTaskLines() {
    this.tasksService.getAll().subscribe(console.log);
  }
}
