// Start the main module to be used for angular app
var mainApp = angular.module('mainApp', [ 'ngRoute', 'chart.js' ]).constant(
		'baseURL', 'http://localhost:8080/TrackForce/track/');

// Setup constants for use in angular code
//mainApp.constant('baseURL', 'http://localhost:8080/TrackForce/track/');

// Configure $routeProvider to create a Single Page Application
mainApp.config(function($routeProvider) {
	$routeProvider

	// Home Page route
	.when("/", {
		templateUrl : "home.html",
		controller : "mainCtrl"
	})

	// Mapped View Page route
	.when("/batchListing", {
		templateUrl : "batchListing.html",
		controller : "batchCtrl"
	})

	// Unmapped View Page route
	.when("/batchDetails", {
		templateUrl : "batchDetails.html",
		controller : "batchCtrl"
	})

});

mainApp.controller("mainCtrl", function mainCtrl($scope, $http) {

})

mainApp.controller("batchCtrl", function($scope, $http, baseURL) {

	$scope.batches = 'hello';
	
	$scope.getBatches = function() {
		console.log($scope.fromdate);
		console.log($scope.todate);
		var fromdate = $scope.fromdate;
		var todate = $scope.todate;
		
		// Simple GET request example:
		$http({
			method : 'GET',
			url : baseURL + 'batches/' + fromdate + '/' + todate,
			data : {fromdate, todate},
		    headers: {'Content-Type': 'application/json' }
		}).then(function(success) {
			$scope.batches = data;
			console.log($scope.batches);
			console.log(baseURL);
		}, function(error) {
			console.log('Error in doing http request')
		});

	};

	$scope.getCountPerBatchType = function($http) {
		// Simple GET request example:
		$http({
			method : 'GET',
			url : 'http://localhost:8080/TrackForce/track/batches/type'
		}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.amountType = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			$scope.amountType = {
				"JTA_SDET" : "2",
				".NET" : "3"
			}
		})

	};

	$scope.getBatchAssociates = function($http) {
		// Simple GET request example:
		$http(
				{
					method : 'GET',
					url : 'http://localhost:8080/TrackForce/track/batches/'
							+ $scope.batchname + '/associates'
				}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.associatesBatch = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			$scope.assosicatesBatch = {
				"firstname" : "Raul",
				"lastname" : "Dummy-Data",
				"associateId" : "000"
			};
		})

	};

	$scope.getBatchInfo = function($http) {
		// Simple GET request example:
		$http(
				{
					method : 'GET',
					url : 'http://localhost:8080/TrackForce/track/batches'
							+ $scope.batchname + '/info'
				}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.batchInfo = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			$scope.batchInfo = {
				"startdate" : "09/11/2017",
				"enddate" : "11/17/2017"
			};
		})

	};

	$scope.getMapStatusBatch = function($http) {
		// Simple GET request example:
		$http(
				{
					method : 'GET',
					url : 'http://localhost:8080/TrackForce/track/batches'
							+ $scope.batchname + '/batchChart'
				}).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.batchMapStatus = response.data;
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			$scope.batchMapSatus = {
				"Mapped" : "0",
				"Unmapped" : "0"
			}
		})

	};

	$scope.labels = [ 'Mapped', 'Unmapped' ];
	$scope.series = [ 'Series A' ];
	$scope.data = [ 70, 61 ];
	$scope.options = {
		scales : {
			yAxes : [ {
				ticks : {
					beginAtZero : true
				}
			} ]
		}
	};
});
