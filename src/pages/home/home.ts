import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { IngredientesPage } from '../ingredientes/ingredientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sendInfoPage() : void {
    this.navCtrl.push(CadastroPage);
  }
  sendIngredientePage() : void {
    this.navCtrl.push(IngredientesPage);
  }




}
