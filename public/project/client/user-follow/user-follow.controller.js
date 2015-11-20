(function()
{
  angular
    .module("PandaMusicApp")
    .controller("UserFollowController", UserFollowController);
    
  function UserFollowController($scope, $location, $rootScope, UserService)
  {
    $scope.$location = $location;

    $scope.update = function () {
      UserService.updateUser($rootScope.user.id, $scope.profileUser).then(function (user) {
        $rootScope.user = user;
        $location.url("/profile");
        console.log("updated profile");
        console.log(user);
      });
    }
  }
})();