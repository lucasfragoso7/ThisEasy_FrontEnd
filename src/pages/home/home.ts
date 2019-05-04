import { CadastroPage } from './../cadastro/cadastro';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IngredientesPage } from '../ingredientes/ingredientes';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
          user: [''],
          password: [''],
        });
  }

  submitForm() {
    let credentials = this.authForm.value;
    console.log(credentials);
  }
  sendPage() {
    this.navCtrl.push(IngredientesPage);
  }
  sendPageCadastrar() {
    this.navCtrl.push(CadastroPage);
  }




}
