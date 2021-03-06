import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, range, interval, timer } from 'rxjs';
import { map, takeUntil, concatAll, takeWhile, filter, take, delay, repeatWhen } from 'rxjs/operators';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {
  @ViewChild('dragElement') dragEle: ElementRef;
  source$ = range(1, 10);
  sourceInter$ = interval(1000);
  clickTimes = 0;

  constructor() { }
  ngOnInit() {
    this.initDrag();
  }

  concatAll() {
    this.sourceInter$
      .pipe(
        take(2),
        map(x => interval(1500).pipe(
          map(y => x + ':' + y),
          take(2)
        )),
        concatAll()
      )
      .subscribe(console.log);
  }

  repeatWhen() {
    const notifier1$ = () => {
      return this.sourceInter$;
    };

    const notifier$ = (notification$) => {
      return notification$.pipe(delay(3000));
    };

    this.source$.pipe(
      repeatWhen(notifier$)
    )
      .subscribe(console.log);
  }


  mouseClickTimesInFiveSeconds() {
    const clickEvent$ = fromEvent<MouseEvent>(document.querySelector('#countTimes'), 'click');
    clickEvent$
      .pipe(takeUntil(timer(3000)))
      .subscribe(() => this.clickTimes++);
  }

  takeUntil() {
    const notifier$ = timer(5500);
    this.sourceInter$.pipe(takeUntil(notifier$))
      .subscribe(console.log);
  }

  takeWhile() {
    this.source$.pipe(takeWhile((value, idx) => idx < 5 && value % 2 !== 0))
      .subscribe(console.log);
  }

  takeCountWhile() {
    this.source$.pipe(
      filter(value => value % 2 !== 0),
      take(5)
    )
      .subscribe(console.log);
  }

  initDrag() {
    const ele = this.dragEle.nativeElement;
    const dragMouseDown$ = fromEvent<MouseEvent>(ele, 'mousedown');
    const dragMouseUp$ = fromEvent<MouseEvent>(ele, 'mouseup');
    const bodyMove$ = fromEvent<MouseEvent>(document.body, 'mousemove');

    const source$ = dragMouseDown$.pipe(
      map(e => bodyMove$.pipe(takeUntil(dragMouseUp$))),
      concatAll(),
      map(event => ({ x: event.clientX, y: event.clientY }))
    );

    source$.subscribe(pos => {
      ele.style.left = pos.x + 'px';
      ele.style.top = pos.y + 'px';
    });
  }
}
