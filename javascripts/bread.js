var SandwichMaker = (function(maker) {
var breadPrices = {
		"white": 2,
		"wheat": 3,
		"chibatta": 4,
		"flatbread": 7,
		};
	
  maker.addBread = function(breadSelection) {
    return breadPrices[breadSelection];
  }

  return maker;
})(SandwichMaker || {});