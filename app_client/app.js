angular.module('loc8trApp', ['ngRoute']);

function config($routeProvider){
    $routeProvider
       .when('/', {
       })
       .otherwise({redirectTo: '/'});
}

angular
   .module('loc8trApp')
   .config(['$routeProvider', config]);