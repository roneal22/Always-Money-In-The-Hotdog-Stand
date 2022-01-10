alert("hello");
discount = 0;
tax = 6.25;
taxString = "";
// numDogs, numFries, numDrinks;
// subtotal, tax, grandTotal;

document.write("Welcome to Joe's!" + "<br><br>");

numDogs = prompt("how many hotdogs?", 0);
subtotal = (numDogs * 3.75);
alert("numDogs" + numDogs);
alert("subtotal" + numDogs);
numFries = prompt("how many fries?", 0);
subtotal += numFries * 2.00;
alert("here " + subtotal);
numDrinks = prompt("how many drinks?", 0);
subtotal += numDrinks * 1.5;

document.writeln("Hotdogs: " + numDogs + "<br>");
document.writeln("Fries: " + numFries + "<br>");
document.writeln("Drinks: " + numDrinks + "<br>");
document.writeln("\nSubtotal: $" + subtotal + "<br>");

alert("here" + subtotal);
if(subtotal >= 20){
	discount = (subtotal * .1);
	discount = discount.toFixed(2);
	document.write("discount: -$" + discount + "<br>");
	subtotal -= discount;
}

tax = (subtotal * .0625);
taxString = tax.toFixed(2);
document.writeln("Meals Tax: $" + taxString + "<br>");
grandTotal = subtotal + tax;
grandTotal = grandTotal.toFixed(2);
document.writeln("Grand Total: $" + grandTotal + "<br>");
