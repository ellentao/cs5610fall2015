(function()
{
	angular
	.module("PandaMusicApp")
	.controller("NewReleasesController", NewReleasesController);

	function NewReleasesController($scope, $rootScope, $http, $location)
	{
		$scope.$location = $location;
	}
})();