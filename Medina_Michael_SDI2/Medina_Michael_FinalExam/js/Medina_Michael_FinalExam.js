
 /*
Michael Medina
7/30/2015
Section 00
Final Exam
 */

//alert("Just testing!");

                                                        //FINAL
 //Prompt for price of an item.
 var price=prompt("What is the price of your item?");
 //Validate.
 while(price===""||isNaN(price)){
     price=prompt("Please enter a number!!!");
 }
 //Prompt for discount.
 var disc=prompt("What is the percent discounted on the item?");
 //Validate.
 while(disc===""||isNaN(disc)||disc<0||disc>100){
     disc=prompt("Please enter a number!!!");
 }
 //Create function.
 function finalP(pri,dis){
     var applyDis=pri*(dis/100);
     var aftDis=pri-applyDis;
     return aftDis;
 }
//Function call.
 var total=finalP(price,disc);
 //Display to user.
 console.log("The final cost of an item that costs $"+price+" with a discount of "+disc+"% is $"+total+".");

 /*
 Test1: Enter $100 and 20%. Return value of $80.
 Test2: Enter $4500 and 30%. Return value of $3150.
 */
