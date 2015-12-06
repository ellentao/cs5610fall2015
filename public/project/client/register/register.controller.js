(function()
{
  angular
    .module("PandaMusicApp")
    .controller("RegisterController", RegisterController);
    
  function RegisterController($location, $rootScope, UserService)
  {
		var model = this;
    model.$location = $location;
    
    model.register = function (registerUser) {      
      if (registerUser.username != null && registerUser.password == registerUser.password2) {
        UserService.createUser(registerUser).then(function (user) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current register user is ");
          console.log($rootScope.user);
        });
      }
      
      UserService.findAllUsers().then(function (users){
        console.log("All registered users are: ")
        console.log(users);
      });
    }
  }
})();