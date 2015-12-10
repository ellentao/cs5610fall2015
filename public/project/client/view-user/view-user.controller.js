(function()
{
  angular
    .module("PandaMusicApp")
		.filter('trustUrl', function ($sce) {
			return function(url) {
				return $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + url);
		 };
		})
    .controller("ViewUserController", ViewUserController);
    
  function ViewUserController($location, $rootScope, UserService)
  {
		var model = this;
		model.$location = $location;
		
		if  ($rootScope.commentUserId != null) {
			if ($rootScope.user != null && $rootScope.commentUserId == $rootScope.user._id) {
				$location.url("/user");
			}
			
			UserService.findUserById($rootScope.commentUserId).then(function (user) {
				console.log("view user");
				console.log(user);
				model.user = user;
				find();
			});
		}
																																	
		/*find current user's favorite songs, artists, and albums from database*/
		function find() {
			UserService.findSongsByUserId(model.user._id).then(function (songs) {
				model.user.songs = songs;
				console.log("found user's favorite songs");
				console.log(model.user.songs);
			});

			UserService.findArtistsByUserId(model.user._id).then(function (artists) {
				model.user.artists = artists;
				console.log("found user's favorite artists");
				console.log(model.user.artists);
			});

			UserService.findAlbumsByUserId(model.user._id).then(function (albums) {
				model.user.albums = albums;
				console.log("found user's favorite albums");
				console.log(model.user.albums);
			});
		}
		
		model.millisToMinutesAndSeconds = function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		
		model.saveAlbum = function (albumId) {
			$rootScope.album = {id: albumId};
		}
		
		model.saveArtist = function (artistId) {
			$rootScope.artist = {id: artistId};
		}
		
		model.saveCurrentUserId = function () {
			console.log("saved current user id");
			console.log(model.user._id);
			$rootScope.currentUserId = model.user._id;
		}
		
		model.saveLocation = function () {
			$rootScope.location = "/user";
		}
		
		model.follow = function() {
			UserService.addfollowToUser($rootScope.user._id, model.user).then(function(result) {
				console.log("successfully added a new following to current user");																																		
				console.log(result);
			});
		}
		
		model.saveLocation = function () {
			$rootScope.location = "/view-user";
		}
  }
})();