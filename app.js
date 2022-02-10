"use strict";
var userName= prompt("Please Enter your Name");
var userGender= prompt("Please Enter your Gender (male or female)");
var userAge= prompt("Please Enter your Age");
if (userAge<=0)
{
    alert("The age that you entered is less than or equal zero")
}
var skipWelcomigMessage=confirm("Do you want to skip the Welcoming Message..ok means skip");
console.log((skipWelcomigMessage) )

if(skipWelcomigMessage== false)
{
    if(userGender== "male")
    {
        alert("Welcome Mr "+userName);

    }
    else if (userGender=="female")
    {
        alert("Welcome Ms "+userName);


    }
    else{

        alert("Welcome "+userName);

    }

}


