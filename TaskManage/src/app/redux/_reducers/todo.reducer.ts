import { Item } from '../_models/item';
import { TodoAction, TodoActionTypes } from '../_actions/todo.actions';

export const todoReducer = (state: Item[] = [], action: TodoAction) => {
  switch (action.type) {

    case TodoActionTypes.LOAD_SUCCESS:
      return action.payload;

    case TodoActionTypes.ADD_TODO_SUCCESS: {
      return [...state, action.payload];
    }

    case TodoActionTypes.TOGGLE_TODO_SUCCESS:
      const items = state.map(
        item => action.payload.id === item.id ? action.payload : item);
      return items;

    case TodoActionTypes.REMOVE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.payload);

    case TodoActionTypes.LOAD_FAIL:
    case TodoActionTypes.ADD_TODO_FAIL:
    case TodoActionTypes.TOGGLE_TODO_FAIL:
    case TodoActionTypes.REMOVE_TODO_FAIL:
      return action.payload;

    default:
      return state;
  }
};
