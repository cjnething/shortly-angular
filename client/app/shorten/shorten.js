angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    console.log('adding link:' + $scope.link);
    Links.addLink($scope.link).then(function(data){
      return data;
    })
  };
});
