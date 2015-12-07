(function()
{
  angular
    .module("PandaMusicApp")
    .controller("HeaderController", HeaderController);
    
  function HeaderController($rootScope, $location)
  {
		var model = this;
		model.$location = $location;
		model.user = $rootScope.user;
		
		if ($rootScope.user != null) {
			model.loginMessage = "yes";
		} else {
			model.loginMessage ="no";
		}
		console.log("current login message is: ");
		console.log(model.loginMessage);
  }
})();