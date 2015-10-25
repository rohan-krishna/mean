
function MainController() {]
	this.removeFromStock = function (item, index) {
		this.items.splice(index,1);
	}
	this.items = [{
		name: 'Harry Potter and Soccerer\'s Stone',
		id : 727522
	},{
		name: 'Harry Potter and the Chamber of Secrets',
		id: 55696
	},{
		name: 'Harry Potter and the Prisoner of Azkaban',
		id: 556998
	},{
		name: 'Harry Potter and the Goblet of Fire',
		id: 7558669
	}];
}

var app = angular
	.module('app', [])
	.controller('MainController',MainController);