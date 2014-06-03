var APP = angular.module('APP', []);

function Ctrl($scope) {
 //$scope.cities = new Array();
	
	var x = 0;	
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