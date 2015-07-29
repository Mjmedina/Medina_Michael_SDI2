
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
 //Promp the user for size of tank.....
 var galRem = prompt("Do you need some fancy space fuel to get there?\nHow many gallons are left in your tank?");
 while(galRem===""|| isNaN(galRem)){
     galRem= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 }
 //Prompt the user for the miles per gallon in the vehicle....
 var milesPg = prompt("What is the Millenium Falcoln's mp/g");
 while(milesPg===""|| isNaN(milesPg))
     milesPg= prompt("Gwwwwwwgrrruuuuurrrrr!!");
 //Calculate the fuel needs of the vehicle....
 var gas = function(gl,mpg,mg){
     var gasLeft = gl*mpg;
     if(gasLeft>mg){
         console.log("You're fine you don't need fancy space fuel!!");
     }else{
         console.log("Nahh man, we definitely need some of that fancy space fuel or else we won't make it "+mg+" miles.");
     }
     return[gasLeft,mg,mpg];
 };
 //Travel times
 var time = tTime(travelMiles,mT);
 if(time<1){
     console.log("Okay it's going to take us "+time+" min to get there!");
 }else{
     console.log("Okay it's going to take us "+time+" min to get there!");
 }
 //Time to bring it all together for the user.
 var ourGas=gas(galRem,milesPg,mT);
 console.log("Alright Han, we have "+ourGas[0]+" miles left in our tank. We are " +ourGas[1]+" miles away from completing this mission!!!! Our average mpg is clocking in at "+ourGas[2]+".");

 //Test1: 123. 12. 11. 14. : 0.0975609756097561 min. 154 miles left in our tank. we are 12miles away. mpg is clocking in at 14.
 //Test2: 999. 55. 44. 33. : 0.055055055055055056 min. 1452 miles left in our tank.  mpg is clocking in at 33.
 //Test3: 500. 50. 20. 10. : 0.1 min.  200 miles left in our tank. we are 50miles away mpg is clocking in at 10.

  

