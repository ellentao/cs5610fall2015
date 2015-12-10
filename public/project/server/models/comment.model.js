var Guid = require('guid');
var q = require("q");

module.exports = function(db, mongoose) {
	var CommentSchema = require("./comment.schema.js")(mongoose);
  var CommentModel  = mongoose.model("ProjectCommentModel", CommentSchema);
	var api = {
//		createUser: createUser,
//		findAllUsers: findAllUsers,
//		findUserById: findUserById,
//		updateUserById: updateUserById,
//		deleteUserById: deleteUserById,
//		findUserByUsername: findUserByUsername,
//		findUserByCredentials: findUserByCredentials,
//		addSongToUser: addSongToUser,
//		findSongsByUserId: findSongsByUserId,
//		deleteSongFromUser: deleteSongFromUser,
//		addArtistToUser: addArtistToUser,
//		findArtistsByUserId: findArtistsByUserId,
//		deleteArtistFromUser: deleteArtistFromUser,
//		addAlbumToUser: addAlbumToUser,
//		findAlbumsByUserId: findAlbumsByUserId,
//		deleteAlbumFromUser: deleteAlbumFromUser
		addComment : addComment,
		findCommentById : findCommentById,
		findCommentsByUserId : findCommentsByUserId
	};
	return api;
	
  //CRUD
	function addComment(comment)
	{
		var deferred = q.defer();

		CommentModel.create(comment, function(err, comment) {
			if(err) {
				console.log(err);
				deferred.reject(err);
			} else {
				console.log("in comment model, add comment");
				console.log(comment);
				deferred.resolve(comment);
			}
		});

		return deferred.promise;
	}
	
	function findAllComments()
	{
		var deferred = q.defer();

		CommentModel.find(function(err, comments){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(comments);
			}
		});

		return deferred.promise;
	}
	
	function findCommentById(id, type)
	{
		var deferred = q.defer();

		CommentModel.find(
			{
				type: type,
				id: id
			}, 
			function(err, comments){
			if(err) {
				deferred.reject(err);
			} else {
				console.log("in server comment model, find comment");
				console.log(comments);
				deferred.resolve(comments);
			}
		});
		return deferred.promise;
	}
	
	function findCommentsByUserId(userId)
	{
		var deferred = q.defer();

		CommentModel.find(
			{
				userId: userId
			}, 
			function(err, comments){
			if(err) {
				deferred.reject(err);
			} else {
				console.log("in server comment model, find current user's comment");
				console.log(comments);
				deferred.resolve(comments);
			}
		});
		return deferred.promise;
	}
	
