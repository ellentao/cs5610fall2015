(function()
{
  angular
    .module("FormBuilderApp")
    .controller("LoginController", LoginController);
    
  function LoginController($scope, $rootScope, $location, UserService)
  { 
    function login()
    {
      UserService.findUserByUsernameAndPassword($scope.username, $scope.password, function (user) {
        if (user != null) {
          $rootScope.user = user;
          $location.href("#/profile");
      }
      });
    }
  }
})();