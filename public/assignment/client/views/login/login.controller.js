(function()
{
  angular
    .module("FormBuilderApp")
    .controller("LoginController", LoginController);
    
  function LoginController($rootScope, $location, UserService)
  { 
		var model = this;
    model.$location = $location;
    model.login = function (loginUser)
    {
      UserService
				.findUserByUsernameAndPassword(loginUser.username, loginUser.password)
				.then(function (user) {
        if (user != null) {
          $rootScope.user = user;
          $location.url("/profile");
          console.log("current login user is: ");
          console.log($rootScope.user);
      	}
      });
      UserService
				.findAllUsers()
				.then(function(users){
        console.log("All registered users are: ")
        console.log(users);
      });
    }
  }
})();