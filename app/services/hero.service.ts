/**
 * Created by nrmaridu on 20/12/16.
 */
import { Hero } from '../beans/hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
    getHeroes() {
        return HEROES;
    }

    getHeroesSlowly(){
        return this.getHeroes();
    }

    getHero(id : number) {
        let heroes = this.getHeroes();
        for(let item of heroes){
            if(id == item.id){

                return item;
            }
        }
        return {};
    }
}