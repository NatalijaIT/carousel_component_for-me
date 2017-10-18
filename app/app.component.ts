export const AppComponent: angular.IComponentOptions  = {
    template: `
        <header></header>
        <div>
            <div ui-view><a ui-sref="list-of-components">ui components</a></div>
        </div>
        <footer></footer>
    `
};
