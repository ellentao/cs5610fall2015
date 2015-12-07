(function()
{
	angular
	.module("PandaMusicApp")
	.factory("UserService", userService);

	function userService($http, $q)
	{ 
		var service = {
		  findUserByUsernameAndPassword : findUserByUsernameAndPassword,
		  findAllUsers : findAllUsers,
		  createUser : createUser,
		  deleteUserById : deleteUserById,
		  updateUser : updateUser,
			findUserByUsername : findUserByUsername,
			addSongToUser : addSongToUser,
			findSongsByUserId : findSongsByUserId,
			deleteSongFromUser : deleteSongFromUser,
			addArtistToUser : addArtistToUser,
			findArtistsByUserId : findArtistsByUserId,
			deleteArtistFromUser : deleteArtistFromUser,
			addAlbumToUser : addAlbumToUser,
			findAlbumsByUserId : findAlbumsByUserId,
			deleteAlbumFromUser : deleteAlbumFromUser,
		};

		return service;
		
		function findUserByUsername(username)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user?username=' + username)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function findUserByUsernameAndPassword(username, password)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user?username=' + username + '&' + 'password=' + password)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function findAllUsers()
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user')
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		} 

		function createUser(user)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/user', user)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function deleteUserById(id)
		{
			var deferred = $q.defer();
			$http
				.delete('/api/project/user/' + id)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function updateUser(id, user)
		{
			var deferred = $q.defer();
			$http
				.put('/api/project/user/' + id, user)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function addSongToUser(userId, song)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/user/'+ userId + '/song', song)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findSongsByUserId(userId)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user/' + userId + '/song')
				.success(function(response) {
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function deleteSongFromUser(userId, songId)
		{
			var deferred = $q.defer();
			$http
				.delete('/api/project/user/' + userId + '/song/' + songId)
				.success(function(response) {
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function addArtistToUser(userId, artist)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/user/'+ userId + '/artist', artist)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findArtistsByUserId(userId)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user/' + userId + '/artist')
				.success(function(response) {
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function deleteArtistFromUser(userId, artistId)
		{
			var deferred = $q.defer();
			$http
				.delete('/api/project/user/' + userId + '/artist/' + artistId)
				.success(function(response) {
					console.log("deleted artist from user");
					console.log(response);
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function addAlbumToUser(userId, album)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/user/'+ userId + '/album', album)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findAlbumsByUserId(userId)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user/' + userId + '/album')
				.success(function(response) {
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function deleteAlbumFromUser(userId, albumId)
		{
			var deferred = $q.defer();
			$http
				.delete('/api/project/user/' + userId + '/album/' + albumId)
				.success(function(response) {
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
	}
})();