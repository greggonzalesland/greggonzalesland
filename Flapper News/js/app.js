var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.posts = [
  {title: 'post 1', upvotes: 4},
  {title: 'post 2', upvotes: 2},
  {title: 'post 3', upvotes: 15},
  {title: 'post 4', upvotes: 9},
  {title: 'post 5', upvotes: 4}
];

$scope.addPost = function() {
  if ($scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    commentary: $scope.commentary,
    upvotes: 4
  });
  $scope.title = '';
  $scope.link = '';
  $scope.commentary = '';
}
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  }
}]);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
