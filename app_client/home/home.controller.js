angular
  .module('loc8trApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl($scope) {
    $scope.pageHeader = {
        title: 'Loc8tr',
        strapline: 'Find places to wrok with wifi'
    };
    $scope.sidebar = {
        content: "Looking for wifi and a seat etc etc"
    };
}