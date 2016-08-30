(function(){
    angular
      .module('loc8trApp')
      .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location','authentication'];
    function loginCtrl($location,authentication) {
        var vm = this;

        vm.pageHeader = {
            title : 'Login with your Loc8tr account'
        };
        vm.credentials = {
            email: "",
            password: ""
        };
        vm.returnPage = $location.search().page || '/';

        vm.onSubmit = function() {
            vm.formError = "";
            if (!vm.credentials.email || !vm.credentials.password) {
                vm.formError = "All fields requires, please try again";
                return false;
            } else {
                vm.dologin();
            }
        };

        vm.dologin = function(){
            vm.formError = "";
            authentication
              .login(vm.credentials)
              .error(function(err){
                  vm.formError = err;
              })
              .then(function(){
                  $location.search('page', null);
                  $location.path(vm.returnPage);
              });
        };
    }
})();