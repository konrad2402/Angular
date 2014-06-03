var APP = angular.module('APP', []);
APP.ApplicationCtrl = function ($scope) {
	$.getJSON( "waluty.json", function(data) {
		$scope.$apply(function(){
            $scope.cities = data['Feeds'];
			//console.log( data.length );
		//console.log(data.Feeds[1])
        }); 
	})
	$scope.Valuty = [
		'EUR/PLN',
		'USD/PLN',
		'EUR/USD',
		'EUR/CHF',
		'EUR/JPY',
		'EUR/GBP',
		'EUR/AUD',
		'EUR/NOK'
	];
};
function Ctrl($scope) {
	$scope.Valuty = [
		'EUR/PLN',
		'USD/PLN',
		'EUR/USD',
		'EUR/CHF',
		'EUR/JPY',
		'EUR/GBP',
		'EUR/AUD',
		'EUR/NOK'
	];
	
	$.getJSON( "waluty.json", function(data) {
		$scope.$apply(function(){
            $scope.cities = data['Feeds'];
			//console.log( data.length );
		//console.log(data.Feeds[1])
        }); 
	})
};

// http://mrzepinski.pl/angularjs-5-ng-repeat.html    <- filtry
// https://docs.angularjs.org/api/ng/filter/orderBy   <- sortowanie