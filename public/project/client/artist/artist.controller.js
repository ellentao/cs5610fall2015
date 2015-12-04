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
		console.log("In artist page, current artist is: ");
		console.log($rootScope.artist);
		
		if ($rootScope.artist != null) {
			model.artist = $rootScope.artist;
			
			SearchService.findAlbumByArtist(model.artist.id)
			.then(function (result) {
				console.log("successfully found albums");
				model.albums = result.items;
				console.log(model.albums);
			});
		}

	}
})();