module.exports = function(mongoose) {
	var FieldSchema = require("./field.schema.js")(mongoose);
	var FormSchema = mongoose.Schema({
		title: String,
		userId: String,
		fields: [FieldSchema],
		placeholder: String
	}, {collection: "cs5610.assignment.form"});

	return FormSchema;
};