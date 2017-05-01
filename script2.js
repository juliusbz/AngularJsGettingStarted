(function(){
    
    var app = angular.module("githubViewer",[]);
    
    var MainController = function($scope, $http, $interval){

        var onUserComplete = function(response){
            $scope.user = response.data;
            $http.get("http://url.here").then(onUserComplete, onError);
        };

        var onRepos = function(response){
            $scope.repos = response.data;
        }

        var onError = function(reason){
            $scope.error = "Could not Fetch the data";
        };

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        }

        var startCountdown = function(){
            $interval(decrementCountdown,1000,$scope.countdown);
        };

        $scope.search = function(username){
            $http.get("https://api.github.com/users/" + username)
                    .then(onUserComplete, onError);
        }

        $scope.username = "angular";
        $scope.message = "Hello, Angular!";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();
    }

    app.controller("MainController", ["$scope","$http",MainController]);

}());

