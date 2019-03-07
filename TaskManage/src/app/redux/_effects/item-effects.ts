import { ItemService } from '../_services/item.service';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
    TodoActionTypes,
    LoadSuccess, LoadFail, AddTodoSuccess,
    AddTodoFail, ToggleTodoSuccess,
    RemoveTodoSuccess, RemoveTodoFail, ToggleTodo, RemoveTodo, AddTodo
} from '../_actions/todo.actions';
import { Item } from '../_models/item';

@Injectable({
    providedIn: 'root'
})
export class ItemEffects {
    constructor(private actions$: Actions, private itemService: ItemService) {

    }

    @Effect()
    loadItems$ = this.actions$.pipe(
        ofType(TodoActionTypes.LOAD),
        mergeMap(() => this.itemService.getAll()
            .pipe(
                map(items => new LoadSuccess(items)),
                catchError(error => of(new LoadFail(error)))
            )
        )
    );

    @Effect()
    createItem$ = this.actions$.pipe(
        ofType(TodoActionTypes.ADD_TODO),
        map((action: AddTodo) => action.payload),
        mergeMap((item: Item) =>
            this.itemService.add(item).pipe(
                map(newItem => (new AddTodoSuccess(newItem))),
                catchError(err => of(new AddTodoFail(err)))
            )
        )
    );

    @Effect()
    updateItem$ = this.actions$.pipe(
        ofType(TodoActionTypes.TOGGLE_TODO),
        map((action: ToggleTodo) => action.payload),
        mergeMap((item: Item) =>
            this.itemService.update(item).pipe(
                map(newItem => (new ToggleTodoSuccess(newItem))),
                catchError(err => of(new ToggleTodoSuccess(err)))
            )
        )
    );

    @Effect()
    deleteItem$ = this.actions$.pipe(
        ofType(TodoActionTypes.REMOVE_TODO),
        map((action: RemoveTodo) => action.payload),
        mergeMap((itemId: number) =>
            this.itemService.delete(itemId).pipe(
                map(() => (new RemoveTodoSuccess(itemId))),
                catchError(err => of(new RemoveTodoFail(err)))
            )
        )
    );
}
