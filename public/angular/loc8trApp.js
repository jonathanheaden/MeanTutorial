angular.module('loc8trApp', []);


var locationListCtrl = function($scope){
    $scope.data = {
        locations: [{              
            "distance": 0,
            "name": "Sargon 11",
            "address": "Collins Street, Melbourne",
            "rating": 3,
            "facilities": [
            "good coffee",
            " power",
            " wifi"
            ],
            "_id": "57a97e4c95355ad3537ca56e"
        },
        {
            "distance": 0.0033799187040212883,
            "name": "Great Space 22",
            "address": "Collins Street, Melbourne",
            "rating": 4,
            "facilities": [
            "good coffee",
            " power",
            " wifi, cakes"
            ],
            "_id": "57aa441c5ec03d635c4339a9"
        }]
    };
};

angular 
    .module('loc8trApp')
    .controller('locationListCtrl', locationListCtrl);

