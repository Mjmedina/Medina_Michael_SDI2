
 /*
Michael Medina
7/9/2015
Section 00
Assignment
 */

//alert("Just testing!");

 var slicesPizza = 10;
 var partyPeople = 10;
 var pizzaOrdered = 3;

 var totalSlices = slicesPizza * pizzaOrdered;
 var slicesPerPerson = totalSlices / partyPeople;

 console.log("Each person ate", slicesPerPerson, "slices at the party");

 // Calculate how much pizza Sparky will eat.

 var sparkyPizza = totalSlices % partyPeople;
 console.log("Sparky ate", sparkyPizza, "slices of pizza at the party");



 // Total and average amount of groceries over a 5 week period.

 var week1 = 80;
 var week2 = 90;
 var week3 = 100;
 var week4 = 90;
 var week5 = 80;

 var totalGroceries = week1 + week2 + week3 + week4 + week5;
 var totalWeeks = 5;
 var average = (week1 + week2 + week3 + week4 + week5) /totalWeeks;
 console.log("You have spent a total of $", totalGroceries,"on groceries over 5 weeks. That is an average of $", average,"per week");

 // Discounts on an item with or without tax.

 var originalPrice = 100;
 var discount = 20;
 var appliedDiscount = discount / 100;
 var item = "Ironman Helmet";
 var salesTax = 6;
 var appliedSalesTax = salesTax /100;

 var withTax = (originalPrice * appliedDiscount) * appliedSalesTax;
 var withoutTax = originalPrice * appliedSalesTax;

 console.log("Your", item, "was originally $", originalPrice, ",but after a", appliedDiscount, "% discount, " +
 "it is now $", (originalPrice+ withoutTax), "with tax, and $", (originalPrice - withoutTax), "without tax.");
