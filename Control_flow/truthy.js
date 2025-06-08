//falsy values in JavaScript

false , 0 ,-0 , BigInt(0), "", null, undefined, NaN

// truthy values in JavaScript
true, 1, -1, BigInt(1), "0", "false", [], {}, function() {}, Symbol(), Infinity, -Infinity


const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing operator (??) in JavaScript : null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = 0 ?? 10; // 0 is a falsy value, but it is not null or undefined, so it will be returned
val1 = null ?? 10 ?? 20; // 10 

// Ternary operator in JavaScript

condition ? true : false;
const age = 18;
const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // "Yes, can vote"

age >= 18 ? console.log("Yes, can vote") : console.log("No, cannot vote");

// Short-circuit evaluation in JavaScript
const isLoggedIn = true;
const userName = isLoggedIn && "John Doe"; // If isLoggedIn is true, userName will be "John Doe", otherwise it will be false
console.log(userName); // "John Doe"

