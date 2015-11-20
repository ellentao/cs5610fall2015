(function()
{
	angular
	.module("PandaMusicApp")
	.controller("ArtistController", ArtistController);

	function ArtistController($scope, $rootScope, FieldService, $http, $location)
	{
		 $scope.$location = $location;
	}
})();