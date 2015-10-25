(function()
{
  angular
    .module("FormBuilderApp")
    .controller("LoginController", LoginController);
    
  function LoginController($scope, $rootScope, $location, UserService)
  { 
    $scope.$location = $location;
    $scope.login = function ()
    {
      UserService.findUserByUsernameAndPassword($scope.username, $scope.password, function (user) {
        if (user != null) {
          $rootScope.user = user;
          $location.url("/profile");
      }
      });
    }
  }
})();