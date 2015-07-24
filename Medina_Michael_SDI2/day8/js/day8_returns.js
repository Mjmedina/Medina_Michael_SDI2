
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 function calcArea(w,h)
 {

     //Calculate the area
     var area = w*h;

     //Console.log the results
     console.log("the area is "+area);

     //In oder to use results in main code
     //Return "whatever you want to return";
     return area;

 }

 //Call the function
 var results = calcArea(10,30);

 //Access the area in the main code
 console.log(results);

 //Calc 40x60
 var results2 = calcArea(40,60);

 console.log(results2);

 //What is total of both rectangles
 var total = results + results2;
 console.log("The combined area of both is "+total+".");
