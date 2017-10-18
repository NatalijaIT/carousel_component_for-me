import * as angular from 'angular';

import { datePickerModule } from './date-picker/date-picker.module';

export const sharedModule = angular
    .module('app.components.shared', [datePickerModule])
    .name;
