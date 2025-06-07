function Saymyname(){
    console.log("Aryan")
}

// Saymyname()

// function addTwoNum(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNum(number1,number2){
    // let result =  console.log(number1 + number2);
    // return result 
    return number1 + number2;
    // console.log("Aryan")  
}

let result = addTwoNum(10,20);
// console.log("result:",result);

function loginUser(username = "Guest"){
    if (!username){
        return "Undefined User";
    }

    return `${username} Just Logged in`
}

console.log(loginUser());
// if we doesnt pass any argument to the function then it will return undefined


 
