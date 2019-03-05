import { Component,
   OnInit,
   Input,
   OnChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   SimpleChanges } from '@angular/core';

let logIndex = 1;

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

  constructor() {
    this.logIt(`title in constructor: ${this.title}`);
  }

  logIt(message: string) {
    // console.log(`#${logIndex++} ${message}`);
  }

  ngOnInit() {
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
    this.logIt(`title in ngAfterContentInit: ${this.title}`);
  }

  ngAfterContentChecked(): void {
    this.logIt(`title in ngAfterContentChecked: ${this.title}`);
  }

  ngAfterViewInit(): void {
    this.logIt(`title in ngAfterViewInit: ${this.title}`);
  }

  ngAfterViewChecked(): void {
    this.logIt(`title in ngAfterViewChecked: ${this.title}`);
  }

}
