//module is a function on the angular object and myApp is the peace which connects the model and view togeather.   
var myApp = angular.module("myApp",['ngRoute']);//ngMessages[name of the module] is a modules that MyApp is dependent on. Once module is available, everything in the module is also available to us
//everything we add now will be added to this variable

//first we are going to declare a controller 

myApp.config(function ($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'/pages/main.html',
        controller: 'mainController'
    })
    .when('/second',{
        templateUrl:'/pages/second.html',
        controller: 'secondController'
    })
})

myApp.controller('mainController',["$scope",function($scope){
    
    $scope.name = "Main";
}]);

myApp.controller('secondController',["$scope",function($scope){
    
    $scope.name = "Second";
}]);