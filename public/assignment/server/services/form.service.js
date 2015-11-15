module.exports = function(app, model) {
	app.get('/api/assignment/user/:userId/form', function (req, res) {
		var userId = req.params.userId;
		var newForm = model.createFormForUser(userId, form);
		res.json(newForm);
	});

	app.get('/api/assignment/form/:formId', function (req, res) {
		var id = req.params.formId;
		var form = model.findFormById(id);
		res.json(form);
	});

	app.delete('/api/assignment/form/:formId', function (req, res) {
		var id = req.params.formId;
		var forms = model.deleteFormById(id);
		res.json(forms);
	});

	app.post('/api/assignment/user/:userId/form', function (req, res) {
		var userId = req.params.userId;
		var form = req.body;
		var newForm = model.createFormForUser(userId, form);
		res.json(newForm);
	});

	app.put('/api/assignment/form/:formId', function (req, res) {
		var id = req.params.formId;
		var form = req.body;
		var newForm = model.updateFormById(id, form);
		res.json(newForm);
	});
}