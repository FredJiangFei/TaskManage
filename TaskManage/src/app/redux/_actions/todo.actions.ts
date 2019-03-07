import { Action } from '@ngrx/store';
import { Item } from '../_models/item';

export enum TodoActionTypes {
    LOAD = '[Todo] Load',
    LOAD_SUCCESS = '[Todo] Load Success',
    LOAD_FAIL = '[Todo] Load Fail',
    ADD_TODO = '[Todo] add_todo',
    REMOVE_TODO = '[Todo] remove_todo',
    TOGGLE_TODO = '[Todo] toggle_todo'
}

export class Load implements Action {
  readonly type = TodoActionTypes.LOAD;
}

export class LoadSuccess implements Action {
  readonly type = TodoActionTypes.LOAD_SUCCESS;

  constructor(public payload: Item[]) { }
}

export class LoadFail implements Action {
  readonly type = TodoActionTypes.LOAD_FAIL;

  constructor(public payload: string) { }
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

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo | Load | LoadSuccess | LoadFail;
