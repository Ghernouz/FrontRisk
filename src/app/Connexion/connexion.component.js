"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { NgForm } from "@angular/forms";
var connexion_service_1 = require("./connexion.service");
var router_1 = require('@angular/router');
var ConnectForm = (function () {
    function ConnectForm(ConnexionService, router) {
        this.ConnexionService = ConnexionService;
        this.router = router;
        this.title = "Risk-IO";
        this.a = 3;
    }
    ConnectForm.prototype.checkpass = function (form) {
        console.log(form.value);
        var current_instance = this;
        this.ConnexionService.PostConnexion(form).then(function (bool) {
            if (bool) {
                current_instance.redirect();
            }
            else {
                console.log('FALSE');
            }
        });
    };
    ;
    ConnectForm.prototype.redirect = function () {
        this.router.navigateByUrl('home');
        return 0;
    };
    ;
    ConnectForm = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-connect-form',
            templateUrl: './connexion.component.html',
            styleUrls: ['./connexion.component.css'],
            providers: [connexion_service_1.ConnexionService]
        }), 
        __metadata('design:paramtypes', [connexion_service_1.ConnexionService, router_1.Router])
    ], ConnectForm);
    return ConnectForm;
}());
exports.ConnectForm = ConnectForm;
//# sourceMappingURL=connexion.component.js.map