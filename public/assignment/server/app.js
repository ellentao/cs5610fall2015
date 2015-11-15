module.exports = function(app, mongoose, db) {
	var userModel = require("./models/user.model.js")();
	var formModel = require("./models/form.model.js")();

	require("./services/user.service.js")(app, userModel);
	require("./services/form.service.js")(app, formModel);
	require("./services/field.service.js")(app, formModel);
};