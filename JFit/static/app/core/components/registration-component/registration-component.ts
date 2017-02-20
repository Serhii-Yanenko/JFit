import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {LoginService} from '../../services/login-service'
@Component({
    selector: 'registration-component',
    templateUrl: 'static/app/core/components/registration-component/registration-component.html',
    styleUrls: ['static/app/core/components/registration-component/registration-component.css'],
    providers: [LoginService]
})

export class RegistrationComponent{
    @ViewChild('registrationModal') public registrationModal:ModalDirective;
    register_info: String="";
    constructor(private loginService: LoginService){
        
    }
    registrationModalShow(){
        this.registrationModal.show();
    }
    doRegister(){
        console.log(this.user);
        if(this.user.password==this.user.confirmPassword){
            console.log("register user");
            this.loginService.doRegister(this.user).subscribe(
                (response: RegistrationResponseModel)=>{
                    console.log(response);
                    if(response.isregistered){
                        this.registrationModal.hide();
                    }else{

                    }
                }
            );
            
        }
    }
    registrationModalHide(){

            this.registrationModal.hide();
    }
    user = new RegistrationModel("", "", "", "", "");
}
export class RegistrationModel{
    constructor(public FirstName:string, public SecondName:string,
                public email:string, public password: string, public confirmPassword: string){

    }
}

export class RegistrationResponseModel{
    constructor(public email: string, public isregistered:boolean){}
}