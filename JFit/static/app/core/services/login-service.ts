import {Injectable} from '@angular/core';
import {LoginModel} from '../components/login-component/login-model';
import {RegistrationModel} from '../components/registration-component/registration-component';
import {Http, Headers, Request, Response} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class LoginService {
    private baseUrl:string = "http://127.0.0.1:5000/api";
    private loginResponse:LoginResponseModel;

    constructor(private http:Http) {
        this.loginResponse = new LoginResponseModel(false, "");
    }

    doLogin(loginModel:LoginModel) {
        console.log("inside data service");

        console.log("user email" + loginModel.email);
        console.log("user password" + loginModel.password);
        var body = JSON.stringify({'username': loginModel.email, 'password': loginModel.password});
        var headers = this.getHeaders();
        return this.http.post("http://127.0.0.1:5000/api/login", body, {headers: headers}).map((response:Response)=>response.json());


    }

    doRegister(registrationUser:RegistrationModel) {
        var body = JSON.stringify({
            'firstname': registrationUser.FirstName, 'secondname': registrationUser.SecondName,
            'email': registrationUser.email, 'password': registrationUser.password
        });
        var headers = this.getHeaders();
        return this.http.post("http://127.0.0.1:5000/api/register", body, {headers: headers}).map((response:Response)=> response.json());
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    public isLogged() {
        return this.http.get("http://127.0.0.1:5000/api/isautherndicated", {headers: this.getHeaders()})
            .map((response)=>response.json());
    }

    public doLogout() {
        console.log("logout");
        return this.http.get("http://127.0.0.1:5000/api/logout", {headers: this.getHeaders()}).map((response)=>response.json());
    }
}


export class LoginResponseModel{
    constructor(public isLogged:boolean, public email: string){}
}

