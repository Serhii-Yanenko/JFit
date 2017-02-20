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
var login_model_1 = require('./login-model');
var login_service_1 = require('../../services/login-service');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.title = "Login";
        this.logged_info = "";
        this.loginResponse = new login_service_1.LoginResponseModel(false, "");
        this.user = new login_model_1.LoginModel("", "");
        this.loginService.isLogged().subscribe(function (response) {
            if (response.isLogged) {
                _this.isAuthendicated = true;
                _this.logged_info = "Logged as: " + response.email;
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        console.log("do login");
        this.loginService.doLogin(this.user)
            .subscribe(function (response) {
            _this.loginResponse.email = response.email;
            _this.loginResponse.isLogged = response.isLogged;
            console.log("response rocessing");
            if (_this.loginResponse.isLogged) {
                _this.logged_info = "Logged as :" + _this.loginResponse.email;
                console.log(_this.logged_info);
                _this.isAuthendicated = true;
                console.log(_this.isAuthendicated);
                _this.hideLoginModal();
            }
            else {
                console.log("Incorrect credentials");
            }
        });
        //let link = ["/"];
        //this.router.navigate(link)
    };
    LoginComponent.prototype.showLoginModal = function () {
        console.log("login window show");
        this.loginModal.show();
    };
    LoginComponent.prototype.hideLoginModal = function () {
        console.log("Login modal hide");
        this.loginModal.hide();
    };
    LoginComponent.prototype.doLogout = function () {
        var _this = this;
        console.log("logout component");
        this.loginService.doLogout().subscribe(function (response) {
            _this.isAuthendicated = false;
            _this.logged_info = "";
        });
    };
    __decorate([
        core_1.ViewChild('loginModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], LoginComponent.prototype, "loginModal", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: '/static/app/core/components/login-component/login-component.html',
            styleUrls: ['/static/app/core/components/login-component/login-component.css'],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login-component.js.map