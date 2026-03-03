/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

// import momemt node module
import moment from "moment";

//get user input
let year = Number(process.argv[2]) ;
//console.log(year);

//write a program that determines if the input year is a leap year or not

// if (year % 4 === 0) {
//     console.log(year + " is a leap year");
// }
// else {
//     console.log(year + " is not a leapyear")
// }

// if year is leapyear
//console log year is a leap year!
//else
    //console.log(`${year} is not a leap year`)

// determines if the input year is a leap year or not

if (moment([year]).isLeapYear() === true) {
    console.log(`${year} is a leap year! Phil get's a birthday!`)
} else {
    console.log(`${year} is not a leap year. No birthday for Phil.`);
}