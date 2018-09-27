import { Task } from '../../_models/task';
import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DelModalComponent } from '../del-modal/del-modal.component';
import { TasksService } from '../../_services/tasks.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import { taskHoverAnim, taskAddAndRemoveAnim } from '../../_animations/task.animate';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  animations: [
    taskHoverAnim,
    taskAddAndRemoveAnim,
  ]
})
export class TaskComponent {
  @Input() task: Task;
  @HostBinding('@taskHover') cardState = 'out';
  @HostBinding('@taskAddAndRemove') itemAnim;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

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
