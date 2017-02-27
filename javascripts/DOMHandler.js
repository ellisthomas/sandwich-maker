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
	  // Get the value chosen from the DOM
	  selectedTopping = event.target.value;

	  // Determine the price of the topping chosen
		var toppingPrice = SandwichMaker.addMeat(selectedTopping);
		  // Add the topping to the SandwichMaker to increase the total price
		SandwichMaker.addTopping(toppingPrice);
		console.log(selectedTopping, "price is",toppingPrice);
});

			//////// BREAD //////////

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// CHESSE //////////

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addCheese(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// VEGGIES //////////

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// CONDIMENTS //////////

condimentsChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});


sandwichPrice.addEventListener("click", function(){
	var finalSandwichPrice = SandwichMaker.getTotalPrice();
	document.getElementById("orderPrice").innerHTML = "Sandwich total: $" + finalSandwichPrice;
	console.log ("sandwich total price is : ", SandwichMaker.getTotalPrice());
});










