(function()
{
	angular
	.module("PandaMusicApp")
	.controller("AlbumController", AlbumController);

	function AlbumController($scope, $location)
	{
		$scope.$location = $location;
	}
})();