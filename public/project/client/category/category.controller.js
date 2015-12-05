(function()
{
	angular
	.module("PandaMusicApp")
	.controller("CategoryController", categoryController);

	function categoryController($scope, $rootScope, $http, $location)
	{
		$scope.$location = $location;
	}
})();