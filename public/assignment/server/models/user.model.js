var users = require("./user.mock.json");
var Guid = require("guid");
module.exports = function(app){   
	var api = {
		createUser: createUser,
		findAllUsers: findAllUsers,
		findUserById: findUserById,
		updateUserById: updateUserById,
		deleteUserById: deleteUserById,
		findUserByUsername: findUserByUsername,
		findUserByCredentials: findUserByCredentials
	};
	
  //CRUD
	function createUser(user)
	{
		var newUser = {
			id: Guid.create(),
			username : user.username,
			password : user.password,
			email : user.email
		};
		users.push(newUser);
		return newUser;
	}

	function findAllUsers()
	{
		return users;
	}

	function findUserById(id)
	{
		for (var i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				return(users[i]);
			}
		}
		return null;
	}

	function updateUserById(id, user)
	{
		for (var i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				console.log("found this id");
				users[i] = {
					id: id,
					username: user.username,
					password: user.password,
					firstName : user.firstName,
					lastName : user.lastName,
					email : user.email
				};
				return users[i];
			}
		}
		return null;
	}   

	function deleteUserById(id)
	{
		for (var i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				users.splice(i, 1);
			}
		}
		return users;
	}

	function findUserByUsername(username)
	{
		for (var i = 0; i < users.length; i++) {
			if (users[i].username == username) {
				return users[i];
			}  
		}
		return null;
	}

	function findUserByCredentials(credentials)
	{
		for (var i = 0; i < users.length; i++) {
				if (users[i].username == credentials.username && users[i].password == credentials.password) {
					return users[i];
				}  
			}
		return null;
	}   
};