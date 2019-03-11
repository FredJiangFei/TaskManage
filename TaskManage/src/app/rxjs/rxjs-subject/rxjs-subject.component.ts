import { Component, OnInit } from '@angular/core';
import { interval, Subject, ReplaySubject, Observable } from 'rxjs';
import { take, tap, mapTo, multicast, count, share, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.css']
})
export class RxjsSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.refCount();
  }

  coldObser() {
    const count$ = interval(1000);
    count$.subscribe(val => console.log(`v1: ${val}`));

    setTimeout(() => {
      count$.subscribe(val => console.log(`v2: ${val}`));
    }, 2000);
  }

  hotObser() {
    const count$ = interval(1000).pipe(share());
    count$.subscribe(val => console.log(`v1: ${val}`));

    setTimeout(() => {
      count$.subscribe(val => console.log(`v2: ${val}`));
    }, 2000);
  }

  getObs(idx: number) {
    const obs = {
      next: (val) => console.log(`v${idx}: ` + val),
      error: (err) => console.log(`v${idx} errror: ` + err),
      complete: () => console.log(`v${idx} is complete`)
    };
    return obs;
  }

  subjectSub() {
    const count$ = interval(1000).pipe(take(5));

    const obs1 = this.getObs(1);
    const obs2 = this.getObs(2);

    const subject = new Subject();
    subject.next(10);
    subject.subscribe(obs1);
    subject.next(11);

    setTimeout(() => {
      subject.subscribe(obs2);
    }, 2000);

    count$.subscribe(subject);
  }

  multicast() {
    const count$ = interval(1000).pipe(
      take(5),
      multicast(new Subject())
    );

    const obs1 = this.getObs(1);
    const obs2 = this.getObs(2);

    count$.subscribe(obs1);
    setTimeout(() => {
      count$.subscribe(obs2);
    }, 2000);

    count$.connect();
  }

  refCount() {
    const count$ = interval(1000).pipe(
      take(5),
      multicast(new Subject()),
      refCount()
    );

    const obs1 = this.getObs(1);
    const obs2 = this.getObs(2);

    count$.subscribe(obs1);
    setTimeout(() => {
      count$.subscribe(obs2);
    }, 2000);
  }
}
