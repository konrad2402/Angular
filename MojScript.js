var APP = angular.module('APP', []);

APP.ApplicationCtrl = function ($scope) {
 $scope.cities = [
        '"I":56,"B":4.1419,"S":4.1364,"P":0.11',
        '"I":55,"B":3.0442,"S":3.0392,"P":0.34',
        '"I":2,"B":1.3609,"S":1.3607,"P":-0.18',
        '"I":100,"B":1.2216,"S":1.2212,"P":0.04',
        '"I":27,"B":139.05,"S":139.02,"P":0.2',
        '"I":5,"B":0.8125,"S":0.8120,"P":-0.17',
        '"I":177,"B":1.4704,"S":1.4700,"P":0.45',
        '"I":305,"B":8.1674,"S":8.1611,"P":0.29'
    ];
	var x = 0;
    var tablica = new Array(10);
	var BuyBegin, BuyEnd, SellBegin, SellEnd, Procent;
	
	for(x;x<$scope.cities.length;x++){
		tablica[x] = new Array();
	}
	x=0;
	for(x;x<$scope.cities.length;x++){
		tablica[x] = $scope.cities[x];
		BuyBegin=tablica[x].indexOf(':',5);
		BuyBegin+=1;
		BuyEnd=tablica[x].indexOf(',',13);
		
		SellBegin=tablica[x].indexOf(':',17);
		SellBegin+=1;
		SellEnd=tablica[x].indexOf(',',22);
		
		Procent = tablica[x].indexOf(':',28);
		Procent+=1;
		console.log(tablica[x].substring(BuyBegin, BuyEnd) + "  " + tablica[x].substring(SellBegin,SellEnd) + "   " + tablica[x].substring(Procent,tablica[x].length) + "   " + $scope.cities[x].length);
	}
	//var y = new Array();
	//y = tablica[0];
	//y.indeksOf ('"B":', 0);
	//console.log(y.substring(BuyBegin, BuyEnd));
	//string  = "ABCDEFGHIJK	LŁMNOPRSTUWZY";
//string.indexOf("K", 3);   // zwróci 10
	//string  = "ABCDEFGHIJKLŁMNOPRSTUWZY";
//window.alert(string.substring(5, 15));
	//$tablica =  $scope.cities;
	//console.log($scope.cities.length);
/*	for(x;x<$tablica.length;x++){
		console.log($tablica[x]);
	}*/
	/*for(x;x<$scope.cities.length;x++){
		console.log($tablica[x].length);
		var y=0;
		$scope.cities[0].splice(0, 2);
		
	}*/
};

// http://mrzepinski.pl/angularjs-5-ng-repeat.html  <- filtry