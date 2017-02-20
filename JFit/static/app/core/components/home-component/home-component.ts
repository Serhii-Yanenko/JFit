import {Component, ViewChild,OnInit, AfterViewInit} from '@angular/core';
import {LoginComponent} from '../login-component/login-component';
import {RegistrationComponent} from '../registration-component/registration-component';
import {MenuComponent} from '../menu-component/menu-component';
import {LineChartDemoComponent} from '../charts/data-chart';

@Component({
    selector: 'home-component',
    templateUrl: '/static/app/core/components/home-component/home-component.html',
    styleUrls: ['/static/app/core/components/home-component/home-component.css']
})

export class HomeComponent implements  OnInit, AfterViewInit{
    @ViewChild(LoginComponent) private  loginComponent: LoginComponent;
    @ViewChild(RegistrationComponent) private  registrationComponent: RegistrationComponent;
    constructor(){};
    ngOnInit(){

    }
    ngAfterViewInit(){

    }
    showLoginModal(){
        this.loginComponent.showLoginModal();
    }
    showRegistrationModal(){
        this.registrationComponent.registrationModalShow();
    }
}

