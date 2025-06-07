const user = {
    username : "Aryan",
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.username}`, "welcome to website");
        console.log(this);

    }
}
 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "Aryan";
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "Aryan";
//     console.log(this.username);
// }

const chai = () => {
    let username = "Aryan";
    console.log(this.username);
}

const addTwo = (num1,num2 ) => {
    return num1 + num2;
}

const addTwo1 = (num1,num2) => num1 + num2;

const addTwo2 = (num1,num2) => (nun1 + num2);

const addTwo3 = (num1,num2) => ({username: "Aryan"});

console.log(addTwo(2,3));




