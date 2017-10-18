type DataFromComponents = {
    title: string,
    action: string, 
    value: string
}

export class ListOfComponentsController {
    private dataFromComponents: DataFromComponents;

    public $onInit() {
        this.dataFromComponents = {
            title: 'initTitle',
            action: 'initAction', 
            value: 'initValue'
        };
    }

    public changeDataFromComponents({info}): void {
        this.dataFromComponents = this.dataFromComponents = {
            title: info.title,
            action: info.action, 
            value: info.value
        }; 
    }
}
