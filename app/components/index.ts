import * as angular from 'angular';

import { listOfComponentsModule } from './list-of-components/list-of-components.module';
import { sharedModule } from './shared/shared.module';

export const componentsModule = angular
    .module('app.components', [
        listOfComponentsModule,
        sharedModule
    ])
    .name;
