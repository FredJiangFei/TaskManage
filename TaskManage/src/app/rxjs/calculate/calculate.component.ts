import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, empty, from } from 'rxjs';
import { mapTo, startWith, scan, merge, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  @ViewChild('addButton') addButton: ElementRef;
  @ViewChild('minusButton') minusButton: ElementRef;
  state: number;

  ngOnInit() {
    this.scanAndReduce();
  }

  scanAndReduce() {
    from([1, 2, 3, 4, 5, 6])
      .pipe(scan((acc, one) => acc + one, 0))
      .subscribe(x => {
        console.log('scan shows incremental total', x);
      });

    from([1, 2, 3, 4, 5, 6])
      .pipe(reduce((acc, one) => acc + one, 0))
      .subscribe(x => {
        console.log('reduce shows only total', x);
      });
  }


  initCalculate() {
    const add$ = fromEvent(this.addButton.nativeElement, 'click').pipe(mapTo(1));
    const minus$ = fromEvent(this.minusButton.nativeElement, 'click').pipe(mapTo(-1));

    const calculate$ = empty().pipe(
      startWith(0),
      merge(add$, minus$),
      scan((org, next) => org + next, 0)
    );

    calculate$.subscribe(x => this.state = x);
  }
}
