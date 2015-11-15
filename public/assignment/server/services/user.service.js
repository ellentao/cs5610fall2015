module.exports = function(app, model) {
	app.post('/api/assignment/user', function (req, res) {
			var user = req.body;
			var newUser = model.createUser(user);
			res.json(newUser);
  });

	app.get('/api/assignment/user', function (req, res) {
		var username = req.query.username;
		var password = req.query.password;
		if (username != null && password != null) {
			var credentials = {username: username, password: password};
			var user = model.findUserByCredentials(credentials);
			res.json(user);
		} else if (username != null) {
			var user = model.findUserByUsername(username);
			res.json(user);
		} else {
			var users = model.findAllUsers();
			res.json(users);
		}
	});

	app.get('/api/assignment/user/:id', function (req, res) {
	var id = req.params.id;
	var user = model.findUserById(id);
			res.json(user);
	});

	app.put('/api/assignment/user/:id', function (req, res) {
			var id = req.params.id;
	var user = req.body;
	var users = model.updateUserById(id, user);
			res.json(users);
	});

	app.delete('/api/assignment/user/:id', function (req, res) {
			var id = req.params.id;
			var users = model.deleteUserById(id);
			res.json(users);
	});
}