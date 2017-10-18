listOfComponentsRoutes.$inject = ['$stateProvider'];

export function listOfComponentsRoutes($stateProvider: any) {
    $stateProvider.state('list-of-components', {
        url: '/list-of-components',
        component: 'listOfComponents'
    });
}
