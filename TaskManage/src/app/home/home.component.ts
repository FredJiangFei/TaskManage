import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  darkTheme = false;

  constructor(private authService: AuthService, private router: Router, private oc: OverlayContainer) { }

  ngOnInit() {
    this.user = this.authService.LoggedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  switchThem() {
    this.darkTheme = !this.darkTheme;
    this.oc.getContainerElement().className = this.darkTheme  ? 'darkTheme' : null;
  }
}
