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
import { ReceitasPage } from '../pages/listagemDeReceitas/receitas';

@NgModule({
  declarations: [
    MyApp,
    ReceitaPage,
    CadastroPage,
    HomePage,
    IngredientesPage,
    ReceitasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceitaPage,
    CadastroPage,
    HomePage,
    IngredientesPage,
    ReceitasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
