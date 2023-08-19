const myUserEmail = "my@devender.dev"
const myUserEmail2 = []

// if (myUserEmail){
//     console.log(`I rescived mail: ${myUserEmail}`);
// }
// else {
//     console.log(`i dosn't rec. ${myUserEmail + " "}`);
// }

// falsy values ++++
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values ++++
// "0", 'false', " ", [], {}, function(){}, 

if (myUserEmail2 === 0) {
    console.log(`my arry is empty: ${myUserEmail2 + "I am empty"}`);
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator(??): null undefined ++++++

let val1;
// val1 = 5 ?? 10
val1 = 5 ?? null
// val1 = null ?? 8

// val1 = null ?? undefined
// val1 = undefined ?? null

console.log(val1);


// terniary Operators +++++++

// condition ? true : false

const icePrice = 100 
icePrice <= 80  ? console.log(`price is more than ${icePrice}`) : console.log(`Ice Prices in less than ${icePrice}`);
