import {Component, OnInit} from '@angular/core';
import {TestService,Person} from './test-service';
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'test-component',
    templateUrl: '/static/app/core/components/test-component/test-component.html',
    providers:[TestService]
})

export class TestComponent implements OnInit{
    private persons: Person[];
    constructor(private ds:TestService){
        //this.ds.getPersons().subscribe(persons=>this.persons=persons);
    }
    getData(){
        this.ds.getPersons().subscribe(persons=>this.persons=persons);

    }
    ngOnInit(){
        

    }
}

