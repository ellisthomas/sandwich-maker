var SandwichMaker = (function(maker) {
var veggiesPrices = {
		"lettuce": 2,
		"tomato": 4,
		"onion": 9,
		"none": 0
		};
	
  maker.addVeggies = function(veggieSelection) {
    return veggiesPrices[veggieSelection];
  }

  return maker;
})(SandwichMaker || {});