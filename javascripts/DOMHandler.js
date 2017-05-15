// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var veggiesChooser = document.getElementById("veggies-chooser");
var condimentsChooser = document.getElementById("condiments-chooser");
var breadChooser = document.getElementById("bread-chooser");
var sandwichPrice = document.getElementById("btn");
var refresh = document.getElementById("refresh");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

			//////// MEAT //////////
meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addMeat(selectedTopping);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(toppingPrice);    
  } else {
    SandwichMaker.removeTopping(toppingPrice);
  }
  console.log(selectedTopping, "price is",toppingPrice);
});
    // Get the value chosen from the DOM

    // Determine the price of the topping chosen
      // Add the topping to the SandwichMaker to increase the total price
  

			//////// BREAD //////////

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addBread(selectedTopping);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(toppingPrice);
  } else {
    SandwichMaker.removeTopping(toppingPrice);
  }
  console.log(selectedTopping, "price is",toppingPrice);
});
// Get the value chosen from the DOM
// Determine the price of the topping chosen
// Add the topping to the SandwichMaker to increase the total price

			//////// CHESSE //////////
cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addCheese(selectedTopping);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(toppingPrice);
  } else {
    SandwichMaker.removeTopping(toppingPrice);
  }
  console.log(selectedTopping, "price is",toppingPrice);
});
  // Get the value chosen from the DOM
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price

			//////// VEGGIES //////////

veggiesChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addVeggies(selectedTopping);
  if (event.target.checked === true) {
    SandwichMaker.addTopping(toppingPrice); 
  } else {
    SandwichMaker.removeTopping(toppingPrice);
  }
  console.log(selectedTopping, "price is",toppingPrice);
});
  // Get the value chosen from the DOM
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price

			//////// CONDIMENTS //////////

condimentsChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addCondiments(selectedTopping);
  if (event.target.checked === true) {
  SandwichMaker.addTopping(toppingPrice);
  } else {
    SandwichMaker.removeTopping(toppingPrice);
  }
  console.log(selectedTopping, "price is",toppingPrice);
});
  // Get the value chosen from the DOM
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price

sandwichPrice.addEventListener("click", function(){
	var finalSandwichPrice = SandwichMaker.getTotalPrice();
	document.getElementById("orderPrice").innerHTML = "Sandwich total: $" + finalSandwichPrice;
	// console.log ("sandwich total price is : ", SandwichMaker.getTotalPrice());
});










