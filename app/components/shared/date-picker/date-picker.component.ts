import { DatePickerController } from './date-picker.controller';

export const DatePicker: angular.IComponentOptions = {
    template:  require('./date-picker.component.html'),
    bindings: {
        onComponentSelected: '&'
    },
    controller: DatePickerController
};
