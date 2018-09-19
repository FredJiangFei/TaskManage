import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        username: [''],
        passwordGroup: this.fb.group({
          password: [''],
          confirmpassword: ['']
        })
      });
  }

  register(value: any) {
      console.log(value);
  }
}
