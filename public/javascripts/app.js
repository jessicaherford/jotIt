var app = angular.module('jotIt', ['ngRoute','ngResource'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/splash.html',
        controller: 'MainController'
      })
      .when('/users', {
        templateUrl: '/partials/users.html',
        controller: 'MainController'
      })
      .when('/boards', {
        templateUrl: '/partials/boards.html',
        controller: 'MainController'
      })
      .when('/boards/:id/notes', {
        templateUrl: '/partials/notes.html',
        controller: 'MainController'
      })
      // .when('/boards/:id', {
      //   templateUrl: 'partials/notes.html',
      //   controller: 'CatController'
      // })
    $locationProvider.html5Mode(true);
});
