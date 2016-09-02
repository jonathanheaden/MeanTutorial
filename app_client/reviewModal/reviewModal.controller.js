(function (){
    angular
      .module('loc8trApp')
      .controller('reviewModalCtrl',reviewModalCtrl);

    reviewModalCtrl.$inject = ['$modalInstance','loc8trData','locationData'];
    function reviewModalCtrl ($modalInstance, loc8trData, locationData){
        var vm = this;
        vm.locationData = locationData;
        
        vm.modal = {
            close : function(result){
                $modalInstance.close(result);
            },
            cancel : function() {
                $modalInstance.dismiss('cancel');
            }
        };
        vm.onSubmit = function () {
            console.log(vm.formData)
            vm.formError="";
            if(!vm.formData.rating || !vm.formData.reviewText) {
                vm.formError = "All fields required! please try again";
                return false;
            } else {
                vm.doAddReview(vm.locationData.locationid, vm.formData);
            }
        };
        vm.doAddReview = function(locationid,formData){
            loc8trData.addReviewById(locationid, {
                rating: formData.rating,
                reviewText: formData.reviewText
            })
            .success(function (data) {
                vm.modal.close(data);
            })
            .error(function(data) {
                console.log(data)
                vm.formError = "Your review was not saved! Please try again";
            });
            return false
        };
    }
})();