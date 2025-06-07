function one(){
    const username = "Aryan"

    function two(){
        const email = "aryan@mail"
        console.log(username)

    }
    // console.log(email) 
    two() // Aryan
}
one()
//----------------------------Interesting-----------------------------------------

console.log(addone(5)) // 6)
function addone(num){
    return num +1
}

console.log(addtwo(5)) //Cannot be accesed like addone before initialization
// This is because addtwo is defined using a function expression, which is not hoisted.
// Function expressions are not hoisted, so they cannot be called before they are defined.
// To fix this, you can either call addtwo after its definition or use a function declaration instead.

const addtwo = function(num){
    return num + 2
}