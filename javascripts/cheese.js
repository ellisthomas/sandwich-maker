var SandwichMaker = (function(maker) {
var cheesePrices = {
	"cheddar": 6.50,
	"provolone": 4.50,
	"swiss": 3.33,
	"none": 0
};
	
maker.addCheese = function(chesseSelection) {
  return cheesePrices[chesseSelection];
}

  return maker;
})(SandwichMaker || {});