(function() {
    angular.module('loc8trApp', ['ngRoute']);

    function config($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .when('/about', {
            templateUrl: '/common/views/genericText.view.html',
            controller: 'aboutCtrl',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});

       $locationProvider.html5Mode(true);
    }

    angular
    .module('loc8trApp')
    .config(['$routeProvider', '$locationProvider',config]);
})();