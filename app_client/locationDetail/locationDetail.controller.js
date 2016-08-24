(function (){

    angular
      .module('loc8trApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

    locationDetailCtrl.$inject = ['$routeParams'];
    function locationDetailCtrl($routeParams){
        var vm = this;

        vm.locationid = $routeParams.locationid;
        vm.pageHeader = {
            title: vm.location
        };
    }
})();