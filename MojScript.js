var APP = angular.module('APP', []);

APP.ApplicationCtrl = function ($scope) {
    
    $scope.name = '...';
    
    $scope.sayHelloWorld = function () {
        $scope.name = 'World';
    };
    
    $scope.sayHelloAngular = function () {
        $scope.name = 'Angular';
    };
    
    $scope.sayHelloSantaClaus = function () {
        $scope.name = 'Santa Claus';
    };
    
};