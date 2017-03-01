var SandwichMaker = (function(maker) {
var condimentsPrices = {
	"mustard": .15,
	"mayo": .30,
	"barbecue": .50,
	"none": 0
};

maker.addCondiments = function(condimentSelection) {
  return condimentsPrices[condimentSelection];
}

return maker;
})(SandwichMaker || {});