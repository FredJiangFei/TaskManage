import { LoginCommand } from './../../_commands/login.command';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginCommand: LoginCommand = { 
    username: '',
    password: ''
  };

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
      this.auth.login(this.loginCommand)
        .pipe(
          finalize(() => loader.dismissAll())
        )
        .subscribe(_ => {
          if (this.auth.LoggedIn()) {
            this.navCtrl.setRoot(TabsPage);
          }
        });
    }, 2000);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
