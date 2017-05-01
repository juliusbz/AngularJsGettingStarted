(function(){
    
    
    console.log("Hello");


    var MainController = function($scope, $http){

        var onUserComplete = function(response){
            $scope.user = response.data;
        }

        var onError = function(reason){
            $scope.error = "Could not Fetch";
        }
        var promise = $http.get("http://url.here").then(onUserComplete, onError);

        $scope.message = "Hello, Angular!";
    }


    var app = angular.module("githubViewer",[]);

    app.controller("MainController", ["$scope","$http",MainController]);

}());

