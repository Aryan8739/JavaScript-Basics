//Object Constructors

// const tinderUser= new Object();
const tinderUser = {}

// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isActive = true;

const RegualrUser = {
    email: "some@google.com",
    fullname : {
        userfullname: {
            firstName: "John",
            lastName: "Doe" 
        
        }
    }
}
console.log(RegualrUser.fullname.userfullname.firstName);

const obj1 ={1: "a", 2: "b"};
const obj2 ={3: "a", 4: "b"};

// const obj3 = {obj1, obj2};   #1
// const obj3 = Object.assign({}, obj1, obj2);  #2
//{} is optional Target,Souce

const obj3 = {...obj1, ...obj2};   //#3


console.log(obj3);



console.log(Object.keys(tinderUser)); // returns an array of keys
console.log(Object.values(tinderUser)); // returns an array of values

console.log(Object.entries(tinderUser)); // returns an array of key-value pairs
