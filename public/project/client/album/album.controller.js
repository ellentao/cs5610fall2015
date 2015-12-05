(function()
{
	angular
	.module("PandaMusicApp")
	.controller("AlbumController", albumController);

	function albumController($location, $rootScope, SearchService)
	{
		var model = this;
		model.$location = $location;
		model.songs = [];
		
//		var templateSource2 = document.getElementById('song-results-template').innerHTML,
//				template2 = Handlebars.compile(templateSource2),
//				resultsPlaceholder2 = document.getElementById('song-results');
		
		if ($rootScope.album != null) {
			console.log("In album page, current album is: ");
			console.log($rootScope.album);
			model.album = $rootScope.album;
			
		  SearchService.findAlbumById($rootScope.album.id)
				.then(function (result) {
					console.log("successfully found album");
					model.album = result;
					console.log($rootScope.album);
					console.log($rootScope.album.name);
				});
			
			SearchService.findSongsByAlbum(model.album.id)
			.then(function (result) {
				console.log("successfully found songs");
				model.songs = result.items;
				console.log(model.songs);
//				resultsPlaceholder2.innerHTML = template2(result);
//				console.log("read resultsPlaceholder2");
//				console.log(resultsPlaceholder2);
//				console.log(resultsPlaceholder2.innerHTML);
			});
		}
		
		model.millisToMinutesAndSeconds = function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		
		model.replaceUri = function (song) {
			console.log("https://embed.spotify.com/?uri=" + song.uri);
			return "https://embed.spotify.com/?uri=" + song.uri;
		}
	}
})();