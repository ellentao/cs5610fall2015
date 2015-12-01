module.exports = function(app, model) {
	app.get('/api/assignment/form', findAllForms);
	app.get('/api/assignment/user/:userId/form', findAllFormsForUser);
	app.get('/api/assignment/form/:formId', findFormById);
	app.delete('/api/assignment/form/:formId', deleteFormById);
	app.post('/api/assignment/user/:userId/form', createFormForUser);
	app.put('/api/assignment/form/:formId', updateFormById);
					
	function findAllForms(req, res) {
		model
		.findAllForms()
		.then(function(forms){
			res.json(forms);
		});
	}
	
	function findAllFormsForUser(req, res) {
		model
			.findAllFormsForUser(req.params.userId)
			.then(function(forms){
				res.json(forms);
			});
	}

	function findFormById(req, res) {
		model
			.findFormById(req.params.formId)
			.then(function(form){
				res.json(form);
			});
	}

	function deleteFormById(req, res) {
		model
			.deleteFormById(req.params.formId)
			.then(function(forms){
				res.json(forms);
			});
	}

	function createFormForUser(req, res) {
		var userId = req.params.userId;
		var form = req.body;
		var newForm = {
				id : null,
				title : form.title,
				userId : userId,
				fields : form.fields
		};
		model
			.createFormForUser(newForm)
			.then(function(result){
				res.json(result);
			});
	}

	function updateFormById(req, res) {
		model
			.updateFormById(req.params.formId, req.body)
			.then(function(form){
				res.json(form);
			});
	}
};