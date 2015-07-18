
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


  