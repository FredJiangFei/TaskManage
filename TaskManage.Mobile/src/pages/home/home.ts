import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../_models/user';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginUser: User;
  constructor(public navCtrl: NavController, private auth: AuthService) {
    this.loginUser = auth.LoggedUser();
  }

  logout() {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
