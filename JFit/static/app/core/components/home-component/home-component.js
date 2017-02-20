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
var login_component_1 = require('../login-component/login-component');
var registration_component_1 = require('../registration-component/registration-component');
var HomeComponent = (function () {
    function HomeComponent() {
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent.prototype.showLoginModal = function () {
        this.loginComponent.showLoginModal();
    };
    HomeComponent.prototype.showRegistrationModal = function () {
        this.registrationComponent.registrationModalShow();
    };
    __decorate([
        core_1.ViewChild(login_component_1.LoginComponent), 
        __metadata('design:type', login_component_1.LoginComponent)
    ], HomeComponent.prototype, "loginComponent", void 0);
    __decorate([
        core_1.ViewChild(registration_component_1.RegistrationComponent), 
        __metadata('design:type', registration_component_1.RegistrationComponent)
    ], HomeComponent.prototype, "registrationComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: '/static/app/core/components/home-component/home-component.html',
            styleUrls: ['/static/app/core/components/home-component/home-component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home-component.js.map