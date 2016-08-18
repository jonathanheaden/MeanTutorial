angular.module('loc8trApp', ['ngRoute']);

function config($routeProvider){
    $routeProvider
       .when('/', {
           templateUrl: 'home/home.view.html',
           controller: 'homeCtrl',
           controlerAs: 'vm'
       })
       .otherwise({redirectTo: '/'});
}

angular
   .module('loc8trApp')
   .config(['$routeProvider', config]);