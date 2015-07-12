
 /*
Michael Medina
7/11/2015
Section 00
Prompts
 */

//alert("Just testing!");

 //Ask the user for their input
 var userInput = prompt("Enter your year of birth");
 console.log(userInput);

var age = 2015-userInput;
 console.log("You are "+age+" years old.");


 //Area of a rectangle
 //Prompt the user for width
 var width = prompt("Let's calculate the area of a rectangle.\nPlease enter the width of the rectangle:");
 var height = prompt("Please enter the height of the rectangle:");


 //Calculate the area of the rectangle
 var area = width*height;

 //Tell user the answer
 console.log("The area of the rectangle with a height of "+height+ " and a width of "+width+" is "+area+".");

 var results = "The results of the area are "+area;

 console.log(results);