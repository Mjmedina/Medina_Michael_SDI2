
 /*
Michael Medina
Date
Section 00
Assignment
 */

alert("Let's find the acceleration of an object!");

 
                                //Acceleration on an object

 var array = [];

//Prompt user for the velocity.
 array.push(prompt("Enter the initial velocity on the object:"));
 array.push(prompt("Enter the final velocity on the object:"));

 //Prompt the user for amount of time passed.
 var time = (prompt("Enter how much time has passed:"));

 console.log(array);


 var velocityArray = Number(array[0]) +- Number(array[1]);

 //console.log(accelerationArray);

 velocityArray /= time;
 console.log("The acceleration on the object is "+ velocityArray + " m/s.");


 
