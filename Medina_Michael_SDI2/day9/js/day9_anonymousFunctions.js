
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


 //Basic anonymous function
 // ar functionName = function(){};

 //Extremely popular is JS & JQuery
 //Important in Object Oriented Programming
 //For now, it is matter style choice between anon and regular functions

 //Create an anon function to calculate the area of a triangle
 var triArea = function(b,h){
     var area = .5*b*h;
     return area;
 };

//Function call for anon function
 //MUST BE AFTER THE DEFINITION
 var results = triArea(10,20);

 console.log(results);
