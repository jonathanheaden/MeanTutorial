angular.module('loc8trApp', []);

var _isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function(){
    return function (distance){
        var numDistance, unit;
        if (distance && _isNumeric(distance)) {
            if (distance > 1) {
                numDistance = parseFloat(distance).toFixed(1);
                unit = 'km'
            } else {
                numDistance = parseInt(distance * 1000,10);
                unit = 'm'
            }
            return numDistance + unit;
        } else {
            return "?";
        }
    };
};

var ratingStars = function(){
    return {
        scope: {
            thisRating: '=rating'
        },
        templateUrl: '/angular/rating-stars.html'
    };
};

var locationListCtrl = function($scope, loc8trData, geolocation){
    $scope.message = "Checking your location";
    
    $scope.getData = function (position) {
        var lat = position.coords.latitude,
            lng = position.coords.longitude;
        $scope.message = "Searching for nearby places";
        loc8trData.locationByCoords(lat,lng)
        .success(function(data){
            $scope.message = data.length > 0 ? "" : "No nearby places found"
            $scope.data = { locations: data };
        })
            .error(function (e){
                $scope.message = "something went wrong";
                console.log(e);
            });
    };

    $scope.showError = function(error){
       // proper error handling code needs to re commented to fake the location for non-connected development
       // $scope.$apply(function(){
       //     $scope.message = error.message;
       // });
       $scope.$apply(function(){
               $scope.message = "using the hardcoded coordinates"
                var lng1 = 3.969085,
                    lat1 = -1.9690887;
                loc8trData.locationByCoords(lat,lng)
                .success(function(data){
                    $scope.message = data.length > 0 ? "" : "No nearby places found"
                    $scope.data = { locations: data };
                })
                    .error(function (e){
                        $scope.message = "something went wrong";
                        console.log(e);
                    });
            });
   
    };

    $scope.noGeo = function(){
        $scope.$apply(function(){
            $scope.message = "GeoLocation not available";
        });
    };

    geolocation.getPosition($scope.getData, $scope.showError, $scope.noGeo);
};

var loc8trData = function($http) {
    var locationByCoords = function(lat, lng) {
        return $http.get('api/locations?lng=' + lng +'&lat='+lat +'&maxdistance=20')
    };
    return {
        locationByCoords : locationByCoords
    };
};

var geolocation = function() {
    var getPosition = function(cbSuccess, cbError, cbNoGeo) {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
        }  else {
            cbNoGeo();
        }
    };
    return {
        getPosition : getPosition
    };
};

angular 
    .module('loc8trApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8trData', loc8trData)
    .service('geolocation', geolocation);

