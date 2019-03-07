import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Item } from '../_models/item';
import { startWith } from 'rxjs/operators';
import { AddTodo, RemoveTodo, ToggleTodo } from '../_actions/todo.actions';
import { ShowAll, ShowComplete, ShowActive } from '../_actions/todo.filter.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private store$: Store<Item>) { }

  ngOnInit() {
     const data$ = this.store$.pipe(
       select('todos'),
       startWith([])
      );
     const filterData$ = this.store$.pipe(
       select('todoFilter')
      );

     this.items = combineLatest(data$, filterData$,
      (todos: Item[], filter: any) => todos.filter(filter));
  }

  addTodo(name: string) {
    const todoToAdd = {
      name: name
    };
    this.store$.dispatch(new AddTodo(todoToAdd));
  }

  removeTodo(item: Item) {
    this.store$.dispatch(new RemoveTodo(item));
  }

  toggleTodo(item: Item) {
    this.store$.dispatch(new ToggleTodo(item));
  }

  all() {
    this.store$.dispatch(new ShowAll());
  }

  completed() {
    this.store$.dispatch(new ShowComplete());
  }

  actived() {
    this.store$.dispatch(new ShowActive());
  }
}
