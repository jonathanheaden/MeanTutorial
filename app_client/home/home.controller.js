angular
  .module('loc8trApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl($scope) {
    var vm = this;
    vm.pageHeader = {
        title: 'Loc8tr',
        strapline: 'Find places to wrok with wifi'
    };
    vm.sidebar = {
        content: "Looking for wifi and a seat etc etc"
    };
}