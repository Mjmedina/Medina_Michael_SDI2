
 /*
Michael Medina
7/27/2015
Section 00
Functions Assignment
 */

alert ("What's up Han Solo!!! We're gna make the Kessel Run today. Think you are up to it? Let's see!");

 //Prompt the user for total miles to be traveled.
 var travelMiles = prompt("Alright Chewy, how far are we traveling?");
 //While loop to verify user input.
 while(travelMiles===""|| isNaN(travelMiles)){
     travelMiles= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 }
 var mT = prompt("Now tell me, how many miles do you have to travel?");
 while(mT===""|| isNaN(mT)){
     mT= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 }
 //~~~~~~~~~~~~~
 //FUNction time. the 'FUN" is right in the word...
 function tTime(m,mG){
     return mG/m;
 }
 //Promp the user for size of tank..... in the Falcoln
 var galRem = prompt("Do you need some fancy space fuel to get there?\nHow many gallons are left in your tank?");
 while(galRem===""|| isNaN(galRem)){
     galRem= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 }
//Prompt the user for the miles per gallon in the vehicle.... Falcoln.
 var milesPg = prompt("What is the Millenium Falcoln's mp/g");
 while(milesPg===""|| isNaN(milesPg))
     milesPg= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 //Calculate the fuel needs of the vehicle.... Falcoln
 var gas = function(gl,mpg,mg){
     var gasLeft = gl*mpg;
     if(gasLeft>mg){
         console.log("You're fine you don't need fancy space fuel!!");
     }else{
         console.log("Nahh man, we definitely need some of that fancy space fuel or else we won't make it "+mg+" miles.");
     }
     return[gasLeft,mg,mpg];
 };