var Guid = require('guid');
var q = require("q");

module.exports = function(db, mongoose) {
	var UserSchema = require("./user.schema.js")(mongoose);
  var UserModel  = mongoose.model("UserModel", UserSchema);
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

		SheetModel.findById(id, function(err, user){
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

		user.delete("_id");

		SheetModel.update({_id: id}, {$set: user}, function(err, sheet) {
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(user);
			}
		});

		return deferred.promise;
	}   

	function deleteUserById(id)
	{
		var deferred = q.defer();

		SheetModel.remove({_id: id}, function(err, status) {
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

		UserModel.findOne(
			{username: credentials.username}, 
			{password: credentials.password}, 
			function(err, user){
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