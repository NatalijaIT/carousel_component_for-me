appRoutes.$inject = ['$stateProvider', '$locationProvider'];

export function appRoutes($stateProvider: any, $locationProvider: angular.ILocationProvider) {
    $stateProvider.state('app', {
        url: '/',
        component: 'app'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
