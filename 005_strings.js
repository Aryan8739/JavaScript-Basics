const name="aryan"
const age=20

// console.log("My name is " + name + " and my age is " + age + ".");

// interpolation using template literals (``)
console.log(`My name is ${name} and my age is ${age}.`);

const str1 = new String("Hello");
// console.log(str1); // String object
// string is object wrapper for primitive string
// mehods are available on string objects 

console.log(str1[0]); // H
console.log(str1.__proto__); // String.prototype

console.log(str1.length); // 5
console.log(str1.toUpperCase()); // HELLO

console.log(str1.charAt(2)); // l
console.log(str1.indexOf("l")); // 2

const newStr = str1.substring(0, 2); // He
// last index is exclusive //ignore negative indices

const anotherStr = str1.slice(-3,2); // He
// slice can take negative indices

const newStr2 = "    Hello World  ".trim(); // "Hello World"
// remove whitespace from both ends

const newStr3 = "Hello World".replace("World", "Aryan"); // "Hello Aryan"   
// replace first occurrence of "World" with "Aryan"

str1.includes("Hello"); // true

str1.split("l"); // ["He", "", "o"]
newStr2.split("l"); // ["He", "lo W", "or", "d"]
