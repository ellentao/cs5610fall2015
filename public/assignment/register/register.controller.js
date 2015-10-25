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
    
    var newUser = {
        username : $scope.username,
        password : $scope.password,
        firstName : $scope.firstName,
        lastName : $scope.lastName,
        email : $scope.email
    };
    $scope.register = function () {
      if ($scope.password == $scope.passwordVerify) {
        UserService.createUser(newUser, function (user) {
          $rootScope.user = user;
          $location.url("/profile");
        });
      }
    }
  }
})();