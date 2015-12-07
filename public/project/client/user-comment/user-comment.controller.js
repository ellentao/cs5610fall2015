(function()
{
  angular
    .module("PandaMusicApp")
    .controller("UserCommentController", UserCommentController);
    
  function UserCommentController($location, $rootScope, UserService, CommentService)
  {
    var model = this;
		model.$location = $location;

		if ($rootScope.currentUserId != null) {
			UserService.findUserById($rootScope.currentUserId).then(function (user) {
				model.user = user;
			});
			
			/*find current user's comments*/
			CommentService.findAllCommentsByUserId($rootScope.currentUserId).then(function (comments) {
				model.comments = comments;
				console.log("found user's comments");
				console.log(model.comments);
			});
		}
  }
})();