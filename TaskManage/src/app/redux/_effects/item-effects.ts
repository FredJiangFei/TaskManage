import { ItemService } from '../_services/item.service';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActionTypes, LoadSuccess, LoadFail } from '../_actions/todo.actions';

@Injectable({
    providedIn: 'root'
})
export class ItemEffects {

    @Effect()
    loadItems$ = this.actions$
    .pipe(
        ofType(TodoActionTypes.LOAD),
        mergeMap(() => this.itemService.getAll()
            .pipe(
                map(items => new LoadSuccess(items)),
                catchError(error => of(new LoadFail(JSON.stringify(error))))
            )
        )
    );

    constructor(
        private actions$: Actions,
        private itemService: ItemService
    ) { }
}
