import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskLineComponent } from './task-line/task-line.component';
import { TaskComponent } from './task/task.component';

import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTabsModule,
  MatBadgeModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
  ],
  declarations: [TasksComponent, TaskLineComponent, TaskComponent],
  entryComponents: []
})
export class TaskModule {}
