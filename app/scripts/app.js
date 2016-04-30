'use strict';

/**
 * @ngdoc overview
 * @name chronicCareApp
 * @description
 * # chronicCareApp
 *
 * Main module of the application.
 */
angular
  .module('chronicCareApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/medicine', {
        templateUrl: 'views/medicine.html',
        controller: 'MedicineCtrl',
        controllerAs: 'medicine'
      })
      .when('/treatment', {
        templateUrl: 'views/treatment.html',
        controller: 'TreatmentCtrl',
        controllerAs: 'treatment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
