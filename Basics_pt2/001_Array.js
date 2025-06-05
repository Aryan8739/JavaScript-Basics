//Array

const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

//Array Methods

arr.push(6); // Adds an element to the end
console.log(arr);

arr.unshift(2)
arr.shift()

console.log(arr.includes(2));

const myarr= arr.join()
console.log(myarr);

//Slice & Splice

console.log("A",arr);

const myn1= arr.slice(1, 3); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log("B", myn1);

const myn2= arr.splice(1, 3); // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("C", myn2);

console.log("D", arr);
