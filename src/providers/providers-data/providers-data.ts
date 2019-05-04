import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  private _jsonData: any;
  public get jsonData(): any {
    return this._jsonData;
  }
  public set jsonData(value: any) {
    this._jsonData = value;
  }
 
  constructor() {

      this.jsonData=[
    {"id":1,"label":"saw","name":"Prithivi"},
    {"id":2,"label":"saw1","name":"Abimanyu"},
    {"id":3,"label":"saw2","name":"malliga"},
    {"id":3,"label":"saw2","name":"Gowdaman"},
    {"id":3,"label":"saw2","name":"Neethi"},
    {"id":3,"label":"saw2","name":"abirami1"},
    {"id":3,"label":"saw2","name":"abirami2"},
    {"id":3,"label":"saw2","name":"Harrish"},
    {"id":3,"label":"saw2","name":"Lokesh"},
    {"id":3,"label":"saw2","name":"Deepak"},
    {"id":3,"label":"saw2","name":"malliga"},
    {"id":3,"label":"saw2","name":"malliga"}

    ];

  }

  filterItems(searchTerm){

     return this.jsonData.filter((item) => {
          return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });  

  }

}
