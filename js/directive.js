angular.module('FooterDirective', [])
.directive('footerDirective', function() {

	return {
		restrict: 'EA', // E/A -> element/attribute
		templateUrl: '/templates/directives/footerDirective.html'
	};
});


