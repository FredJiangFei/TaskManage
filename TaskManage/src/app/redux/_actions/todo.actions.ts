import { Action } from '@ngrx/store';
import { Item } from '../_models/item';

export enum TodoActionTypes {
    LOAD = '[Todo] Load',
    LOAD_SUCCESS = '[Todo] Load Success',
    LOAD_FAIL = '[Todo] Load Fail',

    ADD_TODO = '[Todo] add_todo',
    ADD_TODO_SUCCESS = '[Todo] add_todo Success',
    ADD_TODO_FAIL = '[Todo] add_todo Fail',

    REMOVE_TODO = '[Todo] remove_todo',
    REMOVE_TODO_SUCCESS = '[Todo] remove_todo Success',
    REMOVE_TODO_FAIL = '[Todo] remove_todo Fail',

    TOGGLE_TODO = '[Todo] toggle_todo',
    TOGGLE_TODO_SUCCESS = '[Todo] toggle_todo Success',
    TOGGLE_TODO_FAIL = '[Todo] toggle_todo Fail'
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

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.ADD_TODO_SUCCESS;

  constructor(public payload: Item) {}
}

export class AddTodoFail implements Action {
  readonly type = TodoActionTypes.ADD_TODO_FAIL;

  constructor(public payload: string) {}
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.TOGGLE_TODO;

  constructor(public payload: Item) {}
}
export class ToggleTodoSuccess implements Action {
  readonly type = TodoActionTypes.TOGGLE_TODO_SUCCESS;

  constructor(public payload: Item) {}
}

export class ToggleTodoFail implements Action {
  readonly type = TodoActionTypes.TOGGLE_TODO_FAIL;

  constructor(public payload: string) {}
}

export class RemoveTodo implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO;

  constructor(public payload: number) {}
}

export class RemoveTodoSuccess implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO_SUCCESS;

  constructor(public payload: number) {}
}

export class RemoveTodoFail implements Action {
  readonly type = TodoActionTypes.REMOVE_TODO_FAIL;

  constructor(public payload: string) {}
}


export type TodoAction = Load | LoadSuccess | LoadFail
| AddTodo | AddTodoSuccess | AddTodoFail
| ToggleTodo | ToggleTodoSuccess | ToggleTodoFail
| RemoveTodo | RemoveTodoSuccess | RemoveTodoFail;
