import * as angular from 'angular';

import { listOfComponentsRoutes } from './list-of-components.config';

import { ListOfComponents } from './list-of-components.component';

export const listOfComponentsModule = angular
    .module('app.components.listOfComponents', [])
    .component('listOfComponents', ListOfComponents)
    .config(listOfComponentsRoutes)
    .name;
