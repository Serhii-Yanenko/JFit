import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response} from '@angular/http'
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

@Injectable()
export class TestService{
    constructor(private http: Http){

    }
    content: Person[];
    getPersons(){
        console.log("http://127.0.0.1:5000/api/content");
        return this.http.get("http://127.0.0.1:5000/api/content",{headers:this.getHeaders()})
            .map(responce=>responce.json());
            
       
    }

    private getHeaders(){
        let headers= new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        console.log("Headers");
        return headers;
    }
}

export class Person{
    constructor(
        public id: number,
        public name: string,
        public height: number,
        public weight: number,
        public profession: string
    ){

    }
}

