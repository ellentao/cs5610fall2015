(function()
{
  angular
    .module("PandaMusicApp")
    .controller("HomeController", HomeController);
    
  function HomeController($location, $rootScope, UserService, CommentService)
  {
		var model = this;
		model.$location = $location;
		
																																	
		/*find all users and comments from database*/
		UserService.findAllUsers().then(function (result) {
			model.users = result;
			console.log("found all users");
			console.log(model.users);
		});

		CommentService.findAllComments().then(function (result) {
			model.comments = result;
			console.log("found all comments");
			console.log(model.comments);
		});
		
		model.saveAlbum = function (albumId) {
			$rootScope.album = {id: albumId};
		}
		
		model.saveArtist = function (artistId) {
			$rootScope.artist = {id: artistId};
		}
		
		model.saveCurrentUserId = function (userId) {
			console.log("saved current user id");
			$rootScope.currentUserId = userId;
		}
		
		model.saveLocation = function () {
			$rootScope.location = "/user";
		}
  }
})();