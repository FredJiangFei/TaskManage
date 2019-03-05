import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-controls',
  template: `
    <h3>Controls</h3>
    <button mat-raised-button color="primary" (click)="activate()">Activate</button>
  `
})
export class HeroControlsComponent {
  @Input() hero: Hero;

  activate() {
    this.hero.active = !this.hero.active;
  }
}
