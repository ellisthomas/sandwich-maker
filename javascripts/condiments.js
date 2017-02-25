var SandwichMaker = (function(maker) {
var condimentsPrices = {
		"mustard": .15,
		"mayo": .30,
		"barbeque": .50,
		"none": 0,
		};
	
  maker.addCondiment = function(condimentSelection) {
    return condimentsPrices[condimentSelection];
  }

  return maker;
})(SandwichMaker || {});