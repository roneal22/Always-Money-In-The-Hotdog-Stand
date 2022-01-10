alert("hello");
discount = 0;
tax = 6.25;
taxString = "";
var numDogs, numFries, numDrinks;
var subtotal, tax, grandTotal;

document.write("Welcome to Joe's!");

numDogs = prompt("how many hotdogs?", 0);
subtotal += numDogs * 3.75;
numFries = prompt("how many fries?", 0);
subtotal += numFries * 2.00;
numDrinks = prompt("how many drinks?", 0);
subtotal += numDrinks * 1.5;

document.writeln("Hotdogs: " + numDogs);
document.writeln("Fries: " + numFries);
document.writeln("Drinks: " + numDrinks);
document.writeln("\nSubtotal: $" + subtotal);

if(subtotal >= 20){
	discount = subtotal * .1;
	discount = discount.toFixed(2);
	document.write("discount: -$" + discount);
	subtotal -= discount;
}

tax = subtotal * .0625;
taxString = tax.toFixed(2);
document.writeln("Meals Tax: $" + taxString);
grandTotal = subtotal + tax;
grandTotal = grandTotal.toFixed(2);
document.writeln("Grand Total: $" + grandTotal);
