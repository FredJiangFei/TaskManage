import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginCommand } from '../_commands/login.command';
import { AlertifyService } from '../_services/alertify.service';
import { finalize } from 'rxjs/operators';

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
  logining: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private alertify: AlertifyService) { }

  login() {
    this.logining = true;
    setTimeout(() => {
      this.authService.login(this.user)
      .pipe(
        finalize(() => this.logining = false)
      )
      .subscribe(_ => {
         if (this.authService.LoggedIn()) {
             const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
             this.router.navigate([returnUrl || '/']);
         }
      });

    }, 500);
  }
}
