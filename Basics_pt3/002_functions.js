function calcCart(val1,val2,...num1){  // Rest operator convert to an array
    return num1
}

console.log(calcCart(1, 2, 3, 4, 5)) // [1, 2, 3, 4, 5]


const user={
    username : "John",
    email : "john@google.com"

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and email is ${anyobject.email}`)
}

//anyobject is used to be generalized for any object

// handleObject(user) // Username is John and email is john@google.com
handleObject({
    username: "Jane",
    email: "Jane@gmail.com"
})

const myArray = [1, 2, 3, 4, 5]
function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myArray)) // 2
console.log(returnSecondValue([10, 20, 30, 40, 50])) // 20
