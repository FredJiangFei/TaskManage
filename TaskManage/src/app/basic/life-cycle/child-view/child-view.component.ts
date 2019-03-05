import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(`Hello ${name}`);
  }

  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit');
  }
}
