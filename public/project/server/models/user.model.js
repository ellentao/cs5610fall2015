var Guid = require('guid');
var q = require("q");

module.exports = function(db, mongoose) {
	var UserSchema = require("./user.schema.js")(mongoose);
  var UserModel  = mongoose.model("ProjectUserModel", UserSchema);
	var api = {
		createUser: createUser,
		findAllUsers: findAllUsers,
		findUserById: findUserById,
		updateUserById: updateUserById,
		deleteUserById: deleteUserById,
		findUserByUsername: findUserByUsername,
		findUserByCredentials: findUserByCredentials,
	};
	return api;
	
  //CRUD
	function createUser(user) 
	{
		var deferred = q.defer();

		UserModel.create(user, function(err, user) {
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(user);
			}
		});

		return deferred.promise;
	}
		
	function findAllUsers()
	{
		var deferred = q.defer();

		UserModel.find(function(err, users){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(users);
			}
		});

		return deferred.promise;
	}

	function findUserById(id)
	{
		var deferred = q.defer();

		UserModel.findById(id, function(err, user){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(user);
			}
		});

		return deferred.promise;
	}

	function updateUserById(id, user)
	{
		var deferred = q.defer();
		
		UserModel.update(
			{_id: id}, 
			{$set: 
				{
					firstName : user.firstName,
					lastName : user.lastName,
					username : user.username,
					password : user.password,
				}, 
			},
			function(err, result) {
				UserModel.findOne({_id : id}, function(err, result) {
				deferred.resolve(result);
				});
		});

		return deferred.promise;
	}   

	function deleteUserById(id)
	{
		var deferred = q.defer();

		UserModel.remove({_id: id}, function(err, status) {
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(status);
			}
		});

		return deferred.promise;
	}

	function findUserByUsername(username)
	{
		var deferred = q.defer();

		UserModel.findOne({username: username}, function(err, user){
				if(err) {
					deferred.reject(err);
				} else {
					deferred.resolve(user);
					console.log(user);
				}
		});

		return deferred.promise;
	}

	function findUserByCredentials(credentials)
	{	
		var deferred = q.defer();

		UserModel.findOne({
			username: credentials.username, 
			password: credentials.password
			}, function(err, user){
				if(err) {
					deferred.reject(err);
				} else {
					deferred.resolve(user);
					console.log("found user by credentials");
					console.log(user);
				}
		});
		
		return deferred.promise;
	} 
};