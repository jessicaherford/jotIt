var app = angular.module('jotIt', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/splash.html',
        controller: 'MainController'
      })
      .when('/board', {
        templateUrl: '/partials/board.html',
        controller: 'MainController'
      })
});
