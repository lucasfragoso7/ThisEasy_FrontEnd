import { ReceitaPage } from './../receita/receita';
import { Data } from './../../providers/providers-data/providers-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listagem-de-receitas',
  templateUrl: 'listagem-de-receitas.html',
})
export class ListagemDeReceitasPage {

  receitas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
  }
  ionViewDidLoad() {
    this.receitas = this.dataService.jsonData
  }

  sendPage(id){
    // get(id)
    this.navCtrl.push(ReceitaPage)
  }

}
