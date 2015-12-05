(function()
{
	angular
	.module("PandaMusicApp")
	.factory("SearchService", searchService);

	function searchService($http, $q)
	{ 
		var service = {
		  findArtistByName: findArtistByName,
			findArtistById: findArtistById,
			findAlbumByArtist: findAlbumByArtist,
			findAlbumByName: findAlbumByName,
			findAlbumById: findAlbumById,
			findSongsByAlbum: findSongsByAlbum
		};

		return service;

		function findArtistByName(name)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/search?q='+ name + '&type=artist&limit=' + 5)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}  
		
		function findArtistById(id)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/artists/' + id)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findAlbumByArtist(id)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/artists/' + id + '/albums')
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findAlbumByName(name)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/search?q='+ name + '&type=album&limit=' + 5)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findAlbumById(id)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/album/' + id)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findSongsByAlbum(id)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/albums/'+ id +'/tracks')
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
	}
})();