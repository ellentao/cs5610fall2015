module.exports = function(app) {
	var userModel = require("./models/user.model.js")(app);
	var albumModel = require("./models/album.model.js")(app);
	var artistModel = require("./models/artist.model.js")(app);
	var searchModel = require("./models/search.model.js")(app);
	var songModel = require("./models/song.model.js")(app);

	require("./services/user.service.js")(app, userModel);
	require("./services/album.service.js")(app, albumModel);
	require("./services/artist.service.js")(app, artistModel);
	require("./services/search.service.js")(app, searchModel);
	require("./services/song.service.js")(app, songModel);
};