// Stack(primitive), Heap(non primitive)

let myname ="aryan"
let secondname ="rastogi"
secondname="Drago"

console.log(myname);
console.log(secondname);

//------------------------------

let userOne = {
    email:"userone@gmail.com",
    upi: "userone@ybl"
}

let userTwo ={
    email :"usertwo@gmail.com",
    upi: "usertwo@ybl"
}

userTwo = userOne

userTwo.email = "ayan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
