/**
 * Created by nrmaridu on 20/12/16.
 */

import { Component, OnInit } from '@angular/core';

import { Hero } from '../beans/hero';
import { HeroService } from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: '../templates/dashboard.template.html',
    styleUrls: [ '../styles/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes();
    }
}

