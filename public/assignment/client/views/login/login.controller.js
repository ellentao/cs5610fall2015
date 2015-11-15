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
      UserService.findUserByUsernameAndPassword($scope.loginUser.username, $scope.loginUser.password)
				.then(function (user) {
        if (user != null) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current login user is: ");
          console.log($rootScope.user);
      }
      });
      UserService.findAllUsers().then(function(users){
        console.log("All registered users are: ")
        console.log(users);
      });
    }
  }
})();