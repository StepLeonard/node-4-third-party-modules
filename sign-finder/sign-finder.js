/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

// Import functions from horoscope package
import { getSign, getZodiac } from "horoscope";


// Get the month, day, and year 
let month = Number(process.argv[2]);
let day = Number(process.argv[3]);
let year = Number(process.argv[4]);

//console.log(month);
//console.log(day);
//console.log(year);


// use month and day to get the sign
let sign = getSign({ month, day });
// use year to get zodiac
let zodiac = getZodiac(year);

console.log("Your astrological sign is " + sign + " and your zodiac sign is " + zodiac);
