angular.module('RouteControllers', [])

	.controller('HomeController', function($scope){

	})
	.controller('AboutController', function($scope){

	})
	.controller('MediaController', function($scope){

		$(document).ready(function(){
			// preload images
			$('.modal-thumb').each( function () {
			    img = new Image();
			    img.src = $(this).data('modal-src');
			});

			$('.modal-thumb').on('click', function () {
			    var title = $(this).data('modal-title'),
			        src = $(this).data('modal-src');
			    
			    $('#modal h4').text(title);
			    $('#modal img').attr('src', src);

			    $('#modal').modal('show');
			});				
	});
	})
	.controller('GigController', function($scope){

	})

	.controller('ContactController', function($scope){

		$scope.contactUser = {};


		$scope.submitForm = function (){
			if ($scope.contactForm.$valid){
				$scope.contactUser.name = $scope.user.name;
				$scope.contactUser.email = $scope.user.email;
				$scope.contactUser.mobile = $scope.user.mobile;
				$scope.contactUser.message = $scope.user.message;

				alert('form has been submitted');

				$scope.submitted = true;
			}
		

		console.log($scope.contactUser.name + " " + $scope.contactUser.email + " " + $scope.contactUser.mobile + " " + $scope.contactUser.message);
			
		};


		});
		
	


