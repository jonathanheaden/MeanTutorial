(function(){
    angular
      .module('loc8trApp')
      .service('authentication', authentication);
    
    authentication.$inject = ['$window'];
    function authentication ($window){
        var saveToken = function(token){
            $window.localStorage['loc8tr-token'] = token;
        };
        var getToken = function () {
            return $window.localStorage['loc8tr-token'];
        };
        return {
            saveToken : saveToken,
            getToken : getToken
        };
    }
})();