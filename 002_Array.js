const marvel = ["Ironman", "Hulk", "Thor", "Captain America"]
const dc = ["Batman", "Superman", "Flash"]

// marvel.push(dc)

console.log(marvel) 

// const allHeroes = marvel.concat(dc)
// console.log(allHeroes)


// const allHeroes = [...marvel, ...dc]  // Spread operator to merge arrays
// console.log(allHeroes)



 const anotherArray = [1, 2, [2,5,10], 8,9,[5,6,[3,4]]]
 const flatArray = anotherArray.flat(Infinity)
console.log(flatArray) 

    
console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan"))

console.log(Array.from({name:"Aryan"}))


let score1= 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Creates an array from the arguments
