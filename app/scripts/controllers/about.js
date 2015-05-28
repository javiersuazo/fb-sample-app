'use strict';

/**
 * @ngdoc function
 * @name facebookSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the facebookSampleApp
 */
angular.module('facebookSampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
