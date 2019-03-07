import { NgModule } from '@angular/core';
import { ReduxComponent } from './redux.component';
import { Routes, RouterModule } from '@angular/router';
import { ShareModule } from '../_shared/share.module';
import { ItemListComponent } from './item-list/item-list.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './_reducers/todo.reducer';
import { todoFilterReducer } from './_reducers/todo.filter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './_effects/item-effects';
import { Item } from './_models/item';

const routes: Routes = [
  {
    path: '',
    component: ReduxComponent
  }
];

export interface TodoState {
  todos: Item[];
  todoFilter: any;
  error: string;
}

// npm i @ngrx/core @ngrx/store @ngrx/store-devtools @ngrx/effects --save
@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(
      {
        todos: todoReducer,
        todoFilter: todoFilterReducer
      }
    ),
    EffectsModule.forRoot([ItemEffects]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: [
    ReduxComponent,
    ItemListComponent
  ]
})
export class ReduxModule { }
