// Immediately Invoked Function Expression (IFFE)
 
// function chai (){
//     console.log(`DB CONNECTED`);
// }
// chai()

// * Named iife
(function chai (){
    console.log(`DB CONNECTED`);
})();

// *unNamed iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Devender")

