import { Component,
   OnInit,
   Input,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   SimpleChanges,
   ViewChild} from '@angular/core';
import { ChildViewComponent } from './child-view/child-view.component';

// let logIndex = 1;

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifeCycleComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  @Input()title: string;
  greeting = 'Hello';
  user: { name: string } = { name: 'Tom' };
  @ViewChild('viewA')child1: ChildViewComponent;
  message = 'Hello';

  constructor() {
    this.logIt(`title in constructor: ${this.title}`);
  }

  logIt(message: string) {
    // console.log(`#${logIndex++} ${message}`);
  }

  ngOnInit() {
    // setInterval(() => {
      this.child1.greeting('Tom');
    // }, 3000);
    this.logIt(`title in ngOnInit: ${this.title}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newTitle = changes['title'].currentValue;
    this.logIt(`title in ngOnChanges: ${newTitle}`);
  }

  ngDoCheck(): void {
    this.logIt(`title in ngDoCheck: ${this.title}`);
  }

  ngAfterContentInit(): void {
    console.log('parent ContentInit finish');
  }

  ngAfterContentChecked(): void {
    console.log('parent ContentChecked finish');
  }

  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit');
    setTimeout(() => {
      this.message = 'error';
    }, 0);
  }
}
