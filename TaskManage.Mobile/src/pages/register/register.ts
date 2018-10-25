import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterCommand } from '../../_commands/register.command';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerCommand: RegisterCommand = { 
    username: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private authService: AuthService) {
  }

  register() {
    this.authService.register(this.registerCommand)
    .subscribe(_ => {
      this.navCtrl.pop();
     });
  }
}
