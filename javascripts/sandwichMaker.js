var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();


// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var meatPrices;

//   // Augment the original object with another method
//   maker.addMeat = function() {
//     return ???;
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);

// // Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// // Variable to hold topping that the user selects
// var selectedTopping;

// // Get a reference to the <select> element that has all the meat options
// var meatChooser = document.getElementById("meat-chooser");

// /* 
//   A <select> element broadcasts a change event, so you listen for it
//   and get the value of the topping from your augmented IIFE
// */
// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;

//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });