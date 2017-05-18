"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var jeu_component_1 = require("./jeu.component");
var common_1 = require("@angular/common");
var map_component_1 = require("../Map/map.component");
var map_module_1 = require("../Map/map.module");
var forms_1 = require("@angular/forms");
var Jeu = (function () {
    function Jeu() {
    }
    return Jeu;
}());
Jeu = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            map_module_1.MapModule,
            forms_1.FormsModule
        ],
        declarations: [jeu_component_1.JeuComponent, map_component_1.MapComponent],
    })
], Jeu);
exports.Jeu = Jeu;
//# sourceMappingURL=jeu.module.js.map