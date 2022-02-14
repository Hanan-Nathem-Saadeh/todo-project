



"use strict";
var answerQuestion= [];

var askQuestion = function (question)
{
    return prompt(question);
 
}
var questionOne=askQuestion("Do you live in Jordan ? Yes/No ");
var questionTwo=askQuestion("Have you ever visited Petra ? Yes/No");
var questionThree=askQuestion("Do you do your tasks on time? ? Yes/No");


var validate = function(answer)
{
if (answer==="yes"|| answer==="Yes")
{
    answer="Yes";
}
else if (answer==="No"|| answer==="no")
{answer="No";
}
else 
{answer=("invalid string");
}
answerQuestion.push(answer);
}
validate(questionOne);
validate(questionTwo);
validate(questionThree);
 var printArray = function(array)
 {
for(var i=0; i<array.length ;i++)
{
console.log(array[i]);

}
 }

 printArray(answerQuestion);



// var userName= prompt("Please Enter your Name");
// var userGender= prompt("Please Enter your Gender (male or female)");
// var userAge= prompt("Please Enter your Age");
// if (userAge<=0)
// {
//     alert("The age that you entered is less than or equal zero")
// }
// var skipWelcomigMessage=confirm("Do you want to skip the Welcoming Message..ok means skip");
// console.log((skipWelcomigMessage) )

// if(skipWelcomigMessage== false)
// {
//     if(userGender== "male")
//     {
//         alert("Welcome Mr "+userName);

//     }
//     else if (userGender=="female")
//     {
//         alert("Welcome Ms "+userName);


//     }
//     else{

//         alert("Welcome "+userName);

//     }

// }



