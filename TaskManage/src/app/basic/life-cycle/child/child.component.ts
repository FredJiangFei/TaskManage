import { Component, OnInit, OnChanges, DoCheck, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() greeting: string;
  @Input() user: { name: string };

  message = 'init message';
  oldName: string;
  changeDetected = false;
  noChangeCount: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {
    // if (this.user.name !== this.oldName) {
    //   this.changeDetected = true;
    //   console.log(`DoCheck user name change to ${this.user.name} from ${this.oldName}`);
    //   this.oldName = this.user.name;
    // }

    // if (this.changeDetected) {
    //   this.noChangeCount = 0;
    // } else {
    //   this.noChangeCount++;
    //   console.log(`Docheck: name not change, but DoCheck was called ${this.noChangeCount} times.`);
    // }

    // this.changeDetected = false;
  }
}
