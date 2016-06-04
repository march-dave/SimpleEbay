'use strict';

var app = angular.module('spApp', ['ui.router', 'satellizer']);
// var app = angular.module('spApp', ['ui.router']);

app.run(function(Auth) {
  Auth.getProfile();
});

var resolveObj = {
  profile: function(Auth, $q, $state) {
    return Auth.getProfile()
    .catch(() => {
      $state.go('home');
      return $q.reject();
    });
  }
}

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
// app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/authForm.html', controller: 'authFormCtrl' })
    .state('register', { url: '/register', templateUrl: '/html/authForm.html', controller: 'authFormCtrl' })
    .state('profile', { url: '/profile', templateUrl: '/html/profile.html', controller: 'profileCtrl', resolve: resolveObj })
  $urlRouterProvider.otherwise('/')
});

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };
});
