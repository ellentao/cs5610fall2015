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
    .controller("SongController", SongController);
    
  function SongController($location, $rootScope, SearchService)
  {
		var model = this;
		model.$location = $location;
		
		if($rootScope.song != null) {
			SearchService.findSongById($rootScope.song.id)
				.then(function (result) {
					console.log("successfully found song");
					model.song = result;
					console.log(model.song);
				});
		}
		
		model.millisToMinutesAndSeconds = function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
		
		model.replaceUri = function (song) {
			console.log("replace this song's uri");
			console.log(song);
			console.log("https://embed.spotify.com/?uri=" + song.uri);
			return "https://embed.spotify.com/?uri=" + song.uri;
		}
		
		model.saveSong = function (song) {
			$rootScope.song = song;
		}
		
		model.saveArtist = function (artist) {
			$rootScope.artist = artist;
		}
	}
})();