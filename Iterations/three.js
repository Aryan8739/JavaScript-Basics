//For of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4]
for (const val of arr) {
    console.log(val);
}

const greeting = "hello"
for (const greet of greeting) {
    console.log(greet);
}

//Maps
const map = new Map()
map.set("IN", "India")
map.set("FR", "France")

console.log(map);

for (const [key,value] of map) {           //Map baad me padh lena!!!
    console.log(key);
}

const myObject ={
    g1: "NFS",
    g2: "GTA",
}

// for (const [key,value] of myObject) {         //Cannot Iterate Object.
//     console.log(key);
// }
