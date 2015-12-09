(function()
{
	angular
	.module("PandaMusicApp")	
	.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl("https://embed.spotify.com/?uri=" + url);
   };
	})
	.filter('range', function() {
		return function(val, range) {
			range = parseInt(range / 20);
			for (var i=0; i<=range; i++)
				val.push(i);
			return val;
		};
	})
	.controller("AlbumController", albumController);

	function albumController($location, $rootScope, SearchService, $sce, UserService, CommentService)
	{
		var model = this;
		model.$location = $location;
		model.comments = [];
		
		if ($rootScope.album != null) {
			console.log("In album page, current album is: ");
			console.log($rootScope.album);
			
			/*get all info for this album from database*/
		  SearchService.findAlbumById($rootScope.album.id)
				.then(function (result) {
					console.log("successfully found album");
					model.album = result;
				
					SearchService.findSongsByAlbum(model.album.id)
					.then(function (result) {
						console.log("successfully found songs");
						model.songs = result.items;
						console.log(model.songs);
					});
					
					/*get all comments for this ablum from database*/
					CommentService
						.findAllCommentsByAlbumId(model.album.id)
						.then(function(response) {
							console.log("successfully found comments");
							console.log(response);
							model.comments = response;
						});
				
					console.log($rootScope.album);
					console.log($rootScope.album.name);
				});
		}
		
		model.millisToMinutesAndSeconds = function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		
		model.saveSong = function (song) {
			$rootScope.song = song;
		}
		
		model.saveArtist = function (artist) {
			$rootScope.artist = artist;
		}
		
		model.saveLocation = function () {
			$rootScope.location = "/album";
		}
		
		model.addAlbumToUser = function ()
		{
			console.log("add album to current user: ");
			console.log($rootScope.user);
			UserService.addAlbumToUser($rootScope.user._id, model.album)
				.then(function(user) {
				console.log("successfully added album to user");
				console.log(user);
			})
		}
		
		model.addComment = function (content)
		{
			if ($rootScope.user != null && content != null) {
				var newComment = {
					type: "album",
					id: model.album.id,
					name: model.album.name,
					username: $rootScope.user.username,
					userId: $rootScope.user._id,
					content: content,
					date: new Date()
				};
				console.log("new comment is: ");
				console.log(newComment);
				CommentService.addComment(newComment)
					.then(function(result) {
					model.comments.push(result);
					console.log("successfully added comment");
					console.log(result);
				});	
			}
		}
		
		model.saveCommentUserId = function (userId) {
			$rootScope.commentUserId = userId;
		}

	}
})();