const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} is short names of ${myObject[key]}`);
}


const programming = [
    'js',
    'rb',
    'cpp',
    'java',
    'py'
]

for (const key in programming) {
    // console.log(programming[key]);

}


const map = new Map()
map.set ('In', "India")
map.set ('Fr', "France")
map.set ('Cd', "Canda")

// is not iteratable
for (const key in map) {
    console.log(key);
}