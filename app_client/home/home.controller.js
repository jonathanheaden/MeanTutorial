(function() {
    angular
      .module('loc8trApp')
      .controller('homeCtrl', homeCtrl);
    
    homeCtrl.$inject = ['$scope','loc8trData','geolocation'];
    function homeCtrl($scope, loc8trData, geolocation) {
        var vm = this;
        vm.pageHeader = {
            title: 'Loc8tr',
            strapline: 'Find places to work with wifi'
        };
        vm.sidebar = {
            content: "Looking for wifi and a seat etc etc"
        };

        vm.message = "Checking your location";
        
        vm.getData = function (position) {
            var lat = position.coords.latitude,
                lng = position.coords.longitude;
            vm.message = "Searching for nearby places";
            loc8trData.locationByCoords(lat,lng)
            .success(function(data){
                vm.message = data.length > 0 ? "" : "No nearby places found"
                vm.data = { locations: data };
            })
                .error(function (e){
                    vm.message = "something went wrong";
                    console.log(e);
                });
        };

        vm.showError = function(error){

            $scope.$apply(function(){
                vm.message = "using the hardcoded coordinates"
                    var lng = 3.969085,
                        lat = -1.9690887;
                    loc8trData.locationByCoords(lat,lng)
                    .success(function(data){
                        vm.message = data.length > 0 ? "" : "No nearby places found"
                        vm.data = { locations: data };
                    })
                        .error(function (e){
                            vm.message = "something went wrong";
                            console.log(e);
                        });
                });
    
        };

        vm.noGeo = function(){
            $scope.$apply(function(){
                vm.message = "GeoLocation not available";
            });
        };

        geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);
    }
})();