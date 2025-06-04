//Dates

let myDate = new Date();
console.log(myDate); // Current date and time

// console.log(myDate.toString()); // String representation of the date
// console.log(myDate.toDateString()); // Date in a human-readable format
// console.log(myDate.toTimeString()); // Time in a human-readable format
// console.log(myDate.toISOString()); // ISO format of the date
// console.log(myDate.toLocaleDateString()); // Local date format

typeof myDate; // "object"

let DateOne = new Date(2023, 0, 1); // January 1, 2023  
console.log(DateOne.toDateString()); // Date object for January 1, 2023

let DateTwo = new Date(2023, 0, 1, 5, 2); // January 1, 2023, 05:02 AM
console.log(DateTwo.toLocaleString()); // Local date and time format



newDate.toLocaleString("default", {
    weekday: "long", // Full name of the day
    year: "numeric", // Full year
    month: "long", // Full name of the month
    day: "numeric", // Day of the month
    hour: "2-digit", // Hour in 2-digit format
    minute: "2-digit", // Minute in 2-digit format
    }
)


let mytime= Date.now();
console.log(mytime); 
console.log(DateOne.getTime()); // Returns the time in milliseconds since January 1, 1970
console.log(DateTwo.getTime()); // Returns the time in milliseconds since January 1, 1970






