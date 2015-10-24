(function()
{
  angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileController);
    
  function ProfileController($scope, $location, $rootScope, UserService)
  {
    $scope.id = $rootScope.user.id;
    var newUser = {
        username : $scope.username,
        password : $scope.password,
        firstName : $scope.firstName,
        lastName : $scope.lastName,
        email : $scope.email
    };
    $scope.update = function () {
      UserService.updateUser($scope.id, newUser, function (user) {
        $scope.user = user;
        $location.href("#/profile");
      });
    }
  }
})();