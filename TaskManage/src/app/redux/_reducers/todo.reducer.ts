import { Item } from '../_models/item';
import { TodoAction, TodoActionTypes } from '../_actions/todo.actions';

let id = 1;

export const todoReducer = (state: Item[] = [], action: TodoAction) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      action.payload.id = id;
      id++;
      return [...state, action.payload];
    }

    case TodoActionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case TodoActionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return Object.assign({}, todo, { completed: !todo.completed });
      });

    case TodoActionTypes.TOGGLE_ALL:
      return state.map(todo => {
        return Object.assign({}, todo, { completed: !todo.completed });
      });
    default:
      return state;
  }
};
