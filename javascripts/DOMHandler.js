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
var sandwichPrice = document.getElementById("orderDetails");
var refresh = document.getElementById("refresh");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

			//////// MEAT //////////

meatChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addMeat(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// BREAD //////////

breadChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// CHESSE //////////

condimentsChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// VEGGIES //////////

veggiesChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addVeggies(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});

			//////// CONDIMENTS //////////

condimentsChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
var toppingPrice = SandwichMaker.addCondiments(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
SandwichMaker.addTopping(toppingPrice);
console.log(selectedTopping, "price is",toppingPrice);
});


sandwichPrice.addEventListener("click", function(){
	var totalPrice = (" the total of the sandwich is : " +  SandwichMaker.getTopping());
	document.getElementById("orderPrice").innerHTML = totalPrice;
	console.log ("sandwich total price is : ", SandwichMaker.getTopping());
});

// function for the refresh button
	// refresh.addEventListener("click",function(){
	// console.log("refresh button is pressed")
 //    document.getElementById("breadForm").reset();
 //    document.getElementById("meatForm").reset();
 //    document.getElementById("cheeseForm").reset();
 //    document.getElementById("condimentsForm").reset();
 //    document.getElementById("veggiesForm").reset();
 //    toppingPrice = 0;
 //    totalPrice= 0;

