module.exports = function(mongoose) {
	var FollowSchema = mongoose.Schema({
		id: String,
		name: String
	});

	return FollowSchema;
};