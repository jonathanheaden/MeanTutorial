(function (){

    angular
      .module('loc8trApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

    locationDetailCtrl.$inject = ['$routeParams', '$modal','loc8trData'];
    function locationDetailCtrl($routeParams, $modal, loc8trData){
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
        vm.popupReviewForm = function () {
            var modalInstance = $modal.open({
                templateUrl:'/reviewModal/reviewModal.view.html',
                controller: 'reviewModalCtrl as vm',
                resolve: {
                    locationData : function() {
                        return {
                            locationid: vm.locationid,
                            locationName : vm.data.location.name
                        };
                    }
                }
            });
        };
    }
})();