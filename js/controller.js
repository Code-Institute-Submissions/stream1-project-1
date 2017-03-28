angular.module('RouteControllers', [])

	.controller('HomeController', function($scope){

		$scope.subscribeUser ={};

	
		$scope.submitForm = function (){
			if($scope.subscribeForm.$valid){
				$scope.subscribeUser.email = $scope.user.email;

				$scope.submitted = true;

			//will clear the field 
			$scope.user.email = '';
		}
		console.log($scope.subscribeUser.email);
	};

	
	
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
/*
		var now = new Date;
		$('.expired-date').text(function (i, v){
			if ( now > new Date(v)) {
				$(this).addClass('expired-date');

			}
		});
*/
		var gigs = $('.js-gig-date'); // variable gigs is the class that is applied to the gig table
		var now = new Date();
		console.log(now);
		gigs.each(function(i, el) {
			var $el = $(el);
			var date = $el.attr('data-date');
			var gigtime = new Date(date);
			console.log(gigtime);
			if(now > gigtime) {
				$el.addClass('passed');
			}
		});
	})

	.controller('ContactController', function($scope){

		$scope.contactUser = {};


		$scope.submitForm = function (){
			if ($scope.contactForm.$valid){
				$scope.contactUser.name = $scope.user.name;
				$scope.contactUser.email = $scope.user.email;
				$scope.contactUser.tel = $scope.user.tel;
				$scope.contactUser.message = $scope.user.message;

				//alert('form has been submitted');

				$scope.submitted = true;

				//clear form fields for next use
				$scope.user.name = '';
				$scope.user.email= '';
				$scope.user.tel= '';
				$scope.user.message= '';


			}
		

		console.log($scope.contactUser.name + " " + $scope.contactUser.email + " " + $scope.contactUser.mobile + " " + $scope.contactUser.message);
			
		};


		});

	
		
	


