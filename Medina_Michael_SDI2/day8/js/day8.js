
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

// //Basic comment structure
// // Function function name(){//Code to run goes here.}
//
// //Create a function that will console.log().... something.
//
//function printHello(){
//    //This code will run when the function runs.
//    console.log("This function is working!");
//
//}
//
////Create a function call that will start our printHello function
// //'Go Button' to the factory
// printHello();
//
// printHello();
//

 var width = 5;

 console.log("Starting width is "+width);


 //Create a function taht calculated the perim of a rectangle
 function calcPeri(){


     //Create variables for width and height and perimeter.
     //Try not to reuse variable names
     //BUT this is going to be impossible for the larger files

     //This variable is scoped to the function calcPeri
     var width = 10;
     console.log("Width inside of function is "+width);
     var height = 20;
     var perimeter = width*2 + height*2;

     //Console.log the peramiter.
     console.log("The perimiter is "+perimeter);

 }

 console.log("Before "+width);

 //Function call
 calcPeri();

 console.log("After "+width);

 console.log("The value of height is "+height);