module.exports = function(app, model) {
	app.post('/api/assignment/user', createUser);
	app.get('/api/assignment/user', findUser);
	app.get('/api/assignment/user/:id', findUserById);
	app.put('/api/assignment/user/:id', updateUserById);
	app.delete('/api/assignment/user/:id', deleteUserById);
	
	function createUser(req, res) {
		model
			.createUser(req.body)
			.then(function(user) {
				res.json(user);
			});
  }

	function findUser(req, res) {
		var username = req.query.username;
		var password = req.query.password;
		if (username != null && password != null) {
			var credentials = 
					{
						username: username, 
						password: password
					};
			model
				.findUserByCredentials(credentials)
				.then(function(user) {
					res.json(user);
				});
		} else if (username != null) {
			model
				.findUserByUsername(username)
				.then(function(user) {
					res.json(user);
				});
		} else {
			model
				.findAllUsers()
				.then(function(users) {
					res.json(users);
				});
		}
	}

	function findUserById(req, res) {
		model
			.findUserById(req.params.id)
			.then(function(user) {
				res.json(user);
			});
	}

	function updateUserById(req, res) {
		model
			.updateUserById(req.params.id, req.body)
			.then(function(users) {
				res.json(users);
			});
	}

	function deleteUserById(req, res) {
		model
			.deleteUserById(req.params.id)
			.then(function(users) {
				res.json(users);
			});
	}
}