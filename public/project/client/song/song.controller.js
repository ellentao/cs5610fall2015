(function()
{
  angular
    .module("PandaMusicApp")
    .controller("SongController", SongController);
    
  function SongController($location, $rootScope, UserService)
  {
		var model = this;
		model.$location = $location;
		
		model.song = $rootScope.song;
		
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