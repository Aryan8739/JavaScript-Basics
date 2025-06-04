const score = 100;
console.log( score); // output: 100

const balance = new Number(100);

console.log( balance); // output: [Number: 100]

console.log( balance.toString()); // 100 but as a string
console.log( balance.toString().length); // 3, length of the string representation
console.log( balance.toFixed(2)); // 100.00

const hundreds =10000000000;
console.log( hundreds.toLocaleString()); // 10,000,000,000
console.log( hundreds.toLocaleString('en-IN')); // 1,00,00,00,000

// Math operations--------------------------------------------------------

console.log(Math); // object [Math] {}

//abs 
//ceil gives the smallest integer greater than or equal to a number
//floor gives the largest integer less than or equal to a number

console.log(Math.random ()); // random number between 0 and 1
console.log(Math.random () * 10); // random number between 0 and 10
console.log(Math.floor(Math.random () * 10)); // random integer between 0 and 9

console.log((Math.random () * 10)+1); // random number between 1 and 10 

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20








