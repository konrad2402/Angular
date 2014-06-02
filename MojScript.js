var APP = angular.module('APP', []);

APP.ApplicationCtrl = function ($scope) {
 $scope.cities = new Array();
	var tab1 = [
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

	x=0;
	for(x;x<tab1.length;x++){
		tablica = tab1[x];
		BuyBegin=tablica.indexOf(':',5);
		BuyBegin+=1;
		BuyEnd=tablica.indexOf(',',13);
		
		SellBegin=tablica.indexOf(':',17);
		SellBegin+=1;
		SellEnd=tablica.indexOf(',',22);
		
		Procent = tablica.indexOf(':',28);
		Procent+=1;
		tablica = (tablica.substring(BuyBegin, BuyEnd) + "  " + tablica.substring(SellBegin,SellEnd) + "   " + tablica.substring(Procent,tablica.length));
		console.log(tablica);
	} $scope.cities = tablica;
/*	
	x=0;
	for(x;x<tab1.length;x++){
		tablica = $scope.cities[x];
		BuyBegin=tablica.indexOf(':',5);
		BuyBegin+=1;
		BuyEnd=tablica.indexOf(',',13);
		
		SellBegin=tablica.indexOf(':',17);
		SellBegin+=1;
		SellEnd=tablica.indexOf(',',22);
		
		Procent = tablica.indexOf(':',28);
		Procent+=1;
		console.log(tablica.substring(BuyBegin, BuyEnd) + "  " + tablica.substring(SellBegin,SellEnd) + "   " + tablica.substring(Procent,tablica.length) + "   " + $scope.cities.length);
	} 
*/	
};

// http://mrzepinski.pl/angularjs-5-ng-repeat.html  <- filtry