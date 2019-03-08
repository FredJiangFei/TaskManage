import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../_shared/share.module';
import { DragComponent } from './drag/drag.component';
import { CalculateComponent } from './calculate/calculate.component';
import { MouseMoveComponent } from './mouse-move/mouse-move.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    RxjsComponent,
    DragComponent,
    CalculateComponent,
    MouseMoveComponent,
    AutocompleteComponent
  ]
})
export class RxjsModule { }