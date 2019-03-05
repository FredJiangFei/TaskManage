import { AlertifyService } from '../_services/alertify.service';
import { PasswordValidators, nameAsyncValidator } from '../_validators/password.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { RegisterCommand } from '../_commands/register.command';
import { ErrorStateMatcher } from '@angular/material';
import { avatars } from '../_utils/svg.util';


export class MismatchErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if (!control) {
      return false;
    }
    const parentInvalid = !!(control.parent && control.parent.hasError('mismatch'));
    return control.touched && (control.invalid || parentInvalid);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  mismatchMatcher = new MismatchErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required], nameAsyncValidator],
        passwordGroup: this.fb.group(
          {
            password: ['', [Validators.required, Validators.minLength(6), PasswordValidators.format]],
            confirmpassword: ['']
          },
          {
            validator: PasswordValidators.shouldEqualToPassowrd
          }
        ),
        birthday: [''],
        avatar: [avatars[0]]
      });
  }

  register(value: any) {
    const user: RegisterCommand = {
      username: value.username,
      birthday: value.birthday,
      avatar: value.avatar,
      password: value.passwordGroup['password']
    };
    this.authService.register(user)
      .subscribe(_ => {
        this.registerForm.reset();
        this.alertify.success('Register success');
        this.router.navigate(['/login']);
      });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('passwordGroup').get('password');
  }

  get passwordGroup() {
    return this.registerForm.get('passwordGroup');
  }

  get confirmpassword() {
    return this.registerForm.get('passwordGroup').get('confirmpassword');
  }
}
