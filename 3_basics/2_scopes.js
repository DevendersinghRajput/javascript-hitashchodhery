// const, let, var

// var c = 300;
let a = 100;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log( "indeer", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// +++++++++++++ nested scope ++++++++++++

function one() {
    const username = "devender";

    function two() {
        const website = "shiftingway.com"
        console.log(username);
    }

    // console.log(website);

    two()

}

one()

if (true){
    const username = "devender"
    if (username === "devender"){
        const website = " shiftingway"
        console.log(`hi my name is ${username} and my business website is ${website}`);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++ intersting ++++++++++++++++
 
console.log(addone (5)); 
function addone (num){
    return num + 1

}

addTwo(5)
const addTwo  = function (num){
    return  num + 2
}