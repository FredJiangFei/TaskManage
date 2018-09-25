import { TasksComponent } from './tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path: '', component: TasksComponent}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule {}
