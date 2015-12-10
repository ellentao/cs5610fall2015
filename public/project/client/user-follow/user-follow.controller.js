(function()
{
  angular
    .module("PandaMusicApp")
    .controller("UserFollowController", UserFollowController);
    
  function UserFollowController($scope, $location, $rootScope, UserService)
  {
    var model = this;
		model.$location = $location;
		
		console.log("current logged in user is: ")
		console.log($rootScope.user);

		if ($rootScope.user != null) {
			UserService.findUserById($rootScope.user._id).then(function (user) {
				model.user = user;
			});
    }
		
		model.saveCurrentUserId = function (userId) {
			console.log("saved current user id");
			console.log(userId);
			$rootScope.currentUserId = userId;
		}
  }
})();