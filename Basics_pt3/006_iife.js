//Immediately Invoked Function Expression (IIFE) - A function that runs as soon as it is defined

// for database connection simulation
// for global scope pollution prevention

//named iife
(function chai(){
    console.log("DB CONNECTED");
})(); // Immediately Invoking the function // ";" is used to avoid issues with minification btw 2 iife

( (name) => {
    console.log(`DB DISCONNECTED ${name}`);
} )("Aryan"); // Arrow function IIFE   


























