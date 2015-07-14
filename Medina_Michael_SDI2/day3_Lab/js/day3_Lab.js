
 /*
Michael Medina
7/14/2015
Section 00
Lab 3
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


 //Test 1: 20. 10. 5. Answer = 2m/s
 //Test 2: 45. 12. 4. Answer = 8.5m/s
 //Test 3. 67. 34. 5. Answer = 6.6m/s

