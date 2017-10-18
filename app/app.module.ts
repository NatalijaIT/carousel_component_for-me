import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { appRoutes } from './app.config';

import { componentsModule } from './components/index';

import { AppComponent } from './app.component';

export const root = angular
    .module('app', [
        uiRouter,
        componentsModule
    ])
    .component('app', AppComponent)
    .config(appRoutes)
    .name;
