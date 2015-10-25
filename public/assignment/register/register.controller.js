(function()
{
  angular
    .module("FormBuilderApp")
    .controller("RegisterController", RegisterController);
    
  function RegisterController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;
    if ($rootScope.user != null) {
      $scope.id = $rootScope.user.id;
    }
    
    $scope.register = function () {
      if ($scope.user.username != null && $scope.user.password == $scope.user.password2) {
        UserService.createUser($scope.user, function (user) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current register user is ");
          console.log($rootScope.user);
        });
      }
    }
  }
})();