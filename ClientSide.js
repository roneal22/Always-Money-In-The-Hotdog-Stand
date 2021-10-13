//ClientSide.js
Display all order information on the page including:
Items ordered, quantities, subtotal, discount if 
applicable, tax and total.  All currency values must 
be rounded to 2 decimal places.

int discount = 0;
int tax = 6.25;
taxString;
int numDogs, numFries, numDrinks;
int subtotal, tax, grandTotal;

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