(function (){

    angular
      .module('loc8trApp')
      .controller('locationDetailCtrl', locationDetailCtrl);

    function locationDetailCtrl(){
        var vm = this;

        vm.pageHeader = {
            title: 'Location Detail Page'
        };
    }
})();