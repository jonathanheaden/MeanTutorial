(function(){
    angular
      .module('loc8trApp')
      .directive('navigation', navigation);

    function navigation(){
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html'
        };
    }  
})();