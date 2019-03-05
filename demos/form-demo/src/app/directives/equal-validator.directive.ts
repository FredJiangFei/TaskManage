import { NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { passwordEqualValidator } from '../reative-register/register.validates';

@Directive({
  selector: '[passwordEqual]',
  providers: [{ provide: NG_VALIDATORS, useValue: passwordEqualValidator, multi: true }]

})
export class EqualValidatorDirective {

  constructor() { }

}
