(function()
{
  angular
    .module("PandaMusicApp")
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
					model.loginDisplayMessage ="success";
					if ($rootScope.location != null) {
						$location.url($rootScope.location);
					} else {
						$location.url("/profile");
					}
          
          console.log("current login user is: ");
          console.log($rootScope.user);
      	} else {
					model.loginDisplayMessage ="error";
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