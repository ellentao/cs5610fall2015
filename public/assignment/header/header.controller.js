(function()
{
  angular
    .module("FormBuilderApp")
    .controller("HeadController", HeadController);
    
  function HeadController($scope, $location)
  {
    $scope.$location = $location;
    console.log($location.url());
  }
})();