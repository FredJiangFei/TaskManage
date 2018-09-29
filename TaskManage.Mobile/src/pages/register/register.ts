import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  register() {
    let alert = this.alertCtrl.create({
      title:'Register Error', 
      subTitle:'errors',
      buttons:['OK']
    });
    alert.present();
  }
}
