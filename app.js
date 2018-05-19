//module is a function on the angular object and myApp is the peace which connects the model and view togeather.   
var myApp = angular.module("myApp",[]);
//everything we add now will be added to this variable

//first we are going to declare a controller 



myApp.controller('mainController',function($scope){//$scope is an object and $ is a part of varible name. All angular js services start with a $ sign. 
    //adding properties to the $scope 
    $scope.name = "santosh";
    $scope.occupation= "developer";
    console.log($scope);
    // now you can use this values inside the index.html where this is used as a controller. 
    //$scope is the one which establises the pipe between the model and view
    //when you console it out you can see an object in the browser console, this is because it is an angular js object that it injects it into the function.
    //basically this is model(data) that the view(html) needs and the angular js binds them togeather  
});//place to put the code associated with this controller
