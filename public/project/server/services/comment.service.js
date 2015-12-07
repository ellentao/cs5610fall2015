module.exports = function(app, model) {
//	app.post('/api/project/user', createUser);
	app.get('/api/project/comment', findComment);
//	app.get('/api/project/user/:id', findUserById);
//	app.put('/api/project/user/:id', updateUserById);
//	app.delete('/api/project/user/:id', deleteUserById);
	app.post('/api/project/comment', addComment);
	app.get('/api/project/comment/:id', findCommentById);
	app.get('/api/project/user/:userId/comment', findCommentsByUserId);
//	app.delete('/api/project/user/:userId/song/:songId', deleteSongFromUser);
//	app.post('/api/project/user/:userId/artist', addArtistToUser);
//	app.get('/api/project/user/:userId/artist', findArtistsByUserId);
//	app.delete('/api/project/user/:userId/artist/:artistId', deleteArtistFromUser);
//	app.post('/api/project/user/:userId/album', addAlbumToUser);
//	app.get('/api/project/user/:userId/album', findAlbumsByUserId);
//	app.delete('/api/project/user/:userId/album/:albumId', deleteAlbumFromUser);
	
	function addComment(req, res) {
		model
		.addComment(req.body)
		.then(function(result) {
			console.log("in server services, add comment");
			console.log(result);
			res.json(result);
		});
	}
	
	function findComment(req, res) {
		model
			.findAllComments()
			.then(function(comments) {
				res.json(comments);
			});
		console.log("found all comments");
	}
	
	function findCommentById(req, res) {
		model
			.findCommentById(req.params.id, req.query.type)
			.then(function(result) {
				console.log("in server services, find comment");
				console.log(result);
				res.json(result);
			});
	}
	
	function findCommentsByUserId(req, res) {
		model
			.findCommentsByUserId(req.params.userId)
			.then(function(result){
				res.json(result);
			});
	}
	
//	function createUser(req, res) {
//		model
//			.createUser(req.body)
//			.then(function(user) {
//				res.json(user);
//			});
//  }
//
//	function findUser(req, res) {
//		var username = req.query.username;
//		var password = req.query.password;
//		if (username != null && password != null) {
//			var credentials = 
//					{
//						username: username, 
//						password: password
//					};
//			console.log("credential is: ");
//			console.log(credentials);
//			model
//				.findUserByCredentials(credentials)
//				.then(function(user) {
//					res.json(user);
//					console.log("found user by credentials: ");
//					console.log(user);
//				});
//		} else if (username != null) {
//			model
//				.findUserByUsername(username)
//				.then(function(user) {
//					res.json(user);
//				});
//			console.log("found user by username");
//		} else {
//			model
//				.findAllUsers()
//				.then(function(users) {
//					res.json(users);
//				});
//			console.log("found all users");
//		}
//	}
//
//	function findUserById(req, res) {
//		model
//			.findUserById(req.params.id)
//			.then(function(user) {
//				res.json(user);
//			});
//	}
//
//	function updateUserById(req, res) {
//		model
//			.updateUserById(req.params.id, req.body)
//			.then(function(users) {
//				res.json(users);
//			});
//	}
//
//	function deleteUserById(req, res) {
//		model
//			.deleteUserById(req.params.id)
//			.then(function(users) {
//				res.json(users);
//			});
//	}
//	
//	function addSongToUser(req, res) {
//		model
//			.addSongToUser(req.params.userId, req.body)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function findSongsByUserId(req, res) {
//		model
//			.findSongsByUserId(req.params.userId)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function deleteSongFromUser(req, res) {
//		model
//			.deleteSongFromUser(req.params.userId, req.params.songId)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function addArtistToUser(req, res) {
//		model
//			.addArtistToUser(req.params.userId, req.body)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function findArtistsByUserId(req, res) {
//		model
//			.findArtistsByUserId(req.params.userId)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function deleteArtistFromUser(req, res) {
//		model
//			.deleteArtistFromUser(req.params.userId, req.params.artistId)
//			.then(function(result) {
//				console.log("in server service, deleted artist from user");
//				console.log(result);
//				res.json(result);
//			});
//	}
//	
//	function addAlbumToUser(req, res) {
//		model
//			.addAlbumToUser(req.params.userId, req.body)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function findAlbumsByUserId(req, res) {
//		model
//			.findAlbumsByUserId(req.params.userId)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
//	
//	function deleteAlbumFromUser(req, res) {
//		model
//			.deleteAlbumFromUser(req.params.userId, req.params.albumId)
//			.then(function(result) {
//				res.json(result);
//			});
//	}
}