import { Ingredient } from './../../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IngredientesIngredienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientesProvider {

  ListIngredientes: Array<Ingredient>;


  constructor(public http: HttpClient) {

  }

  IngreChecked(ingre: Array<Ingredient>) {

    ingre.forEach(ele => {
      if (ele.isChecked) {
        this.ListIngredientes.push(ele);
      }
    });
  }

}
