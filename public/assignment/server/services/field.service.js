module.exports = function(app, model) {
	app.get('/api/assignment/form/:formId/field', function (req, res) {
		var formId = req.params.formId;
		var fields = model.findAllFieldsForForm(formId);
		res.json(fields);
	});

	app.get('/api/assignment/form/:formId/field/:fieldId', function (req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		var field = model.findFieldById(formId, fieldId);
		res.json(field);
	});

	app.delete('/api/assignment/form/:formId/field/:fieldId', function (req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		var fields = model.deleteFieldFromForm(formId, fieldId);
		res.json(fields);
	});

	app.post('/api/assignment/form/:formId/field', function (req, res) {
		var formId = req.params.formId;
		var field = req.body;
		var newField = model.createFieldForForm(formId, field);
		res.json(newField);
	});

	app.put('/api/assignment/form/:formId/field/:fieldId', function (req, res) {
		var formId = req.params.formId;
		var fieldId = req.params.fieldId;
		var field = req.body;
		var newField = model.updateFieldById(formId, fieldId, field);
		res.json(newField);
	});
}