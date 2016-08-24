(function() {
    angular
      .module('loc8trApp')
      .service('loc8trData', loc8trData);

    loc8trData.$inject = ['$http'];
    function loc8trData($http) {
        var locationByCoords = function(lat, lng) {
            return $http.get('/api/locations?lng='+lng+'&lat='+lat+'&maxdistance=20');
        };
        var locationById = function(locationid){
            return $http.get('/api/locations/'+locationid);
        };
        return {
            locationByCoords : locationByCoords,
            locationById : locationById
        };
    }

})();