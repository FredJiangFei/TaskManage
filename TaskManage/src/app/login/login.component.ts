import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  login() {
    this.authService.login();
    const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
    this.router.navigate([returnUrl || '/']);
  }
}
