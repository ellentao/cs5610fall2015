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
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    
    function findUserByUsernameAndPassword(username, password, callback)
    {
      var user;
      for (var i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
          user = users[i];
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
        id: guid(),
        username : user.username,
        password : user.password,
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
          console.log("found this id");
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