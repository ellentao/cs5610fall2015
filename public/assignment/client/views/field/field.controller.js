(function()
{
	angular
	.module("FormBuilderApp")
	.controller("FieldController", FieldController);

	function FieldController($scope, $rootScope, FieldService, $routeParams, $http)
	{
		var current_user = $rootScope.user;
		var fields = FieldService.getFieldsForForm($rootScope.formId);
		console.log("form id is: ");
		console.log($rootScope.formId);
		if (fields != null) {
			$scope.fields = fields;
			console.log("get fields for current form");
			console.log(fields);
		} else {
			$scope.fields = [];
		}	
		var userId = $routeParams.userId;
		var formId = $routeParams.formId;

		$scope.addField = function (fieldType)
		{
			var field;
			if (fieldType == "Single Line Text") {
				field = {"id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
			} else if (fieldType == "Multi Line Text") {
				field = {"id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
			} else if (fieldType == "Date") {
				field = {"id": null, "label": "New Date Field", "type": "DATE"};
			} else if (fieldType == "Dropdown") {
				field = 
					{"id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
						{"label": "Option 1", "value": "OPTION_1"},
						{"label": "Option 2", "value": "OPTION_2"},
						{"label": "Option 3", "value": "OPTION_3"}
					]}
			} else if (fieldType == "Checkboxes") {
				field = 
					{"id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
						{"label": "Option A", "value": "OPTION_A"},
						{"label": "Option B", "value": "OPTION_B"},
						{"label": "Option C", "value": "OPTION_C"}
					]}
			} else {
				field = 
					{"id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
						{"label": "Option X", "value": "OPTION_X"},
						{"label": "Option Y", "value": "OPTION_Y"},
						{"label": "Option Z", "value": "OPTION_Z"}
					]}
			}
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