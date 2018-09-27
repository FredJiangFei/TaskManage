import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragService } from '../_services/drag.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @Input() dragData: any;

  constructor(private el: ElementRef, private rd: Renderer2, private dragService: DragService) {
    rd.setAttribute(el.nativeElement, 'draggable', `true`);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    this.dragService.setDragData(this.dragData);
    this.rd.setStyle(this.el.nativeElement, 'opacity', '0.5');
    this.rd.setStyle(this.el.nativeElement, 'border', '#ff525b dashed 2px');
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event) {
    this.rd.removeStyle(this.el.nativeElement, 'opacity');
    this.rd.removeStyle(this.el.nativeElement, 'border');
  }
}
