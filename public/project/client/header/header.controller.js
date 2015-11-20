(function()
{
  angular
    .module("PandaMusicApp")
    .controller("HeaderController", HeaderController);
    
  function HeaderController($scope, $location)
  {
    $scope.$location = $location;
    console.log($location.url());
  }
})();