var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', [ '$scope', '$http', '$window',
                                          function($scope, $http, $window) {

	/* download item list from server */
	$scope.init = function() {
		 $scope.getSuggestedCandidates();
     $scope.getPermRoles();
	}

	$scope.init();
	/* download item list from server */

  $scope.getSuggestedCandidates = function() {
    $http({
			method : 'GET',
			url : 'http://interviewtestjson.azurewebsites.net/api/SuggestedCandidates'
		}).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
			console.log(response);
		});
  }

  $scope.getPermRoles = function() {
    $http({
      method : 'GET',
      url : 'http://interviewtestjson.azurewebsites.net/api/PermRoles'
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });
  }

} ]);