//	function createUser(user) 
//	{
//		var deferred = q.defer();
//
//		UserModel.create(user, function(err, user) {
//			if(err) {
//				deferred.reject(err);
//			} else {
//				deferred.resolve(user);
//			}
//		});
//
//		return deferred.promise;
//	}
//		
//	function findAllUsers()
//	{
//		var deferred = q.defer();
//
//		UserModel.find(function(err, users){
//			if(err) {
//				deferred.reject(err);
//			} else {
//				deferred.resolve(users);
//			}
//		});
//
//		return deferred.promise;
//	}
//
//	function findUserById(id)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(id, function(err, user){
//			if(err) {
//				deferred.reject(err);
//			} else {
//				deferred.resolve(user);
//			}
//		});
//
//		return deferred.promise;
//	}
//
//	function updateUserById(id, user)
//	{
//		var deferred = q.defer();
//		
//		UserModel.update(
//			{_id: id}, 
//			{$set: 
//				{
//					firstName : user.firstName,
//					lastName : user.lastName,
//					username : user.username,
//					password : user.password,
//				}, 
//			},
//			function(err, result) {
//				UserModel.findOne({_id : id}, function(err, result) {
//				deferred.resolve(result);
//				});
//		});
//
//		return deferred.promise;
//	}   
//
//	function deleteUserById(id)
//	{
//		var deferred = q.defer();
//
//		UserModel.remove({_id: id}, function(err, status) {
//			if(err) {
//				deferred.reject(err);
//			} else {
//				deferred.resolve(status);
//			}
//		});
//
//		return deferred.promise;
//	}
//
//	function findUserByUsername(username)
//	{
//		var deferred = q.defer();
//
//		UserModel.findOne({username: username}, function(err, user){
//				if(err) {
//					deferred.reject(err);
//				} else {
//					deferred.resolve(user);
//					console.log(user);
//				}
//		});
//
//		return deferred.promise;
//	}
//
//	function findUserByCredentials(credentials)
//	{	
//		var deferred = q.defer();
//
//		UserModel.findOne({
//			username: credentials.username, 
//			password: credentials.password
//			}, function(err, user){
//				if(err) {
//					deferred.reject(err);
//				} else {
//					deferred.resolve(user);
//					console.log("found user by credentials");
//					console.log(user);
//				}
//		});
//		
//		return deferred.promise;
//	}
//		
//	function addSongToUser(userId, song)
//	{
//		var deferred = q.defer();
//		var newSong = {
//			id: song.id,
//			name: song.name,
//			albumName: song.album.name,
//			albumId: song.album.id,
//			artistName: song.artists[0].name,
//			artistId: song.artists[0].id,
//			duration_ms: song.duration_ms,
//			uri: song.uri,
//			popularity: song.popularity
//		};
//		console.log("add song to user:");
//		console.log(newSong);
//		
//		UserModel.findById(userId, function(err, user){
//			user.favoriteSongs.push(newSong);
//			console.log(user.favoriteSongs);
//			user.save(function(err, user){
//				deferred.resolve(user);
//				console.log("updatedUser");
//				console.log(user);
//			});
//		});
//
//		return deferred.promise;
//	}
//	
//	function findSongsByUserId(userId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			if(err) {
//				console.log(err);
//				deferred.reject(err);
//			} else {
//				deferred.resolve(user.favoriteSongs);
//				console.log("favorite songs are: ");
//				console.log(user);
//				console.log(user.favoriteSongs);
//			}
//		});
//		return deferred.promise;
//	}
//	
//	function deleteSongFromUser(userId, songId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			var songs = user.favoriteSongs;
//			for (var i = 0; i < songs.length; i++) {
//				if (songs[i]._id == songId) {
//					user.favoriteSongs.splice(i, 1);
//					user.save(function(err, user){
//						deferred.resolve(user);
//					});
//				}
//			}
//		});
//		
//		return deferred.promise;
//	}
//	
//	function addArtistToUser(userId, artist)
//	{
//		var deferred = q.defer();
//		var newArtist = {
//			id: artist.id,
//			name: artist.name,
//			imageUrl: artist.images[0].url
//		};
//		console.log("add artist to user:");
//		console.log(newArtist);
//		
//		UserModel.findById(userId, function(err, user){		
//			user.favoriteArtists.push(newArtist);
//			console.log(user.favoriteArtists);
//			user.save(function(err, user){
//				deferred.resolve(user);
//				console.log("updatedUser");
//				console.log(user);
//			});
//		});
//
//		return deferred.promise;
//	}
//	
//	function findArtistsByUserId(userId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			if(err) {
//				console.log(err);
//				deferred.reject(err);
//			} else {
//				deferred.resolve(user.favoriteArtists);
//				console.log("favorite artists are: ");
//				console.log(user);
//				console.log(user.favoriteArtists);
//			}
//		});
//		return deferred.promise;
//	}
//	
//	function deleteArtistFromUser(userId, artistId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			var artists = user.favoriteArtists;
//			for (var i = 0; i < artists.length; i++) {
//				if (artists[i]._id == artistId) {
//					user.favoriteArtists.splice(i, 1);
//					user.save(function(err, user){
//					deferred.resolve(user);
//				});
//				}
//			}
//		});
//		
//		return deferred.promise;
//	}
//	
//	function addAlbumToUser(userId, album)
//	{
//		var deferred = q.defer();
//		var newAlbum = {
//			id: album.id,
//			name: album.name,
//			imageUrl: album.images[0].url
//		};
//		console.log("add album to user:");
//		console.log(newAlbum);
//		UserModel.findById(userId, function(err, user){
//			user.favoriteAlbums.push(newAlbum);
//			console.log(user.favoriteAlbums);
//			user.save(function(err, user){
//				deferred.resolve(user);
//				console.log("updatedUser");
//				console.log(user);
//			});
//		});
//
//		return deferred.promise;
//	}
//	
//	function findAlbumsByUserId(userId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			if(err) {
//				console.log(err);
//				deferred.reject(err);
//			} else {
//				deferred.resolve(user.favoriteAlbums);
//				console.log("favorite songs are: ");
//				console.log(user);
//				console.log(user.favoriteAlbums);
//			}
//		});
//		return deferred.promise;
//	}
//	
//	function deleteAlbumFromUser(userId, albumId)
//	{
//		var deferred = q.defer();
//
//		UserModel.findById(userId, function(err, user){
//			var albums = user.favoriteAlbums;
//			for (var i = 0; i < albums.length; i++) {
//				if (albums[i]._id == albumId) {
//					user.favoriteAlbums.splice(i, 1);
//					user.save(function(err, user){
//						deferred.resolve(user);
//					});
//				}
//			}
//		});
//		
//		return deferred.promise;
//	}
};