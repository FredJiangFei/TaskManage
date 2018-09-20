import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { Spinner } from 'node_modules/spin.js';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective implements OnChanges {
  @Input() appSpinner: boolean;
  spinner: Spinner;

  constructor(
    private elementRef: ElementRef) {
      this.spinner =  new Spinner();
    }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.appSpinner.currentValue) {
      this.spinner.spin(this.elementRef.nativeElement);
    } else {
      this.spinner.stop();
    }
    this.elementRef.nativeElement.disabled = changes.appSpinner.currentValue;
  }
}

