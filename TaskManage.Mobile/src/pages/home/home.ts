import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private auth: AuthService) {

  }

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
