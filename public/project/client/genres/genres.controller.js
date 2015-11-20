(function()
{
	angular
	.module("PandaMusicApp")
	.controller("GenresController", GenresController);

	function GenresController($scope, $rootScope, FieldService, $http, $location)
	{
		 $scope.$location = $location;
	}
})();