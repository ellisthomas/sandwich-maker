var SandwichMaker = (function(maker) {
var meatPrices = {
		"turkey": 1,
		"ham": 3,
		"bacon": 9,
		"no meat": 0
		};
	
  maker.addMeat = function(meatSelection) {
    return meatPrices[meatSelection];
  }

  return maker;
})(SandwichMaker || {});

// This SandwichMaker IIFE augments the original one

// Private variable to store the different meat prices

// Augment the original object with another method

// Return the new, augmented object with the new method on it
