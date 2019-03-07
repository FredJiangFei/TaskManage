import { Action } from '@ngrx/store';

export enum TodoFilterActionTypes {
  SHOW_ALL = '[TodoFilter] show_all',
  SHOW_ACTIVE = '[TodoFilter] show_active',
  SHOW_COMPLETED = '[TodoFilter] show_completed'
}

export class ShowAll implements Action {
  readonly type = TodoFilterActionTypes.SHOW_ALL;
}

export class ShowActive implements Action {
  readonly type = TodoFilterActionTypes.SHOW_ACTIVE;
}

export class ShowComplete implements Action {
  readonly type = TodoFilterActionTypes.SHOW_COMPLETED;
}

export type TodoFilterAction = ShowAll | ShowActive | ShowComplete;
