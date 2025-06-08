//if

// if(true) {
//     console.log("This will always run");
// } else {
//     console.log("This will never run");
// }

// < , > , <= , >= , == , != , ===

const score = 100;
if (score > 90) {
    let power = "fly"
    console.log(`your power is ${power}`);
}


const balance = 1000;
if (balance > 500) console.log("You are rich"),
console.log("money");                            // Implicit return

// never do like thiss

if (balance > 500) {
    console.log("You are rich");
}else if (balance > 100) {
    console.log("You are middle class");
}else {
    console.log("You are poor");
}

const userloggedIn = true;
const debitCard = false;
if (userloggedIn && debitCard) {
    console.log("You can buy the product");
}else {
    console.log("You cannot buy the product");
}

const loggedfromgoogle = true;
const loggedfromfacebook = false;

if (loggedfromgoogle || loggedfromfacebook) {
    console.log("You are logged in from google or facebook");
}





