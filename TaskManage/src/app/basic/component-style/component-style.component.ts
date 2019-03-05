import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-component-style',
  templateUrl: './component-style.component.html',
  styleUrls: ['./component-style.component.css'],

  // encapsulation: ViewEncapsulation.Emulated  默认，只进不出，全局样式能进来，组件样式出不去
  // encapsulation: ViewEncapsulation.ShadowDom 不进不出，没有样式能进来，组件样式出不去
  // encapsulation: ViewEncapsulation.None 能进能出
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
