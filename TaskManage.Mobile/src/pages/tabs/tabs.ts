import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TaskPage } from '../task/task';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = TaskPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthService) { }

  ionViewCanEnter() {
    if (!this.auth.LoggedIn())
      this.navCtrl.setRoot(LoginPage);
    return true;
  }
}
