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
			model.artist = $rootScope.artist;
			
		  SearchService.findArtistById($rootScope.artist.id)
				.then(function (result) {
					console.log("successfully found artist");
					model.artist = result;
					console.log($rootScope.artist);
					console.log($rootScope.artist.name);
				});
			
			SearchService.findAlbumByArtist(model.artist.id)
			.then(function (result) {
				console.log("successfully found albums");
				model.albums = result.items;
				console.log(model.albums);
			});
		}

	}
})();