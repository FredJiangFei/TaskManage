import { NgModule } from '@angular/core';
import { ShareModule } from '../_shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { BasicComponent } from './basic.component';
import { ChildComponent } from './life-cycle/child/child.component';
import { ChildViewComponent } from './life-cycle/child-view/child-view.component';
import { ChildContentComponent } from './life-cycle/child-content/child-content.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { HeroControlsComponent } from './component-style/hero-controls.component';
import { HeroDetailsComponent } from './component-style/hero-details/hero-details.component';
import { HeroTeamComponent } from './component-style/hero-team.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DragComponent } from './rxjs/drag/drag.component';
import { CalculateComponent } from './rxjs/calculate/calculate.component';
import { MouseMoveComponent } from './rxjs/mouse-move/mouse-move.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  }
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
    ChildContentComponent,
    ComponentStyleComponent,
    HeroControlsComponent,
    HeroDetailsComponent,
    HeroTeamComponent,
    RxjsComponent,
    DragComponent,
    CalculateComponent,
    MouseMoveComponent
  ]
})
export class BasicModule { }
