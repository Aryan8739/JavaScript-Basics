//Object declare --> Literal Nd Constructor
//Object.create() //Singleton


//Object Literal

//Symbol

const mysym= Symbol("mySymbol");

const JsUser = {
    name: "Aryan",
    "fullname": "Aryan Rastogi",
    [mysym]: "This is a symbol property",
    age: 20,
    email: "aryan@gmail.com",
    isActive: true,
    courses: ["JavaScript", "Python", "Java"]
};

// console.log(JsUser.age); //#1
// console.log(JsUser["email"]); //#2
// console.log(JsUser[mysym]); //#3

// JsUser.age = 21; 
// console.log(JsUser);

// Object.freeze(JsUser); 
// JsUser.age = 22;
// console.log(JsUser); 



JsUser.greeting= function() {
    console.log(`Hello, my name is,${this.name}`);
}

console.log(JsUser.greeting); // Output: [Function (anonymous)]
console.log(JsUser.greeting()); // Output: Hello, my name is,Aryan

//undefined is also seen in browser console
// cause of some automatic executiion

//This Keyword is used to refer to the current object and it is used inside the method of an object to access its properties and methods.

