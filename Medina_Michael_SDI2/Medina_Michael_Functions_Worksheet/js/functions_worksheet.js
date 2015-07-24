
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");


                                    //Circumference of a circle!
 //Prompt user
 var rad = prompt ("What's the radius of the circle?");

 //Function to find it
 function circleCircumf(rad){

     var dia= 2*rad;
     var cir= dia * Math.PI;


     //Console log it out
     //console.log("The circumference is: "+cir);
     return cir;

 }

 var hold= circleCircumf(rad);

 console.log("The cirfumference of your circle is: "+hold+".");


 