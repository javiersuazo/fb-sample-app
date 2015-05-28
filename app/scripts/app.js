'use strict';

/**
 * @ngdoc overview
 * @name facebookSampleApp
 * @description
 * # facebookSampleApp
 *
 * Main module of the application.
 */
angular
  .module('facebookSampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ]).config(function(FacebookProvider) {
     FacebookProvider.init('409467445903165');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
