import { Component, OnInit } from '@angular/core';
import { interval, Subject, ReplaySubject } from 'rxjs';
import { take, tap, mapTo, multicast } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.css']
})
export class RxjsSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
