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
    .controller("SearchController", SearchController);
    
  function SearchController($location, $rootScope, SearchService)
  {
		var model = this;
		model.$location = $location;
		model.artists = [];
		model.albums = [];
		
		// find template and compile it
		var templateSource = document.getElementById('results-template').innerHTML,
				template = Handlebars.compile(templateSource),
				resultsPlaceholder = document.getElementById('results'),
				playingCssClass = 'playing',
				audioObject = null;

		var fetchTracks = function (albumId, callback) {
				$.ajax({
						url: 'https://api.spotify.com/v1/albums/' + albumId,
						success: function (response) {
								callback(response);
						}
				});
		};

		var searchAlbums = function (query) {
				$.ajax({
						url: 'https://api.spotify.com/v1/search',
						data: {
								q: query,
								type: 'album'
						},
						success: function (response) {
								resultsPlaceholder.innerHTML = template(response);
						}
				});
		};

		results.addEventListener('click', function (e) {
				var target = e.target;
				if (target !== null && target.classList.contains('cover')) {
						if (target.classList.contains(playingCssClass)) {
								audioObject.pause();
						} else {
								if (audioObject) {
										audioObject.pause();
								}
								fetchTracks(target.getAttribute('data-album-id'), function (data) {
										audioObject = new Audio(data.tracks.items[0].preview_url);
										audioObject.play();
										target.classList.add(playingCssClass);
										audioObject.addEventListener('ended', function () {
												target.classList.remove(playingCssClass);
										});
										audioObject.addEventListener('pause', function () {
												target.classList.remove(playingCssClass);
										});
								});
						}
				}
		});

		document.getElementById('search-form').addEventListener('submit', function (e) {
				e.preventDefault();
				searchAlbums(document.getElementById('query').value);
		}, false);
		
		
		model.findArtistByName = function (name)
		{
		  SearchService.findArtistByName(name)
				.then(function (result) {
					console.log("successfully found artist array");
					model.artists = result.artists.items;
					console.log(model.artists);
				});
		}
		
		model.saveArtist = function (artist)
		{
		  $rootScope.artist = artist;
			
		}
		
		model.findAlbumByName = function (name)
		{
		  SearchService.findAlbumByName(name)
				.then(function (result) {
					console.log("successfully found album array");
					model.albums = result.albums.items;
					console.log(model.albums);
				});
		}
		
		model.saveAlbum = function (album)
		{
		  $rootScope.album = album;
			
		}
		
		model.findSongByName = function (name)
		{
		  SearchService.findSongByName(name)
				.then(function (result) {
					console.log("successfully found song array");
					model.songs = result.tracks.items;
					console.log(model.songs);
				});
		}
		
		model.saveArtist = function (artist)
		{
			console.log("save artist");
			console.log(artist);
		  $rootScope.artist= artist;
			
		}
		
		model.saveSong = function (song)
		{
			console.log("save song");
			console.log(song);
		  $rootScope.song= song;
			
		}
		
		model.millisToMinutesAndSeconds = function (millis) {
			var minutes = Math.floor(millis / 60000);
			var seconds = ((millis % 60000) / 1000).toFixed(0);
			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}
	}
})();