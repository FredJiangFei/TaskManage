import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mobileValidator, passwordEqualValidator, nameAsyncValidator } from './register.validates';

@Component({
  selector: 'app-reative-register',
  templateUrl: './reative-register.component.html',
  styleUrls: ['./reative-register.component.css']
})
export class ReativeRegisterComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required], nameAsyncValidator],
      mobile: ['', mobileValidator],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        confirm: ['']
      }, {
          validator: passwordEqualValidator
        })
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.formModel.value);
  }

  get username() {
    return this.formModel.get('username');
  }
}
