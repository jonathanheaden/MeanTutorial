(function(){
    angular
      .module('loc8trApp')
      .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$location','authentication'];
    function registerCtrl($location,authentication) {
        var vm = this;

        vm.pageHeader = {
            title : 'Create new Loc8tr account'
        };
        vm.credentials = {
            name: "",
            email: "",
            password: ""
        };
        vm.returnPage = $location.search().page || '/';

        vm.onSubmit = function() {

        };
    }
})();