const name = "devender";
const repoCount = 50;

console.log(name    + repoCount + " additional add"); // ye sintax out dated hai, koi bhi use ngi kerta hai thoda ugly type bhi hai

// jo use kery gey sintaxt wo hai

console.log(`Hello baby My Name is ${name} and my repo count is ${repoCount}`); 

const nameChanger = new String('devender-singh-rajput')
// console.log(nameChanger[0]);
// console.log(nameChanger.__proto__);

// console.log(nameChanger.length);
// console.log(nameChanger.toLocaleUpperCase());

console.log(nameChanger.charAt(4));
console.log(nameChanger.indexOf("r"));

const newString = nameChanger.substring(0, 4)

console.log(newString);

const anotherString = nameChanger.slice(-8, 4);

console.log(anotherString);


const spaceString = "       Shifting         "
console.log(spaceString);
console.log(spaceString.trim());

const url = "https://www.shiftingway.com/packers%20movers";


console.log(url.replace('%20', '-'));

console.log(url.includes('shifting'));

console.log(nameChanger.split('-'))