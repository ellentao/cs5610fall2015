(function()
{
  angular
    .module("FormBuilderApp")
    .controller("RegisterController", RegisterController);
    
  function RegisterController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;
    
    $scope.register = function () {      
      if ($scope.user.password == $scope.user.password2) {
        UserService.createUser($scope.user, function (user) {
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