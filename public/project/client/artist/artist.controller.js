(function()
{
	angular
	.module("PandaMusicApp")
	.controller("ArtistController", artistController);

	function artistController($rootScope, $http, $location, SearchService)
	{
		var model = this;
		model.$location = $location;
		model.albums = [];
		
		if ($rootScope.artist != null) {
			console.log("In artist page, current artist is: ");
			console.log($rootScope.artist);
			
		  SearchService.findArtistById($rootScope.artist.id)
				.then(function (result) {
					console.log("successfully found artist");
					console.log(result);
					model.artist = result;
					model.genres = result.genres;
					console.log(model.genres);
				
					SearchService.findAlbumByArtist(model.artist.id)
					.then(function (result) {
						console.log("successfully found albums");
						model.albums = result.items;
						console.log(model.albums);
					});
				});
		}
		model.saveAlbum = function (album) {
			$rootScope.album = album;
			console.log("In artist page, saved album");
			console.log($rootScope.album);
		}
	}
})();