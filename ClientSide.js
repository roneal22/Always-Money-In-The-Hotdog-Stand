alert("hello!");
discount = 0;
tax = 6.25;
taxString = "";


document.write("<b>Welcome to Joe's!</b><br><br>");

numDogs = prompt("how many hotdogs?", 0);
subtotal = (numDogs * 3.75);
numFries = prompt("how many fries?", 0);
subtotal += numFries * 2.00;
numDrinks = prompt("how many drinks?", 0);
subtotal += numDrinks * 1.5;

document.writeln("Hotdogs: " + numDogs + "<br>");
document.writeln("Fries: " + numFries + "<br>");
document.writeln("Drinks: " + numDrinks + "<br>");
document.writeln("\nSubtotal: $" + subtotal + "<br>");

if(subtotal >= 20){
	discount = (subtotal * .1);
	discount = discount.toFixed(2);
	document.write("<i>discount: -$" + discount + "<br></i>");
	subtotal -= discount;
}

tax = (subtotal * .0625);
taxString = tax.toFixed(2);
document.writeln("Meals Tax: $" + taxString + "<br>");
grandTotal = subtotal + tax;
grandTotal = grandTotal.toFixed(2);
document.writeln("Grand Total: $" + grandTotal + "<br>");
