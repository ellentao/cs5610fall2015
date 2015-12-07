(function()
{
	angular
	.module("PandaMusicApp")
	.factory("CommentService", commentService);

	function commentService($http, $q)
	{ 
		var service = {
			addComment : addComment,
			findAllCommentsByAlbumId : findAllCommentsByAlbumId,
			findAllCommentsByUserId : findAllCommentsByUserId
		};

		return service;
		
		function addComment(comment)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/comment/', comment)
				.success(function(response) {
					console.log("in client services, add comment");
					console.log(response);
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}
		
		function findAllCommentsByAlbumId(albumId)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/comment/' + albumId +'?type=album')
				.success(function(response) {
					console.log("in client services, find comments");
					console.log(response);
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
		function findAllCommentsByUserId(userId)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user/' + userId +'/comment')
				.success(function(response) {
					console.log("in client services, find current user's comments");
					console.log(response);
					deferred.resolve(response);
				});
			return deferred.promise;
		}
		
//		function findAllFormsForUser(userId)
//		{
//			var deferred = $q.defer();
//			$http
//				.get('/api/assignment/user/' + userId + '/form')
//				.success(function(response) {
//					deferred.resolve(response);	
//				});						 
//			return deferred.promise;
//		}
//		function createFormForUser(userId, form)
//		{
//			var deferred = $q.defer();
//			$http
//				.post('/api/assignment/user/' + userId + '/form', form)
//				.success(function(response) {
//					deferred.resolve(response);
//				});						 
//			return deferred.promise;
//		}
		
//		function findAlbumsByUserId(userId)
//		{
//			var deferred = $q.defer();
//			$http
//				.get('/api/project/user/' + userId + '/album')
//				.success(function(response) {
//					deferred.resolve(response);
//				});
//			return deferred.promise;
//		}
//		
//		function deleteAlbumFromUser(userId, albumId)
//		{
//			var deferred = $q.defer();
//			$http
//				.delete('/api/project/user/' + userId + '/album/' + albumId)
//				.success(function(response) {
//					deferred.resolve(response);
//				});
//			return deferred.promise;
//		}
		
	}
})();