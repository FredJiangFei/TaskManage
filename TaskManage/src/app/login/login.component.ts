import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginCommand } from '../commands/login.command';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: LoginCommand = {
    username: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private alertify: AlertifyService) { }

  login() {
    this.authService.login(this.user).subscribe(_ => {
       if (this.authService.LoggedIn()) {
           const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
           this.router.navigate([returnUrl || '/']);
       }
    }, err => this.alertify.error(err.message));
  }
}
