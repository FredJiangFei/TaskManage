import { NgModule } from '@angular/core';
import { ShareModule } from '../_shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { BasicComponent } from './basic.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { ChildViewComponent } from './life-cycle/child-view/child-view.component';
import { ChildContentComponent } from './life-cycle/child-content/child-content.component';

const routes: Routes = [
  // { path: '', redirectTo: 'lifeCycle' },
  {
    path: '',
    component: BasicComponent,
    // children: [
    //   { path: 'lifeCycle', component: LifeCycleComponent }
    // ]
  },
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LifeCycleComponent,
    BasicComponent,
    ChildComponent,
    ChildViewComponent,
    ChildContentComponent
  ]
})
export class BasicModule { }
