
 /*
Michael Medina
7/16/2015
Section 00
Conditionals Assignment
 */

 alert("Do you play too many video games?\n We are going to see how much you played this week and diagnose you appropriately");

 var gamesPlayed = Number(prompt("We are going to figure out if you are addicted to video games.\nHow many hours did you play on day 1?"));

 // var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 if (gamesPlayed === "" || isNaN(gamesPlayed))
 //Validating that user actually typed something in the box. Because users are often dumb.
     while(gamesPlayed === "" || isNaN(gamesPlayed))
     {
         gamesPlayed = parseInt(prompt("You can't run from your problems. Answer the question.\nNow then, how many hours did you play video games for?"));
     }

 //Get the average for each day.
 var questionArray =[];
 var totalHours;

 questionArray[0] = (parseInt(gamesPlayed));
 //For loop to save user input in the array.
 for(var i=1; i<8;i++)
 {questionArray[i] = parseInt(prompt("How many hours did you play on day " + i))}
 //Form the array.
 totalHours = parseInt(questionArray[1])+ parseInt(questionArray[2])+ parseInt(questionArray[3])+ parseInt(questionArray[4])+ parseInt(questionArray[5])+parseInt(questionArray[6]);
 //Display point totals.
 console.log("Your total hours playing video games "+totalHours);


 //Average
 var averagePoints = parseInt(totalHours)/7;
 console.log(("You played "+averagePoints+" hours this week"));

 //Answers to input by user
 if (gamesPlayed >= 9){
     console.log("You have problems. Get off the console. Go outside. Talk to people. Just get off your ass.");
 } else if(gamesPlayed >= 5){
     console.log("You're getting close to playing too many video games. But it's fine we understand, they are great after all.");
 } else if(gamesPlayed >=3){
     console.log("You're fine keep playing video games, they are awesome!");
 } else{
     console.log("You should probably start playing some games before you get rusty ;)");
 }
 
