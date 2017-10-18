import * as angular from 'angular';

import { DatePicker } from './date-picker.component';

export const datePickerModule = angular
    .module('app.components.shared.datePicker', [])
    .component('datePicker', DatePicker)
    .name;
