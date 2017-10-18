type DatePickerAction = {
    $event: {
        info: { 
            title: string, 
            action: string,
            value: string 
        }
    }
}

export class DatePickerController {
    public onComponentSelected: ($event: DatePickerAction) => void;

    public sendInfoToParent() {
        const event = {
            $event: {
                info: {
                    title: 'date-picker',
                    action: 'action from date-picker',
                    value: 'valaue from date-picker'
                }
            }
        };
        this.onComponentSelected(event);
    }
}
