var app = angular.module('jotIt', ['ngRoute','ngResource'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/splash.html',
        controller: 'SplashController'
      })
      .when('/boards', {
        templateUrl: '/partials/boards.html',
        controller: 'MainController'
      })
      .when('/boards/:id', {
        templateUrl: '/partials/notes.html',
        controller: 'BoardShowController'
      })
    $locationProvider.html5Mode(true);
});
