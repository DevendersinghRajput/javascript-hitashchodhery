// for off loops

["", "", ""]
[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`each char is: ${greet}`);
}


// Maps++++++

const map = new Map()
map.set ('In', "India")
map.set ('Fr', "France")
map.set ('Cd', "Canda")

console.log(map);

for (const [key, value] of map) {
    // console.log(`my contyr name is: ${key}`);
    console.log(key, ':-', value);
}


const myObj= {
    game1: 'NFS',
    game2: 'spiderman',
    game3: 'IGI',
    game4: 'IMBG'
}

// ye wala loop to objects me work kery ga nhi esliye objects ko for in loop me chelaya jata hai
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }


