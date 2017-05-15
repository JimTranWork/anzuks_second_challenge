var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', [ '$scope', '$http', '$window',
                                          function($scope, $http, $window) {

	/* download item list from server */
	$scope.init = function() {
		$http({
			method : 'GET',
			url : 'url'
		}).then(function successCallback(response) {

		}, function errorCallback(response) {
			console.log(response);
		});
	}

	$scope.init();
	/* download item list from server */

} ]);