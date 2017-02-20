import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import  {LoginComponent} from './core/components/login-component/login-component';
import {TestComponent} from './core/components/test-component/test-component';
import {HomeComponent} from './core/components/home-component/home-component';
import {bootstrap} from "@angular/upgrade/src/angular_js";
import {FormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {ModalModule, DropdownModule} from 'ng2-bootstrap/ng2-bootstrap';
import {RegistrationComponent} from './core/components/registration-component/registration-component';
import {MenuComponent} from './core/components/menu-component/menu-component';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {LineChartDemoComponent} from './core/components/charts/data-chart';
@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule,
        DropdownModule,
        ChartsModule,
    RouterModule.forRoot(
        [
            {
                path:'',
                component:HomeComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'test',
                component: TestComponent
            }, {
            path: 'registration',
            component: RegistrationComponent
        }
        ]
    )],
    declarations: [AppComponent, LoginComponent, TestComponent, HomeComponent, RegistrationComponent, MenuComponent, LineChartDemoComponent],
    
    bootstrap: [AppComponent]
})

export class AppModule{}

