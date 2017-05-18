"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jeu_component_1 = require("../Jeu/jeu.component");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var jeu_module_1 = require("../Jeu/jeu.module");
var connexion_component_1 = require("../Connexion/connexion.component");
var forms_1 = require("@angular/forms");
var menu_module_1 = require("../Menu/menu.module");
var menu_component_1 = require("../Menu/menu.component");
var ConnexionPage = (function () {
    function ConnexionPage() {
    }
    return ConnexionPage;
}());
ConnexionPage = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            jeu_module_1.Jeu,
            menu_module_1.MenuModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: menu_component_1.MenuComponent }, { path: 'game', component: jeu_component_1.JeuComponent }
            ])
        ],
        declarations: [connexion_component_1.ConnectForm],
    })
], ConnexionPage);
exports.ConnexionPage = ConnexionPage;
//# sourceMappingURL=connexion.module.js.map