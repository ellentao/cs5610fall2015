(function()
{
  angular
    .module("FormBuilderApp")
    .factory("UserService", userService);
    
  function userService()
  {
    var users = [];
    
    var service = {
      findUserByUsernameAndPassword : findUserByUsernameAndPassword,
      findAllUsers : findAllUsers,
      createUser : createUser,
      deleteUserById : deleteUserById,
      updateUser : updateUser
    };
    
    return service;
    
    function findUserByUsernameAndPassword(username, password, callback)
    {
      var user;
      for (var i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
          user = user[i];
        }  
      }
      callback(user);
    }
    
    function findAllUsers(callback)
    {
      callback(users);
    }
    
    
    function createUser(user, callback)
    {
      var newUser = {
        id: Guid.create(),
        username : user.username,
        password : user.password,
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email
      };
      users.push(newUser);
      callback(newUser);
    }
    
    function deleteUserById(id, callback)
    {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          users.splice(i, 1);
        }
      }
      callback(users);
    }
    
    function updateUser(id, user, callback)
    {
      var updateUser;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
          users[i] = {
            id: id,
            username: user.username,
            password: user.password,
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email
          };
          updateUser = users[i];
        }
      }
      callback(updateUser);
    }    
  }
})();