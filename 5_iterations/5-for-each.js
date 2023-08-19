const coding = ["js", "java", "python", "ruby", "cpp"];

// coding.forEach ( function (val) {
//     console.log(val);
// } )

// arrow
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFile: "Js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
})