(function()
{
  angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileController);
    
  function ProfileController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;

    $scope.update = function () {
      UserService.updateUser($rootScope.id, $scope.user, function (user) {
        $rootScope.user = user;
        $location.url("/profile");
      });
    }
  }
})();