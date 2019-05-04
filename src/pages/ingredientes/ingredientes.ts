import { Data } from './../../providers/providers-data/providers-data';
import { ListagemDeReceitasPage } from './../listagem-de-receitas/listagem-de-receitas';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Ingredient } from '../../models/ingredient';

@IonicPage()
@Component({
    selector: 'page-ingredientes',
    templateUrl: 'ingredientes.html',
})
export class IngredientesPage {
    
    items:Array<Ingredient>;
    searchTerm:any = '';

    constructor(public navCtrl: NavController, public data:Data) {
    }
    sendReceitasPage(): void {
      //  let i:Array<Ingredient>;

        //this.items.forEach( item=> {
         //   if (item.isChecked) {
           //     i.push(item);
            //}
            
        //});

        this.navCtrl.push(ListagemDeReceitasPage);

    }

    ionViewDidLoad() {
        this.setFilteredItems()
    }

    
    setFilteredItems(){
        this.items = this.data.filterItems(this.searchTerm);
    }

    get

}