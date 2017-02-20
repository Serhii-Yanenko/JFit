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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.baseUrl = "http://127.0.0.1:5000/api";
        this.loginResponse = new LoginResponseModel(false, "");
    }
    LoginService.prototype.doLogin = function (loginModel) {
        console.log("inside data service");
        console.log("user email" + loginModel.email);
        console.log("user password" + loginModel.password);
        var body = JSON.stringify({ 'username': loginModel.email, 'password': loginModel.password });
        var headers = this.getHeaders();
        return this.http.post("http://127.0.0.1:5000/api/login", body, { headers: headers }).map(function (response) { return response.json(); });
    };
    LoginService.prototype.doRegister = function (registrationUser) {
        var body = JSON.stringify({
            'firstname': registrationUser.FirstName, 'secondname': registrationUser.SecondName,
            'email': registrationUser.email, 'password': registrationUser.password
        });
        var headers = this.getHeaders();
        return this.http.post("http://127.0.0.1:5000/api/register", body, { headers: headers }).map(function (response) { return response.json(); });
    };
    LoginService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    LoginService.prototype.isLogged = function () {
        return this.http.get("http://127.0.0.1:5000/api/isautherndicated", { headers: this.getHeaders() })
            .map(function (response) { return response.json(); });
    };
    LoginService.prototype.doLogout = function () {
        console.log("logout");
        return this.http.get("http://127.0.0.1:5000/api/logout", { headers: this.getHeaders() }).map(function (response) { return response.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
var LoginResponseModel = (function () {
    function LoginResponseModel(isLogged, email) {
        this.isLogged = isLogged;
        this.email = email;
    }
    return LoginResponseModel;
}());
exports.LoginResponseModel = LoginResponseModel;
//# sourceMappingURL=login-service.js.map