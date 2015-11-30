module.exports = function(app, model) {
	app.get('/api/assignment/form/:formId/field', findAllFieldsForForm);
	app.get('/api/assignment/form/:formId/field/:fieldId', findFieldById);
	app.delete('/api/assignment/form/:formId/field/:fieldId', deleteFieldFromForm);
	app.post('/api/assignment/form/:formId/field', createFieldForForm);
	app.put('/api/assignment/form/:formId/field/:fieldId', updateFieldById);
	
	function findAllFieldsForForm(req, res) {
		model
			.findAllFieldsForForm(req.params.formId)
			.then(function(fields) {
				res.json(fields);
			});
	}

	function findFieldById(req, res) {
		model
			.findFieldById(req.params.formId, req.params.fieldId)
			.then(function(field) {
				res.json(field);
			});
	}

	function deleteFieldFromForm(req, res) {
		model
			.deleteFieldFromForm(req.params.formId, req.params.fieldId)
			.then(function(fields) {
				res.json(fields);
			});
	}

	function createFieldForForm(req, res) {
		model
			.createFieldForForm(req.params.formId, req.body)
			.then(function(field) {
				res.json(newField);
			});
	}

	function updateFieldById(req, res) {
		model
			.updateFieldById(req.params.formId, req.params.fieldId, req.body)
			.then(function(field) {
				res.json(field);
			});
	}
}