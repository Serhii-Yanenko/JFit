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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var login_component_1 = require('./core/components/login-component/login-component');
var test_component_1 = require('./core/components/test-component/test-component');
var home_component_1 = require('./core/components/home-component/home-component');
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var registration_component_1 = require('./core/components/registration-component/registration-component');
var menu_component_1 = require('./core/components/menu-component/menu-component');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var data_chart_1 = require('./core/components/charts/data-chart');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_bootstrap_1.ModalModule,
                ng2_bootstrap_1.DropdownModule,
                ng2_charts_1.ChartsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: home_component_1.HomeComponent,
                    },
                    {
                        path: 'login',
                        component: login_component_1.LoginComponent
                    },
                    {
                        path: 'test',
                        component: test_component_1.TestComponent
                    }, {
                        path: 'registration',
                        component: registration_component_1.RegistrationComponent
                    }
                ])],
            declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, test_component_1.TestComponent, home_component_1.HomeComponent, registration_component_1.RegistrationComponent, menu_component_1.MenuComponent, data_chart_1.LineChartDemoComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map