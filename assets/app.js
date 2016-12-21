var app = angular.module('app', []);
app.controller('PostsCtrl', function($scope, PostSvc) {

  $scope.addPost = function() {
    if ($scope.postBody) {
      PostSvc.create({
        username: $scope.postUsername,
        body: $scope.postBody
      }).then(function(post){
        $scope.posts.unshift(post.data);
        $scope.postUsername = null;
        $scope.postBody = null;
      })
    }
  }
  PostSvc.fetch().then(function(posts){
    $scope.posts = posts.data
  })
});

app.service('PostSvc', function($http){
  this.fetch = function() {
    return $http.get('/api/posts');
  }
  this.create = function(post) {
    return $http.post('/api/posts', post);
  }
})
