var forms = require("./form.mock.json");
var Guid = require('guid');
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
		updateFieldById: updateFieldById,
		findAllForms: findAllForms
	};
	
	return api;

//CRUD
	function findAllForms()
	{
		return forms;
	}
	
	function createFormForUser(userId, form)
	{
		var newForm = {
			id: Guid.create(),
			title: form.title,
			userId: userId
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
		var form = findFormById(formId);
		for (var i = 0; i < form.fields.length; i++) {
				form.fields.splice(i, 1);
				console.log("deleted field from form");
				console.log(form.fields);
		}
		return form.fields;
	}

	function createFieldForForm(formId, field)
	{
		var form = findFormById(formId);
		var newField = {
			id: Guid.create(),
			label: field.label,
			type: field.type,
			placeholder: field.placeholder,
			options: field.options
		};
		if (form != null) {
			form.fields.push(newField);
			console.log("added field in form");
			console.log(form.fields);
			return newField;
		}
		return null;
	}
	
	function findAllFieldsForForm(formId)
	{
		var form = findFormById(formId);
		if (form != null) {
			console.log("found fields for form:");
			console.log(form);
			console.log(form.fields);
			return form.fields;
		}
		return null;
	}
	
	function findFieldById(formId, fieldId)
	{
		var form = findFormById(formId);
		for (var i = 0; i < form.fields.length; j++) {
			if (form.fields[i].id == fieldId) {
				return form.fields[i];
			}
		}  
		return null;  
	}
	
	function updateFieldById(formId, fieldId, newField)
	{
		var field = findFieldById(formId, fieldId);
		field = newField;
		console.log("found field");
		console.log(field);
		return field;
	}
};