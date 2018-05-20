//module is a function on the angular object and myApp is the peace which connects the model and view togeather.   
var myApp = angular.module("myApp",['ngMessages']);//ngMessages[name of the module] is a modules that MyApp is dependent on. Once module is available, everything in the module is also available to us
//everything we add now will be added to this variable

//first we are going to declare a controller 



myApp.controller('mainController',function($scope){//$scope is an object and $ is a part of varible name. All angular js services start with a $ sign. 
    
    $scope.name = "santosh";
    //timeout is a angularjs service equivalent to settimeout in javascript
    $timeout(function(){
        $scope.name = "Krishna"
    },3000)
    
    
    
    

});//place to put the code associated with this controller
