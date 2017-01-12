/**
 * Created by nrmaridu on 27/12/16.
 */


import {Component, OnInit} from "@angular/core";


@Component({
    selector : 'header-section',
    templateUrl : 'app/templates/header.template.html',
    styleUrls : ['app/styles/header.css']
})
export class HeaderComponent implements OnInit{
    ngOnInit(){
        console.log("Header block is initialized");
    }
}
