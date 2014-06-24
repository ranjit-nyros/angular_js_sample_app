// create the module and name it scotchApp
	var angApp = angular.module('angularApp', ['ngRoute']);

// configure our routes
	angApp.config(function($routeProvider) {
		$routeProvider	
			// route for the timesheet page
			.when('/', {
				templateUrl : 'pages/users/users.html',
				controller  : 'UsersController'
			})
			// route for the add page
			.when('/users', {
				templateUrl : 'pages/users/users.html',
				controller  : 'UsersController'
			})
	});




































