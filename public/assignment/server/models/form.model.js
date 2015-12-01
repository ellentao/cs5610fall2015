var Guid = require('guid');
var q = require("q");

module.exports = function(db, mongoose){
	var FormSchema = require("./form.schema.js")(mongoose);
  var FormModel  = mongoose.model("FormModel", FormSchema);
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
		findAllForms: findAllForms,
	};
	
	return api;

//CRUD
	function findAllForms()
	{
		var deferred = q.defer();

		FormModel.find(function(err, forms){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(forms);
			}
		});

		return deferred.promise;
	}
	
	function findAllFormsForUser(userId)
	{
		var deferred = q.defer();

		FormModel.find({userId: userId}, function(err, forms){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(forms);
			}
		});

		return deferred.promise;
	}
	
	function createFormForUser(userId, form)
	{
		var deferred = q.defer();
		form.userId = userId;
		FormModel.create(function(err, form) {
			deferred.resolve(form);
		});

		return deferred.promise;
	}

	function findAllFormsForUser(userId)
	{
		var deferred = q.defer();
		FormModel.find({userId: userId}, function(err, forms) {
			deferred.resolve(forms);
		});

		return deferred.promise;
	}

	function findFormById(formId)
	{
		var deferred = q.defer();

		FormModel.findById(id, function(err, form){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(form);
			}
		});

		return deferred.promise; 
	}

	function updateFormById(id, form)
	{
		var deferred = q.defer();

		form.delete("_id");

		FormModel.update({_id: id}, {$set: form}, function(err, form) {
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(form);
			}
		});

		return deferred.promise;
	}

	function deleteFormById(id)
	{
		var deferred = q.defer();

		FormModel.remove({_id: id}, function(err, status) {
				if(err) {
						deferred.reject(err);
				} else {
						deferred.resolve(status);
				}
		});

		return deferred.promise;
	}

	function findFormByTitle(title)
	{
		var deferred = q.defer();

		FormModel.findOne({title: title}, function(err, form){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(form);
			}
		});

		return deferred.promise;    
	}

	function deleteFieldFromForm(formId, fieldId)
	{
		var deferred = q.defer();

		FormModel.findById(sheetId, function(err, form){
			var fields = form.fields;
			for (var i = 0; i < fields.length; i++) {
				if (fields[i]._id == fieldId) {
					form.fields.splice(i, 1);
					form.save(function(err, form){
						deferred.resolve(form.fields);
					});
				}
			}
		});
		
		return deferred.promise;
	}

	function createFieldForForm(formId, field)
	{
		var deferred = q.defer();

		FormModel.findById(formId, function(err, form){
				form.fields.push(field);
				form.save(function(err, form){
						deferred.resolve(form.fields);
				});
		});

		return deferred.promise;
	}
	
	function findAllFieldsForForm(formId)
	{
		var deferred = q.defer();

		FormModel.findById(formId, function(err, form){
			if(err) {
				deferred.reject(err);
			} else {
				deferred.resolve(form.fields);
			}
		});

		return deferred.promise;
	}
	
	function findFieldById(formId, fieldId)
	{
		var deferred = q.defer();

		FormModel.findById(formId, function(err, form){
			var fields = form.fields;
			for (var i = 0; i < fields.length; i++) {
				if (fields[i]._id == fieldId) {
					deferred.resolve(fields[i]);
				}
			}
		});

		return deferred.promise;
	}
	
	function updateFieldById(formId, fieldId, newField)
	{
		var deferred = q.defer();

		FormModel.findById(formId, function(err, form){
			var fields = form.fields;
			for (var i = 0; i < fields.length; i++) {
				if (fields[i]._id == fieldId) {
					fields[i] = newField;
					deferred.resolve(fields[i]);
				}
			}
		});

		return deferred.promise;
	}
};