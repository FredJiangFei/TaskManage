import { Component, OnInit, AfterContentInit, AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.css']
})
export class ChildContentComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // console.log('child ContentInit finish');
  }

  ngAfterContentChecked(): void {
    // console.log('child ContentChecked finish');
  }
}
