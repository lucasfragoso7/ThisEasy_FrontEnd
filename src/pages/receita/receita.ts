import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubstitutosPage } from '../substitutos/substitutos';

/**
 * Generated class for the ReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sendSubstitutosPage() : void {
    this.navCtrl.push(SubstitutosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitaPage');
  }

}
