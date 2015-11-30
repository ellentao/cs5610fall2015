(function()
{
  angular
    .module("FormBuilderApp")
    .controller("HeaderController", HeaderController);
    
  function HeaderController($location)
  {
		var model = this;
    model.$location = $location;
    console.log($location.url());
  }
})();