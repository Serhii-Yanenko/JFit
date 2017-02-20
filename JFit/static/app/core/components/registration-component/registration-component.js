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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var login_service_1 = require('../../services/login-service');
var RegistrationComponent = (function () {
    function RegistrationComponent(loginService) {
        this.loginService = loginService;
        this.register_info = "";
        this.user = new RegistrationModel("", "", "", "", "");
    }
    RegistrationComponent.prototype.registrationModalShow = function () {
        this.registrationModal.show();
    };
    RegistrationComponent.prototype.doRegister = function () {
        var _this = this;
        console.log(this.user);
        if (this.user.password == this.user.confirmPassword) {
            console.log("register user");
            this.loginService.doRegister(this.user).subscribe(function (response) {
                console.log(response);
                if (response.isregistered) {
                    _this.registrationModal.hide();
                }
                else {
                }
            });
        }
    };
    RegistrationComponent.prototype.registrationModalHide = function () {
        this.registrationModal.hide();
    };
    __decorate([
        core_1.ViewChild('registrationModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], RegistrationComponent.prototype, "registrationModal", void 0);
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration-component',
            templateUrl: 'static/app/core/components/registration-component/registration-component.html',
            styleUrls: ['static/app/core/components/registration-component/registration-component.css'],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
var RegistrationModel = (function () {
    function RegistrationModel(FirstName, SecondName, email, password, confirmPassword) {
        this.FirstName = FirstName;
        this.SecondName = SecondName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return RegistrationModel;
}());
exports.RegistrationModel = RegistrationModel;
var RegistrationResponseModel = (function () {
    function RegistrationResponseModel(email, isregistered) {
        this.email = email;
        this.isregistered = isregistered;
    }
    return RegistrationResponseModel;
}());
exports.RegistrationResponseModel = RegistrationResponseModel;
//# sourceMappingURL=registration-component.js.map