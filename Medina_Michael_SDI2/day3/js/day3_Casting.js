
 /*
Michael Medina
7/11/2015
Section 00
Casting Variables
 */

//alert("Just testing!");

                        //Casting variables means treating one variable like another.
var stringVar = "6";
var results = 7 + stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number if possible.
 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 //Cast numbers to be a text string
 //String() - treat whatever is inside as a text string
 var areaCode = 954;
 var prefix = 598;
 var lineNumber = 3834;
 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);
 console.log("("+areaCode+")"+prefix+"-"+lineNumber);



                        //all prompt() returns text strings!!!
 var videoGamesCurrent = prompt("How many video games do you currently own?");

 var gamesBought = prompt("How many games did you buy today?");

 var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
 console.log(totalGames);



                                     //Parsing Integers
 //ParseInt() - looks through a text string and returns an integer
 //Only the first number in the string is returned!
 //If the first character in the text string canNot be converted into a number, then it returns NaN = Not a Number

 var a = parseInt("40 years old");
 console.log(a);

 var b = Number("40 years old");
 console.log(b);

 var c = parseInt("He was 40");
 console.log(c);

 //parseFloat allows for decimal places INT does not.

var d = parseFloat("40 years old");
 console.log(d);
