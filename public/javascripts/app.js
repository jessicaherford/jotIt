var app = angular.module('jotIt', ['ngRoute'])

app.config(function($routeProvider) {
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
      .when('/notes', {
        templateUrl: '/partials/notes.html',
        controller: 'MainController'
      })
});
