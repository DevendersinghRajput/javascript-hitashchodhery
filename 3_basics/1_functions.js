

function sayNamyName() {
    console.log("d");
    console.log("e");
    console.log("v");
    console.log("e");
    console.log("n");
    console.log("d");
    console.log("e");
    console.log("r");
}

// sayNamyName();

// function addTowNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTowNumbers(number1, number2){

    // let result = number1 + number2
    // return result 
    return number1 + number2
}


const result = addTowNumbers(3,8)

// console.log("Rusult: ", result);


function loginUserMessage(username = "sam") {
    if (!username){
        console.log("plese enter a user name");
        return 
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage ("Devender"))
// console.log(loginUserMessage ("devender"))

// +++++++++++ next class =++++++++++=

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
const user = {
    username: "Devender",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} Price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 345
})

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 200]));


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    delete prop;
    return records;
}

const upVal = updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(upVal);