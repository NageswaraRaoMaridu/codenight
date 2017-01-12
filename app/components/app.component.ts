/**
 * Created by nrmaridu on 20/12/16.
 */

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.template.html',
    styleUrls: ['app/styles/app.component.css'],
})
export class AppComponent implements OnInit{
    title = 'Tour of Heroes';

    ngOnInit(){
        console.log("***** Initializigin the  app component **********");
    }
}