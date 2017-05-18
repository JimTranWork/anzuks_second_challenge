var angularApp = angular.module('angularApp', []);

angularApp.controller('mainController', [ '$scope', '$http', '$window',
                                          function($scope, $http, $window) {

                                            $scope.suggestedCandidates = [];
                                            $scope.floatedCandidates = [];
                                            $scope.notSuitableCandidates = [];
                                            $scope.grades = [];
                                            $scope.associatedJobPosts = [];
                                            $scope.successfulCandidate = [];
                                            $scope.errors = [];
                                            $scope.comments = [];

                                            $scope.getSuggestedCandidates = function() {
                                              $http({
                                          			method : 'GET',
                                          			url : 'http://interviewtestjson.azurewebsites.net/api/SuggestedCandidates'
                                          		}).then(function successCallback(response) {
                                                $scope.suggestedCandidates = response.data;
                                                console.log('getSuggestedCandidates call is completed');
                                                console.log($scope.suggestedCandidates);
                                              }, function errorCallback(response) {
                                          			console.log(response);
                                          		});
                                            }

                                            $scope.getPermRoles = function() {
                                              $http({
                                                method : 'GET',
                                                url : 'http://interviewtestjson.azurewebsites.net/api/PermRoles'
                                              }).then(function successCallback(response) {
                                                $scope.floatedCandidates = response.data.ReturnObject.FloatedCandidates;
                                                $scope.notSuitableCandidates = response.data.ReturnObject.NotSuitableCandidates;
                                                $scope.grades = response.data.ReturnObject.Grades;
                                                $scope.associatedJobPosts = response.data.ReturnObject.AssociatedJobPosts;
                                                $scope.successfulCandidate = response.data.ReturnObject.SuccessfulCandidate;
                                                console.log('getPermRoles call is completed');
                                                console.log($scope.floatedCandidates);
                                                console.log($scope.notSuitableCandidates);
                                                console.log($scope.grades);
                                                console.log($scope.associatedJobPosts);
                                                console.log($scope.successfulCandidate);
                                              }, function errorCallback(response) {
                                                console.log(response);
                                              });
                                            }

                                            $scope.getComments = function() {
                                              $http({
                                                method : 'GET',
                                                url : 'http://interviewtestjson.azurewebsites.net/api/Comments'
                                              }).then(function successCallback(response) {
                                                $scope.comments = response.data.Comments;
                                                console.log('getComments call is completed');
                                                console.log($scope.comments);
                                              }, function errorCallback(response) {
                                                console.log(response);
                                              });
                                            }

	/* pulling resources from api endpoints */
	$scope.init = function() {
		 $scope.getSuggestedCandidates();
     $scope.getPermRoles();
     $scope.getComments();
	}

	$scope.init();
	/* pulling resources from api endpoints */

} ]);
