/**
 * Created by nrmaridu on 20/12/16.
 */
// main entry point
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);