(function (){
    angular
      .module('loc8trApp')
      .controller('reviewModalCtrl',reviewModalCtrl);

    reviewModalCtrl.$inject = ['$modalInstance'];
    function reviewModalCtrl ($modalInstance){
        var vm = this;

        vm.modal = {
            cancel : function() {
                $modalInstance.dismiss('cancel');
            }
        };
    }
})();