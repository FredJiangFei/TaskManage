import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = TaskPage;
  tab3 = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
