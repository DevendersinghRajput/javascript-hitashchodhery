// <, >, <=, >=, ==, !=, ===, !==

// if statment

// const temperature = 41;

// if (temperature === 41){
//     console.log(`yes, is ${temperature} tempertured.`);
// }
// else{
// console.log(`yes ${temperature} tempertured.`);}

// console.log("this is creact no.");


// const score = 200;

// if( score > 100){
//     let power = "fly"
//     console.log(`user pawer: ${power}`);
// }



const balance = 1000
// shot hend notation
// if (balance > 500) console.log(`your balance: ${balance}`);

// if(balance < 500){
//     console.log(`less than: ${balance}`);
// }
// else if (balance < 750){
//     console.log( `less than: ${balance}`);
// }
// else if(balance < 999){
//     console.log(`less than: ${balance}`);
// } 
// else {
//     console.log(`lass than: ${balance + 200}`);
// }


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log(`Allow to cousrse in Enterd `);
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log(`user logged in: ${loggedInFromEmail || loggedInFromGoogle}`);
}


