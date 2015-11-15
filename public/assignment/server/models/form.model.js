var forms = require("./form.mock.json");
require("guid");
module.exports = function(app){
	var api = {
		createFormForUser: createFormForUser,
		findAllFormsForUser: findAllFormsForUser,
		findFormById: findFormById,
		updateFormById: updateFormById,
		deleteFormById: deleteFormById,
		findFormByTitle: findFormByTitle,
		deleteFieldFromForm: deleteFieldFromForm,
		createFieldForForm: createFieldForForm,
		findAllFieldsForForm: findAllFieldsForForm,
		findFieldById: findFieldById,
		updateFieldById: updateFieldById
	};

//CRUD
	function createFormForUser(userId, form)
	{
		var newForm = {
			id: Guid.create(),
			userId: userId,
			formName: form.formName
		};
		forms.push(newForm);
		console.log("added in forms");
		console.log(forms);
		return newForm;
	}

	function findAllFormsForUser(userId)
	{
		var formsForUser = [];
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].userId == userId) {
				formsForUser.push(forms[i]);
			}
		}
		console.log("find all forms");
		console.log(forms);
		return formsForUser;
	}

	function findFormById(formId)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				console.log("found form id");
				console.log(forms[i]);
				return forms[i];     
			}
		}
		return null;  
	}

	function updateFormById(formId, newForm)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				forms[i] = newForm;
				console.log("found form id");
				console.log(newForm);
				return forms[i];     
			}
		}
		return null;
	}

	function deleteFormById(formId)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				forms.splice(i, 1);
				return forms;
			}
		}
		console.log("deleted in forms");
		console.log(forms);
		return forms;
	}

	function findFormByTitle(title)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].title == title) {
		console.log("found form title");
		console.log(forms[i]);
		return forms[i];     
			}
		}
		return null;      
	}

	function deleteFieldFromForm(formId, fieldId)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				for (var j = 0; j < forms[i].fields.length; j++) {
					fields.splice(j, 1);
					console.log("deleted field from form");
					console.log(forms[i].fields);
					return fields;
				}
				return forms[i].fields;
			}
		}
		return null;
	}

	function createFieldForForm(formId, field)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				var newField = {
					id: Guid.create(),
					label: field.label,
					type: field.type,
					placeholder: field.placeholder
				};
				forms[i].fields.push(newField);
				console.log("added field in form");
				console.log(forms[i].fields);
				return newField;
			}
		}
		return null;
	}
	
	function findAllFieldsForForm(formId)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				return forms[i].fields;
			}
		}
		return null;
	}
	
	function findFieldById(formId, fieldId)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				for (var j = 0; j < forms[i].fields.length; j++) {
					if (forms[i].fields[j].id == fieldId) {
						return forms[i].fields[j];
					}
				}  
			}
		}
		return null;  
	}
	
	function updateFieldById(formId, fieldId, newField)
	{
		for (var i = 0; i < forms.length; i++) {
			if (forms[i].id == formId) {
				for (var j = 0; j < forms[i].fields.length; j++) {
					if (forms[i].fields[j].id == fieldId) {
						forms[i].fields[j] = newField;
						console.log("found field");
						console.log(forms[i].fields[j]);
						return forms[i].fields[j];
					}
				}    
			}
		}
		return null;
	}
};