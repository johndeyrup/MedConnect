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
  	
  	$scope.days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
  	"October", "November", "December"];
  	var date = new Date();
  	var this_month = date.getMonth() + 1;
  	$scope.month = months[this_month-1];
  	var today = date.getDay();
  	var this_day = date.getDate();
  	var this_year = date.getFullYear();
  	var next_week = [];
  	var max_date = new Date(this_year, this_month, 0).getDate();
  	console.log(max_date);
  	for (var i = 0; i < 7; i++) {
  		if(this_day + i > max_date) {
  			this_day = 1;
  			next_week.push(this_day);
  		}
  		else {
  			next_week.push(this_day);
  			this_day += 1;
  		}
		
  	}
  	$scope.days_week = $scope.days_week.slice(today).concat($scope.days_week.slice(0,today));
  	$scope.days_left = next_week;
  	
  	$scope.medicine_list = [["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am",
  	"Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", "Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm"], 
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am",
  	"Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", "Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm", "Calcium acetate - 3 times day with meal"],
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am","Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", 
  	"Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm"],
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am","Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", 
  	"Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm", "Calcium acetate - 3 times day with meal"],
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am","Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", 
  	"Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm"],
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am","Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", 
  	"Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm", "Calcium acetate - 3 times day with meal"],
  	["Insulin glargine - 8 pm", "Calcium acetate - 3 times a day (with every meal)", "Lisinopril 8am","Carvedilol - 8 am, 8 pm", "Atorvastatin - 8pm", 
  	"Aspirin - 8am", "Furosemide - 8 am", "Sertraline - 8pm"]]


  });
