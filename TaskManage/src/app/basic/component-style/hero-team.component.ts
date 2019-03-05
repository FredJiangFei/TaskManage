import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-team',
  template: `
    <h3>Team</h3>
    <ul>
      <li *ngFor="let member of hero.team" style="list-style-type: square;">
        {{member}}
      </li>
    </ul>
  `
})
export class HeroTeamComponent {
  @Input() hero: Hero;
}
