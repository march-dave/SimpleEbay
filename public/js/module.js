'use strict';

var app = angular.module('spApp', ['ui.router', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/authForm.html', controller: 'authFormCtrl' })
    .state('register', { url: '/register', templateUrl: '/html/register.html', controller: 'authFormCtrl' })
    .state('profile', { url: '/profile', templateUrl: '/html/profile.html', controller: 'profileCtrl' })

  $urlRouterProvider.otherwise('/')
});

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };
});
