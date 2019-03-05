import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-component-style',
  templateUrl: './component-style.component.html',
  styleUrls: ['./component-style.component.css']
})
export class ComponentStyleComponent {
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
