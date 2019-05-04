import { Data } from './../providers/providers-data/providers-data';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ReceitaPage } from '../pages/receita/receita';
import { HomePage } from '../pages/home/home';
import { IngredientesPage } from '../pages/ingredientes/ingredientes';
import { ListagemDeReceitasPage } from '../pages/listagem-de-receitas/listagem-de-receitas';
import { HttpProvider } from '../providers/Http/Http';
import { HttpModule } from '@angular/http';
import { IngredientesProvider } from '../pages/ingredientes/ingredientes-provider';

@NgModule({
  declarations: [
    MyApp,
    ReceitaPage,
    CadastroPage,
    HomePage,
    IngredientesPage,
    ListagemDeReceitasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceitaPage,
    CadastroPage,
    HomePage,
    IngredientesPage,
    ListagemDeReceitasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    Data,
    IngredientesProvider,
  ]
})
export class AppModule {}
