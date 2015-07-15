
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //Average fuel econonomy

 var mpg = 30;
 var gasLeft = prompt("How much gas would you estimate is left in the tank?");
 var tankCapacity = 100;
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
