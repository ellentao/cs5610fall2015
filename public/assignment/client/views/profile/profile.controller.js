(function()
{
  angular
    .module("FormBuilderApp")
    .controller("ProfileController", ProfileController);
    
  function ProfileController($location, $rootScope, UserService)
  {
		var model = this;
    model.$location = $location;

		console.log("current user need to update is: ");
		console.log($rootScope.user);
		
    model.update = function (profileUser) {
      UserService.updateUser($rootScope.user._id, profileUser).then(function (user) {
        $rootScope.user = user;
        $location.url("/profile");
        console.log("updated profile");
        console.log(user);
      });
    }
  }
})();