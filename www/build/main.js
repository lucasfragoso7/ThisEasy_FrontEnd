webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroPage.prototype.sendHomePage = function () {
        this.navCtrl.pop();
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\cadastro\cadastro.html"*/'ionic serve<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Nome</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Sobrenome</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input type="email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Phone</ion-label>\n    <ion-input type="tel"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Data de nascimento</ion-label>\n    <ion-input type="date"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Usuario</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Senha</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Concordo com os termos de uso</ion-label>\n    <ion-checkbox color = "dark" ></ion-checkbox>\n  </ion-item>\n\n  <button ion-button small  (click)="sendHomePage()">Cadastrar</button>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_data_providers_data__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listagem_de_receitas_listagem_de_receitas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngredientesPage = /** @class */ (function () {
    function IngredientesPage(navCtrl, data) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.searchTerm = '';
    }
    IngredientesPage.prototype.sendReceitasPage = function () {
        //  let i:Array<Ingredient>;
        //this.items.forEach( item=> {
        //   if (item.isChecked) {
        //     i.push(item);
        //}
        //});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__listagem_de_receitas_listagem_de_receitas__["a" /* ListagemDeReceitasPage */]);
    };
    IngredientesPage.prototype.ionViewDidLoad = function () {
        this.setFilteredItems();
    };
    IngredientesPage.prototype.setFilteredItems = function () {
        this.items = this.data.filterItems(this.searchTerm);
    };
    IngredientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-ingredientes',template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\ingredientes\ingredientes.html"*/'<!--\n  Generated template for the IngredientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ingredientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      <ion-label> {{item.name}}</ion-label>\n      <ion-checkbox slot="end" [(ngModel)]="item.isChecked" color = "dark" ></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <button ion-button small type="submit" (click)="sendReceitasPage()">Receitas</button>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\ingredientes\ingredientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_providers_data_providers_data__["a" /* Data */]])
    ], IngredientesPage);
    return IngredientesPage;
}());

//# sourceMappingURL=ingredientes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemDeReceitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__receita_receita__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_providers_data_providers_data__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReceitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListagemDeReceitasPage = /** @class */ (function () {
    function ListagemDeReceitasPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
    }
    ListagemDeReceitasPage.prototype.ionViewDidLoad = function () {
        this.receitas = this.dataService.jsonData;
    };
    ListagemDeReceitasPage.prototype.sendPage = function (id) {
        // get(id)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__receita_receita__["a" /* ReceitaPage */]);
    };
    ListagemDeReceitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-listagem-de-receitas',template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\listagem-de-receitas\listagem-de-receitas.html"*/'<!--\n  Generated template for the ReceitasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>receitas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Receitas\n    </ion-card-header>\n\n    <ion-list *ngFor=\'let receita of receitas\'>\n      <button (click) = \'sendPage(receita.id)\' ion-item>\n        {{receita.name}}\n\n      </button>\n\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\listagem-de-receitas\listagem-de-receitas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_providers_data_providers_data__["a" /* Data */]])
    ], ListagemDeReceitasPage);
    return ListagemDeReceitasPage;
}());

