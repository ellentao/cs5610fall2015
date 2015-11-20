(function()
{
	angular
	.module("PandaMusicApp")
	.controller("PopularArtistController", PopularArtistController);

	function PopularArtistController($scope, $rootScope, $http, $location)
	{
		$scope.$location = $location;
	}
})();