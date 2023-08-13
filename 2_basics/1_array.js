// +++++++++++++++++ arrys ++++++++++++++++

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const myHeros = ["sgaktiman", "nagraj", "kilvish", "mukambo"]

const myArr2 = new Array(1, 2, 3, 4,)

console.log(myArr[1]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// +++++ slice, splice +++++

console.log("A", myArr);
const myNewArr = myArr.slice(1,3) 

console.log(myNewArr);
console.log("B", myArr);

const myNewArr2 = myArr.splice(2,6) 
console.log(myNewArr2);

console.log("C", myArr);