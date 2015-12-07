module.exports = function(mongoose) {
	var SongSchema = require("./Song.schema.js")(mongoose);
	var ArtistSchema = require("./Artist.schema.js")(mongoose);
	var AlbumSchema = require("./Album.schema.js")(mongoose);
	var UserSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String,
		password: String,
		favoriteSongs:[SongSchema],
		favoriteArtists:[ArtistSchema],
		favoriteAlbums:[AlbumSchema],
	}, {collection: "cs5610.project.user"});

	return UserSchema;
};