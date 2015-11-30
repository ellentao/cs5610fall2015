(function()
{
  angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileController);
    
  function ProfileController($location, $rootScope, UserService)
  {
		var model = this;
    model.$location = $location;

    model.update = function (profileUser) {
      UserService.updateUser($rootScope.user.id, profileUser).then(function (user) {
        $rootScope.user = user;
        $location.url("/profile");
        console.log("updated profile");
        console.log(user);
      });
    }
  }
})();