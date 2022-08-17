import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private navigation: NavController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.navigation.navigateBack('/home');
    }, 5000);
  }

}
