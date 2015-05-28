'use strict';

/**
 * @ngdoc function
 * @name facebookSampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facebookSampleApp
 */
angular.module('facebookSampleApp')
  .controller('MainCtrl', function ($scope,Facebook) {
    $scope.login = function(){
      Facebook.login(function(response) {
        console.log(response);
      });
    };
  });
