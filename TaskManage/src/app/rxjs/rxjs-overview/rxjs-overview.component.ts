import { Component, OnInit } from '@angular/core';
import { from, timer, fromEvent, zip, combineLatest } from 'rxjs';
import { delayWhen, map, tap, bufferCount, mergeMap, sequenceEqual, mapTo, startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-overview',
  templateUrl: './rxjs-overview.component.html',
  styleUrls: ['./rxjs-overview.component.css']
})
export class RxjsOverviewComponent implements OnInit {
  fromObs = [];
  timerObs = [];
  constructor() { }

  ngOnInit() {
    this.combineLatest();
  }

  from() {
    from([10, 20, 30])
      .pipe(delayWhen(x => timer(x * 100)))
      .subscribe(x => this.fromObs.push(x));
  }

  timmer() {
    timer(1000, 2000)
      .subscribe(val => this.timerObs.push(val));
  }

  zip() {
    const documentEvent = eventName => fromEvent(document, eventName)
      .pipe(map((e: MouseEvent) => ({ x: e.clientX, y: e.clientY })));

    const eventTime = eventName => fromEvent(document, eventName)
      .pipe(map(() => new Date()));

    zip(
      documentEvent('mousedown'),
      documentEvent('mouseup')
    ).subscribe(e => {
      document.getElementById('drag-sqaure').style.left = e[1].x + 'px';
      document.getElementById('drag-sqaure').style.top = e[1].y + 'px';
      console.log(JSON.stringify(e));
    });

    const mouseClickDuration =
      zip(
        eventTime('mousedown'),
        eventTime('mouseup')
      ).pipe(
        map(([start, end]) =>
          Math.abs((start.getTime() - end.getTime())))
      );
    mouseClickDuration.subscribe(console.log);
  }

  combineLatest() {
    const setHtml = id => val => (document.getElementById(id).innerHTML = val);

    const addOneClick$ = id =>
      fromEvent(document.getElementById(id), 'click').pipe(
        mapTo(1),
        startWith(0),
        scan((acc, curr) => acc + curr),
        tap(setHtml(`${id}Total`))
      );

    combineLatest(addOneClick$('red'), addOneClick$('black'))
      .pipe(map(([val1, val2]) => val1 + val2))
      .subscribe(setHtml('total'));
  }
}
