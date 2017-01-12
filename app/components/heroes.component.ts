/**
 * Created by nrmaridu on 20/12/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../beans/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.template.html',
    styleUrls: [ 'app/styles/heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}