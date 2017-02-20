import {Component, Input, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {LoginModel} from './login-model';
import {LoginService, LoginResponseModel} from '../../services/login-service';
import {Router} from '@angular/router';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'login-component',
    templateUrl:'/static/app/core/components/login-component/login-component.html',
    styleUrls: ['/static/app/core/components/login-component/login-component.css'],
    providers: [LoginService]
})

export class LoginComponent implements OnInit, AfterViewInit{
    title: string="Login";
    isAuthendicated: boolean;
    logged_info:String="";
    loginResponse: LoginResponseModel = new LoginResponseModel(false, "");
    @ViewChild('loginModal') public loginModal:ModalDirective;
    constructor(private router: Router,private loginService: LoginService) {
        this.loginService.isLogged().subscribe((response:LoginResponseModel)=>{
            if(response.isLogged){
                this.isAuthendicated = true;
                this.logged_info = "Logged as: "+response.email;
            }
        });
    }
    ngOnInit(){

    }
    ngAfterViewInit() {

    }

    user=new LoginModel("", "");
    doLogin() {
        console.log("do login");
        this.loginService.doLogin(this.user)
            .subscribe((response:LoginResponseModel)=>{this.loginResponse.email=response.email;
                                                        this.loginResponse.isLogged=response.isLogged;
                                                        console.log("response rocessing");
                                                        if(this.loginResponse.isLogged){
                                                            this.logged_info="Logged as :"+this.loginResponse.email;
                                                            console.log(this.logged_info);
                                                            this.isAuthendicated = true;
                                                            console.log(this.isAuthendicated);
                                                            this.hideLoginModal();
                                                        } else{
                                                            console.log("Incorrect credentials");
                                                        }
                                                        });
        //let link = ["/"];
        //this.router.navigate(link)

    }
    public showLoginModal():void {
        console.log("login window show");
        this.loginModal.show();
    }

    public hideLoginModal():void{
        console.log("Login modal hide");
        this.loginModal.hide();
    }
    public doLogout(){
        console.log("logout component");
        this.loginService.doLogout().subscribe((response:LoginResponseModel)=>{
            this.isAuthendicated = false;
            this.logged_info="";
        });

    }
}

