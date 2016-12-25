/**
 * Created by nrmaridu on 20/12/16.
 */

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from '../beans/hero';
import { HeroService }  from '../services/hero.service';
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: '../templates/hero-detail.template.html',
    styleUrls: [ '../styles/hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    id: number;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {

        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });

        this.hero = <Hero> this.heroService.getHero(this.id);

        /*this.route.params
            .map((params:Params) => params['id'])
            .switchMap(params => this.heroService.getHero(params['id']))
            .subscribe(hero => this.hero = hero);*/
    }

    goBack(): void {
        this.location.back();
    }
}
