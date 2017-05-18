var angularApp = angular.module('angularApp', []);

angularApp.filter('rawHtml', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
}]);

angularApp.controller('mainController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {

        $scope.suggestedCandidates = [];
        $scope.floatedCandidates = [];
        $scope.notSuitableCandidates = [];
        $scope.grades = [];
        $scope.gradesText = '';
        $scope.associatedJobPos$ts = [];
        $scope.successfulCandidate = [];
        $scope.errors = [];
        $scope.details = [];
        $scope.comments = [];
        $scope.currentDate = new Date();
        $scope.datediffarray = [];

        $scope.getSuggestedCandidates = function() {
            $http({
                method: 'GET',
                url: 'http://interviewtestjson.azurewebsites.net/api/SuggestedCandidates'
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
                method: 'GET',
                url: 'http://interviewtestjson.azurewebsites.net/api/PermRoles'
            }).then(function successCallback(response) {
                $scope.floatedCandidates = response.data.ReturnObject.FloatedCandidates;
                $scope.notSuitableCandidates = response.data.ReturnObject.NotSuitableCandidates;
                $scope.grades = response.data.ReturnObject.Grades;

                var gradesTextCommaControl = true;
                for (i = 0; i < $scope.grades.length; i++) {
                    if (gradesTextCommaControl) {
                        $scope.gradesText += $scope.grades[i].Title;
                        gradesTextCommaControl = false;
                    } else {
                        $scope.gradesText += ', ' + $scope.grades[i].Title;
                    }
                }

                $scope.associatedJobPosts = response.data.ReturnObject.AssociatedJobPosts;
                $scope.successfulCandidate = response.data.ReturnObject.SuccessfulCandidate;
                $scope.details = response.data.ReturnObject;
                console.log('getPermRoles call is completed');
                console.log('floatedCandidates');
                console.log($scope.floatedCandidates);
                console.log('notSuitableCandidates');
                console.log($scope.notSuitableCandidates);
                console.log('grades');
                console.log($scope.grades);
                console.log('gradesText');
                console.log($scope.gradesText);
                console.log('associatedJobPosts');
                console.log($scope.associatedJobPosts);
                console.log('successfulCandidate');
                console.log($scope.successfulCandidate);
                console.log('details');
                console.log($scope.details);
            }, function errorCallback(response) {
                console.log(response);
            });
        }

        $scope.getComments = function() {
            $http({
                method: 'GET',
                url: 'http://interviewtestjson.azurewebsites.net/api/Comments'
            }).then(function successCallback(response) {
                $scope.comments = response.data.Comments;

                for (i = 0; i < $scope.comments.length; i++) {
                    var actionDate = $scope.comments[i].DateCreated.substring(6, 19);
                    var calDateDiff = new Date() - actionDate;
                    var dateDiff = {
                        "dateDiffValue": calDateDiff
                    };
                    $scope.datediffarray.push(dateDiff);
                }

                $scope.comments = angular.merge({}, $scope.comments, $scope.datediffarray);

                console.log($scope.datediffarray);
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

        /* Utility functions here, should be separated into a different controller but meh */
        $scope.collapseSuitableCandidateEvent = function() {
            if ($scope.collapseSuitableCandidate) {
                $scope.collapseSuitableCandidate = false;
            } else {
                $scope.collapseSuitableCandidate = true;
            }
        }

        $scope.collapseNotSuitableCandidateEvent = function() {
            if ($scope.collapseNotSuitableCandidate) {
                $scope.collapseNotSuitableCandidate = false;
            } else {
                $scope.collapseNotSuitableCandidate = true;
            }
        }

        $scope.collapseFloatedCandidateEvent = function() {
            if ($scope.collapseFloatedCandidate) {
                $scope.collapseFloatedCandidate = false;
            } else {
                $scope.collapseFloatedCandidate = true;
            }
        }

    }
]);
