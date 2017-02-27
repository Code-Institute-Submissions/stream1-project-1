angular.module('BandProject1', ['ngRoute', 'RouteControllers']);

angular.module('BandProject1').config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})

	.when('/about.html', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})
	.when('/media.html', {
		templateUrl: 'templates/media.html',
		controller: 'MediaController'
	})
	.when('/gigs.html', {
		templateUrl: 'templates/gigs.html',
		controller: 'GigController'
	})
	.when('/contact.html', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	});
});