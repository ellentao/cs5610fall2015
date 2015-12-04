(function()
{
	angular
	.module("PandaMusicApp")
	.factory("ArtistService", artistService);

	function artistService($http, $q)
	{ 
		var service = {
		  findArtistByName : findArtistByName
		};

		return service;

		function findArtistByName(name, limit)
		{
			var deferred = $q.defer();
			$http
				.get('https://api.spotify.com/v1/search?q='+ name + '&type=artist&offset=20&limit=' + limit)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}  
	}
})();