
 /*
Michael Medina
7/14/2015
Section 00
Day 4 Lab
 */

//alert("Just testing!");

 //Average fuel econonomy

 var mpg = parseInt(prompt("How many miles per gallon does your car get?"));


 var tankCapacity = parseInt(prompt("What is the capacity of your fuel tank?"));
 var gasLeft = parseInt(prompt("How much gas would you estimate is left in the tank?"));
 var totalDistance = parseInt(mpg)*parseInt(tankCapacity);
 var tankPercent = parseInt(totalDistance) - gasLeft;
 var distance = totalDistance - tankPercent;

 // Create "if" statement for when to fill up.

 if(distance >=200){
     console.log("If you have a full tank with "+mpg+"mpg and a tank capacity of"+gasLeft+"% then you do not to fill your tank")}
 else{
     console.log("You need to fill your tank!");
 }



 //Create user login system with matching name and password.
 var userName = prompt("Please enter your username");
 var password = prompt("Please enter your password");

 //Create "if" statement for name and password.
 if(userName == "Tony" && password == "Skate"){
     console.log("Access Granted");
 }
 else if(userName == "Tony" && password !="Skate"){
     console.log("Access Denied because you forgot your password");
 }else if(userName != "Tony"){
     console.log("Access Denied because you forgot your username");
 }


 //Tire Pressure in a car

 var pressureArray = [];

 //Tire pressures
 pressureArray[0] = prompt("How much PSI is in the front left tire?");
 pressureArray[1] = prompt("How much PSI is in the front right tire?");
 pressureArray[2] = prompt("How much PSI is in the back left tire?");
 pressureArray[3] = prompt("How much PSI is in the back right tire?");


 if((pressureArray[0] == pressureArray[1]) && (pressureArray[2] == pressureArray[3])) {
     console.log("The tires pass spec!");
 }else{
     console.log("Get your tires checked!");
 }

