(function()
{
  angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileController);
    
  function ProfileController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;
    $scope.id = $rootScope.user.id;
    $scope.update = function () {
      UserService.updateUser($scope.id, $scope.user, function (user) {
        $rootScope.user = user;
        $location.url("/profile");
      });
    }
  }
})();