/**
 * Created by nrmaridu on 27/12/16.
 */


import {Component, OnInit} from "@angular/core";


@Component({
    moduleId : module.id,
    selector : 'header-section',
    templateUrl : '../templates/header.template.html',
    styleUrls : ['../styles/header.css']
})
export class HeaderComponent implements OnInit{
    ngOnInit(){
        console.log("Header block is initialized");
    }
}
