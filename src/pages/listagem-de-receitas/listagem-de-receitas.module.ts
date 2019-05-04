import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListagemDeReceitasPage } from './listagem-de-receitas';

@NgModule({
  declarations: [
    ListagemDeReceitasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListagemDeReceitasPage),
  ],
})
export class ListagemDeReceitasPageModule {}
