import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [TaskRoutingModule],
  declarations: [TasksComponent],
  entryComponents: []
})
export class TaskModule {}
