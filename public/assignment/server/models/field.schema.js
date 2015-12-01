module.exports = function(mongoose) {
	var FieldSchema = mongoose.Schema({
		id: String,
		label: String,
		type: String,
		options: {
			label: String,
			value: String
		},
		placeholder: String
	});

	return FieldSchema;
};