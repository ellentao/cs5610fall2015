(function()
{
	angular
	.module("FormBuilderApp")
	.controller("FieldController", FieldController);

	function FieldController($scope, $rootScope, FieldService, $http)
	{
		var current_user = $rootScope.user;
		console.log("form id is: ");
		console.log($rootScope.formId);
		if ($rootScope.formId != null) {
			FieldService.getFieldsForForm($rootScope.formId).then(function(response) {
				$scope.fields = response;
			});
			console.log("get fields for current form");
			console.log($scope.fields);
		} else {
			$scope.fields = [];
		}
		var formId = $rootScope.formId;
		var userId;
		if (current_user != null) {
			userId = $rootScope.user.id;
		}

		$scope.addField = function (fieldType)
		{
			var field;
			if (fieldType == "SINGLELINE") {
				field = {"id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
			} else if (fieldType == "MULTILINE") {
				field = {"id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
			} else if (fieldType == "DATE") {
				field = {"id": null, "label": "New Date Field", "type": "DATE"};
			} else if (fieldType == "DROPDOWN") {
				field = 
					{"id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
						{"label": "Option 1", "value": "OPTION_1"},
						{"label": "Option 2", "value": "OPTION_2"},
						{"label": "Option 3", "value": "OPTION_3"}
					]}
			} else if (fieldType == "CHECKBOX") {
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
		  if (formId != null) {
				FieldService.createFieldForForm(formId, field)
					.then(function (field) {
						if ($scope.fields == []) {
							$scope.fields = [field];
						} else {
							$scope.fields.push(field);
						}
						console.log("successfully added field");
						console.log(field);
						console.log($scope.fields);
					});
		  }
		}

		$scope.removeField = function (index, fieldId)
		{
		  $scope.fields.splice(index, 1);
		  FieldService.deleteFieldFromForm(formId, fieldId)
				.then(function (field) {
					console.log("successfully deleted field");
					console.log($scope.fields);
				});
		}
	}
})();