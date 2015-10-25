(function()
{
  angular
    .module("FormBuilderApp")
    .controller("LoginController", LoginController);
    
  function LoginController($scope, $rootScope, $location, UserService)
  { 
    $scope.$location = $location;
    UserService.findAllUsers(function(users){
      console.log(users);
    });
    $scope.login = function ()
    {
      UserService.findUserByUsernameAndPassword($scope.username, $scope.password, function (user) {
        if (user != null) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current login user is");
          console.log($rootScope.user);
      }
      });
    }
  }
})();