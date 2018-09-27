import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { DragService } from '../_services/drag.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {
  @Output() dropped = new EventEmitter<any>();

  constructor(private el: ElementRef, private rd: Renderer2, private dragService: DragService) { }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.rd.setStyle(this.el.nativeElement, 'background-color', 'dimgray');
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.rd.removeStyle(this.el.nativeElement, 'background-color');
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.dragService.dragData$.subscribe(x => {
      if (x) {
        this.dropped.emit(x);
      }
    });
    this.dragService.clearDragData();
    this.rd.removeStyle(this.el.nativeElement, 'background-color');
  }
}
