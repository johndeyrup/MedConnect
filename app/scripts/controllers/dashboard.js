'use strict';

/**
 * @ngdoc function
 * @name chronicCareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chronicCareApp
 */
angular.module('chronicCareApp')
  .controller('DashboardCtrl', function ($scope) {
  	
  	$scope.eventSources = [];
  	$scope.uiConfig = {
  		calendar: {
  			height:250,
  			editable:true,
  			header:{
  				left: "month basicWeek basicDay agendaWeek agendaDay",
  				center: "title",
  				right: "today prev, next"
  			},
  			dayClick: $scope.EventOnClick,
  			eventDrop: $scope.alertOnDrop,
  			eventResize: $scope.alertOnResize
  		}
  	};
  });
