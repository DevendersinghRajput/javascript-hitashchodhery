// # Primitive data types 

// 7 types of primitive data types : String, Number, boolearn, null,  undefined, Symbol, BiInt

// let score = 100;
// let scoreValue = 10005;

// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol("123")
// const anotherId = Symbol("123")

// console.log(id === anotherId);

// const bigNumber = 1321354564565465n;

// console.log(bigNumber)




// # Reference (nonPrimitive) data types 

// types: array, Objects, Functions
// const superheros = ["shaktiman", "nagraj", "doga", ]
// let myObj ={
//     name: "devender",
//     age: 23,
// }

// const myFunction = function (){
//     console.log("Hai Bhai sab")
// }

// console.log(typeof anotherId);


// 01-basics/02-datatypes_summary.js











//++++++++++++++++++++++++++++++++++++++++++

// memory types
// 01 stack memory, 02 heap memory

// stack (Primitive), heap (Non-Primitive)

let mySite = "shiftingway"

let myAnotherSite = "thepackersmoversdelhi"
myAnotherSite = "mumbaiwali"

console.log(mySite);
console.log(myAnotherSite);


let userOne = {
    email: "user@gmail.com",
    upi: "user@BC"

}
let userTwo = userOne

userTwo.email= "devender@mail.com"

console.log (userOne.email);
console.log (userTwo.email);
