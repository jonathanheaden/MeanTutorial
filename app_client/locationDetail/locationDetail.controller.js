(function (){

    angular
      .module('loc8trApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

    locationDetailCtrl.$inject = ['$routeParams', 'loc8trData'];
    function locationDetailCtrl($routeParams, loc8trData){
        var vm = this;

        vm.locationid = $routeParams.locationid;
        loc8trData.locationById(vm.locationid)
          .success(function(data){
              vm.data = { location : data };
              vm.pageHeader = {
                  title : vm.data.location.name
              };
          })
          .error(function(e){
              console.log(e);
          });
    }
})();