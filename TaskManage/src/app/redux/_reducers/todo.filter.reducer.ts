import { Item } from '../_models/item';
import { TodoFilterAction, TodoFilterActionTypes } from '../_actions/todo.filter.actions';

export const todoFilterReducer = (state = (todo: Item) => todo, action: TodoFilterAction) => {
  switch (action.type) {
    case TodoFilterActionTypes.SHOW_ALL:
      return todo => todo;

    case TodoFilterActionTypes.SHOW_ACTIVE:
      return todo => !todo.completed;

    case TodoFilterActionTypes.SHOW_COMPLETED:
      return todo => todo.completed;

    default:
      return state;
  }
};
