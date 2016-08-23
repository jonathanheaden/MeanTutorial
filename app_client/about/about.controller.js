(function(){
    angular
      .module('loc8trApp')
      .controller('aboutCtrl',aboutCtrl);

    function aboutCtrl(){
        var vm = this;

        vm.pageHeader = {
            title: 'About Loc8tr',
        };
        vm.main = {
            content: 'Loc8tr was created to help people find places to sit down and work.\n\n Lorem ipsum etc etc'
        };
    }
})();