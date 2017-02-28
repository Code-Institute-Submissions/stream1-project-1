angular.module('BandProject1', ['ngRoute', 'RouteControllers']);

angular.module('BandProject1').config(function($locationProvider, $routeProvider){
	

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})

	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/media', {
		templateUrl: 'templates/media.html',
		controller: 'MediaController'
	})
	.when('/gigs', {
		templateUrl: 'templates/gigs.html',
		controller: 'GigController'
	})
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	});
	$locationProvider.html5Mode(true);
});