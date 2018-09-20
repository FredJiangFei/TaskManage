import { PasswordValidators } from './../_validators/password.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { RegisterCommand } from '../_commands/register.command';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        passwordGroup: this.fb.group({
          password: ['', [Validators.required, Validators.minLength(6), PasswordValidators.format]],
          confirmpassword: ['']
        }, {
          validator: PasswordValidators.shouldEqualToPassowrd
        })
      });
  }

  register(value: any) {
      const user: RegisterCommand = {
        username: value.username,
        password: value.passwordGroup['password']
     };
     this.authService.register(user)
     .subscribe(_ => this.router.navigate(['/login']));
  }
}
