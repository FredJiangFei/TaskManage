import { Action } from '@ngrx/store';
import { Item } from '../_models/item';

export enum TodoActionTypes {
    ADD_TODO = '[Todo] add_todo',
    REMOVE_TODO = '[Todo] remove_todo',
    TOGGLE_TODO = '[Todo] toggle_todo',
    TOGGLE_ALL = '[Todo] toggle_all',
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;

  constructor(public payload: Item) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO;

  constructor(public payload: Item) {}
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.TOGGLE_TODO;

  constructor(public payload: Item) {}
}

export class ToggleAll implements Action {
  readonly type = TodoActionTypes.TOGGLE_ALL;
}

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo | ToggleAll;
