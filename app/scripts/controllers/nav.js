'use strict';

/**
 * @ngdoc function
 * @name chronicCareApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the chronicCareApp
 */
angular.module('chronicCareApp')
  .controller('NavCtrl', function ($scope, $location) {
  	$scope.isActive = function(viewLocation) {
  		return viewLocation === $location.path();
  	}
});
