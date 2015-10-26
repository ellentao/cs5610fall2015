(function()
{
  angular
    .module("FormBuilderApp")
    .controller("RegisterController", RegisterController);
    
  function RegisterController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;
    
    $scope.register = function () {      
      if ($scope.registerUser.username != null && $scope.registerUser.password == $scope.registerUser.password2) {
        UserService.createUser($scope.registerUser, function (user) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current register user is ");
          console.log($rootScope.user);
        });
      }
      
      UserService.findAllUsers(function(users){
        console.log("All registered users are: ")
        console.log(users);
      });
    }
  }
})();