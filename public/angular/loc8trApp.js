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

var locationListCtrl = function($scope, loc8trData){
    $scope.message = "Searching for nearby places"
    loc8trData
       .success(function(data){
           $scope.message = data.length > 0 ? "" : "No nearby places found"
           $scope.data = { locations: data };
    })
        .error(function (e){
            $scope.message = "something went wrong";
            console.log(e);
        });
};

var loc8trData = function($http) {
    return $http.get('api/locations?lng=3.9690884&lat=-1.9690884&maxdistance=20')
}

angular 
    .module('loc8trApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8trData',loc8trData);

