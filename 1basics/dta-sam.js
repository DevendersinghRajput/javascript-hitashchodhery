// primitive data types

// 7types of primitive data types: stiing, symbol, boolearn, bigInt, number, nul, undifine.

// const score = 20;
// const scoreValue = 100.4;
// console.log(scoreValue);

// const isLoggedIn = true;
// const outsideTemp = null;
// let userEmail;
 

// const id = Symbol('123')
// const anotherId = Symbol ('123')

// console.log();

// console.log(id===anotherId);

// const bigNumber = 23432492834732897498327492432n;


// non primitive / reference type

// array, Object, functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "Devender",
//     age: 23, 
//     und
// }

// const  myfunction = function (){
//     console.log("hi, Bady");
// }

// console.log(typeof myObj);
// console.log(typeof myfunction);

// console.log(typeof heros)
// console.log(typeof bigNumber)
// octale types

// console.log((8*8*8)*3 + (8*8)*4 + (8*1)*2 + (8*0)*3)
// console.log((512)*3 + (64)*4 + (8)*2 + (0)*3)

// console.log(03423); 



/* 
******************* mamory *********************
    STACK (Primitive), HEAP(Primitive)
    
*/

let myName = "DevenderRajput";
let anotherName = myName
anotherName = "hi bady"

console.log(myName);
console.log(anotherName);


let user = {
    email: "devender@gmail.com",
    id: "bill@bl"
}

let userTwo = user;
userTwo.email = "monu@gmail.com"

console.log(user);
console.log(userTwo);