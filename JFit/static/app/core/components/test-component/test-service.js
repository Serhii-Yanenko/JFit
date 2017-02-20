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
var TestService = (function () {
    function TestService(http) {
        this.http = http;
    }
    TestService.prototype.getPersons = function () {
        console.log("http://127.0.0.1:5000/api/content");
        return this.http.get("http://127.0.0.1:5000/api/content", { headers: this.getHeaders() })
            .map(function (responce) { return responce.json(); });
    };
    TestService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        console.log("Headers");
        return headers;
    };
    TestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
var Person = (function () {
    function Person(id, name, height, weight, profession) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.profession = profession;
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=test-service.js.map