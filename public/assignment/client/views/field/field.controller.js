(function()
{
	angular
	.module("FormBuilderApp")
	.controller("FieldController", FieldController);

	function FieldController($scope, $rootScope, FieldService, $routeParams, $http)
	{
		var current_user = $rootScope.user;
		$scope.fields = [];
		var userId = $routeParams.userId;
		var formId = $routeParams.formId;

		$scope.addField = function (field)
		{
		  if (userId != null && formId != null) {
			FieldService.createFieldForForm(userId, field).then(function (field) {
			  $scope.fields.push(field);
			  console.log("successfully added field");
			  console.log($scope.fields);
			});
		  }
		}

		$scope.removeField = function (field)
		{
		  var formId = $scope.fields[index].id;
		  $scope.forms.splice(index, 1);
		  FieldService.deleteFieldFromForm(formId, fieldId).then(function (field) {
			console.log("successfully deleted field");
			console.log($scope.fields);
		  });
		}
	}
})();