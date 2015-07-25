
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


//Create a function that will take ina  user prompted max/min value and return a random number between them.

 //Create a variable for the min value
 var min = prompt("We are going to find a random number in between 2 values.\nWhat is the min value?");
 //Validate that prompt
 while(isNaN(min)|| min===""){
     if(isNaN(min)){
         min=prompt("Please only type in numbers.\nWhat is the min value?");
     }else{
         min=prompt("Please do not leave blank.\nWhat is the min value?");
     }

 } 