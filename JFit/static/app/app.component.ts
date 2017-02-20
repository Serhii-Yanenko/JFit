import {Component} from '@angular/core';
import {LoginComponent} from './core/components/login-component/login-component';
import  {TestComponent} from './core/components/test-component/test-component';

@Component({
    selector: 'my-app',
    template: `<h1>First Angular App</h1>
                <router-outlet></router-outlet>`
})

export class AppComponent{}
