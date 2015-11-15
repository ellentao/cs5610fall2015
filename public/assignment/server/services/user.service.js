module.exports = function(app, model) {
    
    app.post('/api/assignment/user', function (req, res) {
		var user = req.body;
        var newUser = model.createUser(user);
		res.json(newUser);
    });

    app.get('/api/assignment/user', function (req, res) {
		var users = model.findAllUsers();
        res.json(users);
    });
	
	app.get('/api/assignment/user/:id', function (req, res) {
		var id = req.params.id;
		var user = model.findUserById(id);
        res.json(user);
    });

    app.get('/api/assignment/user?username=username', function (req, res) {
        var username = req.params.username;
        var user = model.findUserByUsername(username);
        res.json(user);
    });
    
    app.get('/api/assignment/user?username=username&password=password', function (req, res) {
		var username = req.params.username;
		var password = req.params.password;
		var credentials = {username: username, password: password};
		var user = model.findUserByCredentials(credentials);
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