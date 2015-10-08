'use strict';

angular.module('myApp.reddit', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reddit', {
    templateUrl: 'reddit/reddit.html',
    controller: 'redditCtrl'
  });
}])

.controller('redditCtrl', [function() {

}]);