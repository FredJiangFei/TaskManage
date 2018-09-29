import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private auth: AuthService) {
  }

  login() {
    let loader = this.loadingCtrl.create({
      content: "Logging in..."
    });
    loader.present();

    setTimeout(() => {
      this.auth.login();
      this.navCtrl.setRoot(TabsPage);
      loader.dismissAll();
    }, 2000);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
