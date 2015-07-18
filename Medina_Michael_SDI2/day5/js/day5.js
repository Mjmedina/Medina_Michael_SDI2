
 /*
Michael Medina
Date
Section 00
Assignment
 */

//alert("Just testing!");

 //Test a steak temperature and tell the user the doneness level

 /*
  Extra-rare  46–49 °C	115–120 °F
  Rare        52–55 °C	120.1–130 °F
  Medium rare 55–60 °C	130.1–140 °F
  Medium l.     60–65 °C	140.1–150 °F	145 °F
  Medium well 65–69 °C	150.\1–155 °F
  Well done   71 °C+	160 °F+	160 °F
  */

 //Create a variable for our steak temperature


 var steakTemp = parseInt(prompt("What is the temperature of your steak?"));

 if(steakTemp===""){
     steakTemp=prompt("Please do not leave blank!\n What is the temperature of your steak?")
 }



 //Validate user prompt
 console.log(isNaN(7));
 conseole.log(isNaN("car"));


 if(isNaN(steakTemp)){
     //Code will run is steakTemp is not a number
     //Re-prompt uing the same var for user
     steakTemp=prompt("Please only type in numbers\n What is the temperature of your steak?");
 }
 //We have to test each of the cases above to see where out temp falls into.

 if(steakTemp<= 115){
     console.log("Your steak is undercooked.");
 } else if(steakTemp < 125){
     console.log("Your steak is Extra-Rare or Blue.");
 } else if(steakTemp < 130){
     console.log("Your steak is Rare.");
 } else if(steakTemp < 140){
     console.log("Your steak is Medium Rare.");
 } else if(steakTemp < 150){
     console.log("Your steak is Medium");
 } else if(steakTemp < 155){
     console.log("Your steak is Medium Well.");
 } else if(steakTemp <= 160){
     console.log("Your steak is Well Done");
 }else{
     console.log("Your steak is Burnt.");
 }



 //Some Decisions Affect Other Decisions

 //If it is warm then let's go to the beach, if it is not the lets go to the movies.

 //Get the temperature
 var temp= prompt("We are going to figure out what you should do today!\nWhat is the current temperature outside?");

 //Validate that the user typed in SOMETHING - did they leave it blank?
 if(temp === ""){
     //This code will run if the user types in nothing
     //Re-prompt the user
     temp = prompt("Please do not leave this blank, it is required!\nWhat is the current temperature outside?");
 }

 //Validate that the user typed in a number
 // isNaN() - is it Not a Number
 //Literally say it out loud. Is "monkey" Not a Number?
 console.log(isNaN(7)); //Gives us FALSE
 console.log(isNaN("monkey")); //Gives us TRUE

 if(isNaN(temp)){
     //This code will run when temp is NOT a number
     // Re-prompt the user for information.
     //Give the user a 2nd chance!
     temp = prompt("Please only type in numbers!\nEnter the temperature outside:");
 }



 if(temp >= 80){
     console.log("Let's go to the beach!");
     //Let's set the water temperature.
     var waterTemp = prompt("What is the water temperature?");

     //Validate the water temp.
     if(waterTemp ==="" || isNaN(waterTemp)){
         //This code will run if the variable is blank or Not a Number.
         //Reprompt the user
         waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temp?");
     }



     if (waterTemp > 75){
         console.log("Let's go swimming.");

         var knowSwim = prompt("Do you know how to swim?");

         //Convert the text string to lower case
         // toLowercase - dot syntax - use a period.
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);

         //Validate the knowSwim variable
         if(knowSwim !="yes" && knowSwim !="YES" && knowSwim !="no" && knowSwim !="No"){
             //Reprompt the user
             knowSwim = prompt("Only type in yes or no.\nCan you swim?");
             knowSwim = knowSwim.toLowerCase();
         }



         if(knowSwim == "yes"){
             console.log("No floatie.");
         } else{
             console.log("Get a floatie!");
         }



     }else {
         console.log("Let's get a tan.");
     }

 } else{
     console.log("Let's go to the movies!");



     //Do we have any kids in the group?
     var kids = prompt("Are you bringing kids.");
     //Validate
     //Convert to lowercase

     kida = kids.toLowerCase();

     if(kids != "yes" && kids != "no"){
         //Reprompt
         kids = prompt("Please enter ONLY yes or no!\nAre you bringing kids?");
         //Permanently convert to lower case
         kids = kids.toLowerCase();

     }





     //Test if we have kids.
     if(kids ==="No"){
         console.log("Let's see 50 Shades of Gray!");
     } else{
         console.log("Let's go see Spongebob!");
     }








 }

 /*
  // If the water temperature is above 75, let's go swimming, if not let's get a tan.


  if (waterTemp > 75){
  console.log("Let's go swimming.");
  }else {
  console.log("Let's get a tan.");
  }
