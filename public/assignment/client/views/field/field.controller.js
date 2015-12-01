(function()
{
	angular
	.module("FormBuilderApp")
	.controller("FieldController", FieldController);

	function FieldController($location, $rootScope, FieldService, $http)
	{
		var model = this;
		model.$location = $location;
		var current_user = $rootScope.user;
		var userId;
		if (current_user != null) {
			userId = $rootScope.user._id;
		}
		var formId = $rootScope.formId;
		console.log("form id is: ");
		console.log(formId);
		if (formId != null) {
			FieldService.getFieldsForForm(formId).then(function(response) {
				model.fields = response;
				console.log("get fields for current form");
				console.log(model.fields);
			});
		} else {
			model.fields = [];
		}

		model.addField = function (fieldType)
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
				console.log("formId is not null");
				console.log(formId);
				FieldService.createFieldForForm(formId, field)
					.then(function (result) {
						model.fields.push(field);
					});
		  }
		}

		model.removeField = function (index, fieldId)
		{
		  model.fields.splice(index, 1);
		  FieldService.deleteFieldFromForm(formId, fieldId)
				.then(function (result) {
					console.log("successfully deleted field");
					console.log(model.fields);
				});
		}
	}
})();