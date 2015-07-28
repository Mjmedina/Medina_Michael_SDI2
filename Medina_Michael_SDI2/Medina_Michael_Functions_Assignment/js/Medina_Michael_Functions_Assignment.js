
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

 