//# sourceMappingURL=listagem-de-receitas.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceitaPage = /** @class */ (function () {
    function ReceitaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // sendSubstitutosPage() : void {
    // this.navCtrl.push(SubstitutosPage);
    //}
    ReceitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceitaPage');
    };
    ReceitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receita',template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\receita\receita.html"*/'<!--\n  Generated template for the ReceitaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>receita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  \n</ion-content>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\receita\receita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReceitaPage);
    return ReceitaPage;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		284,
		3
	],
	"../pages/ingredientes/ingredientes.module": [
		285,
		2
	],
	"../pages/listagem-de-receitas/listagem-de-receitas.module": [
		286,
		1
	],
	"../pages/receita/receita.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ingredientes_ingredientes__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            user: [''],
            password: [''],
        });
    }
    HomePage.prototype.submitForm = function () {
        var credentials = this.authForm.value;
        console.log(credentials);
    };
    HomePage.prototype.sendPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ingredientes_ingredientes__["a" /* IngredientesPage */]);
    };
    HomePage.prototype.sendPageCadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\home\home.html"*/'<div class="flex">\n  <ion-content padding>\n\n    <form id="form" [formGroup]="authForm" (ngSubmit)="submitForm()">\n      <div class="login-box">\n        <ion-item>\n          <ion-label>Usuario:</ion-label>\n          <ion-input type="text" formControlName="user"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Senha:</ion-label>\n          <ion-input type="text" formControlName="password"></ion-input>\n        </ion-item>\n      </div>\n      <button ion-button small type="submit" (click)="sendPageCadastrar()">Cadastrar</button>\n      <button ion-button small type="submit" (click)="sendPage()">Entrar</button>\n\n    </form>\n    `\n  </ion-content>\n</div>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_providers_data_providers_data__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_receita_receita__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ingredientes_ingredientes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_listagem_de_receitas_listagem_de_receitas__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_Http_Http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ingredientes_ingredientes_provider__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ingredientes_ingredientes__["a" /* IngredientesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_listagem_de_receitas_listagem_de_receitas__["a" /* ListagemDeReceitasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingredientes/ingredientes.module#IngredientesPageModule', name: 'IngredientesPage', segment: 'ingredientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listagem-de-receitas/listagem-de-receitas.module#ListagemDeReceitasPageModule', name: 'ListagemDeReceitasPage', segment: 'listagem-de-receitas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receita/receita.module#ReceitaPageModule', name: 'ReceitaPage', segment: 'receita', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ingredientes_ingredientes__["a" /* IngredientesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_listagem_de_receitas_listagem_de_receitas__["a" /* ListagemDeReceitasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_Http_Http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_providers_data_providers_data__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ingredientes_ingredientes_provider__["a" /* IngredientesProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\app\app.html"*/'<div >\n<ion-header  >\n    <ion-navbar  >\n        <ion-title >\n            <img id="imgs" src="../assets/imgs/logo.jpeg" alt="icone">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n</div>\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\andre\Documents\Workspace_vscode\thisEasy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
    }
    HttpProvider.prototype.get = function (ENDPOINT) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__["a" /* API_URL */] + ENDPOINT);
    };
    HttpProvider.prototype.getById = function (ENDPOINT, id) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__["a" /* API_URL */] + ENDPOINT + "/" + id);
    };
    HttpProvider.prototype.post = function (ENDPOINT, body) {
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__["a" /* API_URL */] + ENDPOINT, body);
    };
    HttpProvider.prototype.put = function (ENDPOINT, body) {
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__["a" /* API_URL */] + ENDPOINT, body);
    };
    HttpProvider.prototype.delete = function (ENDPOINT) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_0__assets_environments_router__["a" /* API_URL */] + ENDPOINT);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=Http.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ENDPOINTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var ENDPOINTS = {
    PEDIDOS: 'pedido',
    PRATO: 'prato',
};
var API_URL = "http://localhost:3000/";
//# sourceMappingURL=router.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the IngredientesIngredienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var IngredientesProvider = /** @class */ (function () {
    function IngredientesProvider(http) {
        this.http = http;
    }
    IngredientesProvider.prototype.IngreChecked = function (ingre) {
        var _this = this;
        ingre.forEach(function (ele) {
            if (ele.isChecked) {
                _this.ListIngredientes.push(ele);
            }
        });
    };
    IngredientesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], IngredientesProvider);
    return IngredientesProvider;
}());

//# sourceMappingURL=ingredientes-provider.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = /** @class */ (function () {
    function Data() {
        this.jsonData = [
            { "id": 1, "label": "saw", "name": "Prithivi" },
            { "id": 2, "label": "saw1", "name": "Abimanyu" },
            { "id": 3, "label": "saw2", "name": "malliga" },
            { "id": 3, "label": "saw2", "name": "Gowdaman" },
            { "id": 3, "label": "saw2", "name": "Neethi" },
            { "id": 3, "label": "saw2", "name": "abirami1" },
            { "id": 3, "label": "saw2", "name": "abirami2" },
            { "id": 3, "label": "saw2", "name": "Harrish" },
            { "id": 3, "label": "saw2", "name": "Lokesh" },
            { "id": 3, "label": "saw2", "name": "Deepak" },
            { "id": 3, "label": "saw2", "name": "malliga" },
            { "id": 3, "label": "saw2", "name": "malliga" }
        ];
    }
    Object.defineProperty(Data.prototype, "jsonData", {
        get: function () {
            return this._jsonData;
        },
        set: function (value) {
            this._jsonData = value;
        },
        enumerable: true,
        configurable: true
    });
    Data.prototype.filterItems = function (searchTerm) {
        return this.jsonData.filter(function (item) {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data);
    return Data;
}());

//# sourceMappingURL=providers-data.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map