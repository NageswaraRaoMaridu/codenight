/**
 * Created by nrmaridu on 20/12/16.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from '../app/components/app.component';
import { DashboardComponent }   from '../app/components/dashboard.component';
import { HeroDetailComponent }  from '../app/components/hero-detail.component';
import { HeroesComponent }      from '../app/components/heroes.component';
import { HeroService }          from '../app/services/hero.service';
import {DiaryComponent}         from "../app/components/diary.component";
import {HeaderComponent}        from "../app/components/header.component";

import { AppRoutingModule }     from './app-routing.module';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeaderComponent,
        DiaryComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }