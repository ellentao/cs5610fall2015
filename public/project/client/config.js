(function()
{
  angular
    .module("PandaMusicApp")
    .config(Config);
    
  function Config($routeProvider)
  {
    $routeProvider
      .when("/home",
      {
        templateUrl: "home/home.view.html"
      })
      .when("/login",
      {
        templateUrl: "login/login.view.html",
        controller: "LoginController"
      })
      .when("/register",
      {
        templateUrl: "register/register.view.html",
        controller: "RegisterController"
      })
      .when("/profile",
      {
        templateUrl: "profile/profile.view.html",
        controller: "ProfileController"
      })
      .when("/album",
      {
        templateUrl: "album/album.view.html",
        controller: "AlbumController"
      })
			.when("/artist",
      {
        templateUrl: "artist/artist.view.html",
        controller: "ArtistController"
      })
			.when("/genres",
      {
        templateUrl: "genres/genres.view.html",
        controller: "GenresController"
      })
			.when("/new-releases",
      {
        templateUrl: "new-releases/new-releases.view.html",
        controller: "NewReleasesController"
      })
			.when("/popular-artist",
      {
        templateUrl: "popular-artist/popular-artist.view.html",
        controller: "PopularArtistController"
      })
			.when("/search",
      {
        templateUrl: "search/search.view.html",
        controller: "SearchController"
      })
			.when("/song",
      {
        templateUrl: "song/song.view.html",
        controller: "SongController"
      })
			.when("/user",
      {
        templateUrl: "user/user.view.html",
        controller: "UserController"
      })
			.when("/user-comment",
      {
        templateUrl: "user-comment/user-comment.view.html",
        controller: "UserCommentController"
      })
			.when("/user-follow",
      {
        templateUrl: "user-follow/user-follow.view.html",
        controller: "UserController"
      })
			.when("/user-guess",
      {
        templateUrl: "user-guess/user-guess.view.html",
        controller: "UserGuessController"
      })
      .otherwise({
        redirectTo: "/home"
      })
  }
})();