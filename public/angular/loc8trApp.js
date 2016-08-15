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
    $scope.data = {
        locations: loc8trData
    };
};

var loc8trData = function() {
    return [{
                   
            "distance": 0.120,
            "name": "Bean Blue",
            "address": "Collins Street, Melbourne",
            "rating": 3,
            "facilities": [
            "good coffee",
            " power",
            " wifi"
            ],
            "_id": "57a97e4c95355ad3537ca56e"
    }];
}
angular 
    .module('loc8trApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8trData',loc8trData);

