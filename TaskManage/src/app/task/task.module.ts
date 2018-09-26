import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskLineComponent } from './task-line/task-line.component';
import { TaskComponent } from './task/task.component';
import { NewTaskLineComponent } from './new-task-line/new-task-line.component';
import { ShareModule } from '../share.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { DelModalComponent } from './del-modal/del-modal.component';

@NgModule({
  imports: [
    ShareModule,
    TaskRoutingModule,
  ],
  declarations: [
    TasksComponent,
    TaskLineComponent,
    TaskComponent,
    NewTaskLineComponent,
    NewTaskComponent,
    DelModalComponent
  ],
  entryComponents: [NewTaskLineComponent, NewTaskComponent, DelModalComponent]
})
export class TaskModule {}
