import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, takeUntil, concatAll, delay } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-move',
  templateUrl: './mouse-move.component.html',
  styleUrls: ['./mouse-move.component.css']
})
export class MouseMoveComponent implements OnInit {
  movePos$: any;

  ngOnInit() {
    this.followMouse();
  }

  initMouseMove() {
    const move$ = fromEvent<MouseEvent>(document, 'mousemove');

    this.movePos$ = move$
      .pipe(
        map(e => ({
          x: e.clientX,
          y: e.clientY
        }))
      );
  }

  createDot(x, y) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);
  }

  followMouse() {
    this.initMouseMove();
    const imgList = document.getElementsByTagName('img');

    const delayTime = 600;
    Array.from(imgList).forEach((item, index) => {
      this.movePos$
        .pipe(delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2))
        .subscribe(function (pos) {
          item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
        });
    });
  }
}
