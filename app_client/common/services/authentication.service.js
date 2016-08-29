(function(){
    angular
      .module('loc8trApp')
      .service('authentication', authentication);
    
    authentication.$inject = ['$window', '$http'];
    function authentication ($window, $http){
        var saveToken = function(token){
            $window.localStorage['loc8tr-token'] = token;
        };
        var getToken = function () {
            return $window.localStorage['loc8tr-token'];
        };
        register = function(user) {
            return $http.post('/api/register',user).success(function(data){
                saveToken(data.token);
            });
        };
        login = function(user) {
            return $http.post('/api/login', user.success(function(data){
                saveToken(data.token);
            }));
        };
        logout = function() {
            $window.localStorage.removeItem('loc8tr-token');
        };

        return {
            saveToken : saveToken,
            getToken : getToken,
            register : register,
            login : login,
            logout : logout
        };
    }
})();