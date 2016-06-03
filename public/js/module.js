'use strict';

// var app = angular.module('spApp', ['ui.router', 'stormpath', 'stormpath.templates']);
var app = angular.module('spApp', ['ui.router', 'satellizer']);

// app.run(function($stormpath){
//   $stormpath.uiRouter({
//     loginState: 'login',
//     defaultPostLoginState: 'home'
//   });
// });

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('login', { url: '/login', templateUrl: '/html/authForm.html' })
    .state('register', { url: '/register', templateUrl: '/html/register.html' })

    .state('profile', { url: '/profile', templateUrl: '/html/profile.html',
    controller: 'profileCtrl'
     })
    .state('quotes', {
      url:'/quotes',
      templateUrl: '/html/quotes.html',
      controller: 'quotesCtrl'
      ,resolve: {
        SimpleEBayResolve: function(SimpleEBayService) {
          return SimpleEBayService.getItemAll();
          // return 'SimpleEBayService.getItemAll();'
        }
      }
    })

  $urlRouterProvider.otherwise('/')
});

app.filter('titlecase', function() {
  return function(input) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };
});
