const marvelHeros = ["thor", "iron man", "spaider man", "hulk", "black wido", "vision"]
const dcHeros = ["superman", "batman", "aquaman", "wonder woman", "flase", "jocker"]

marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros [6] [1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);
// console.log( typeof allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let realAnotherArray = anotherArray.flat(Infinity);

console.log(realAnotherArray);


console.log(Array.isArray("Devender") )
console.log(Array.from("Devender") )
console.log(Array.from({name: "Devender"}) ) // for interviews 13:40

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));