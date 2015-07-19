/**
 * Created by MichaelMedina on 7/18/15.
 */


//isNaN(item to test)
//true if not a number
// false if it is a number

//To test blank we test   item === ""

//To test text strings
//(item.toLowerCase()!= "yes" && item.toLowerCase() != "no"

//For Validation we use a while loop
//Use a while loop because we don't know how many times the user will get it wrong.

//Ask the user for oa number
var userNum = prompt("Please enter in a number.");
//Directly after each prompt, validate for that prompt
while(isNaN(userNum) || userNum ===""){
    //re-prompt using the same variable
    userNum=prompt("Please only use numbers and don't leave blank.\nPlease type in a number.")
}
console.log(userNum);


//Ask the user for either red or black
var color = prompt("Please choose red or black");

while(color.toLowerCase()!="red" && color.toLowerCase()!="black"){
    //Re-Prompt the user using the same variable
    color = prompt("Please only type red or black.\nChoose your color.");
    counter++;
    if(counter>5){
        console.log("You have tried to many times.");
        break;
    }
}
