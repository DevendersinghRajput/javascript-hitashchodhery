// while loop


// let index = 0;
// while (index <= 10) {
//     console.log(`value of index: ${index}`);
//     index = index + 2
// }

// let myArr = ["flas", "baatman", "superman"]
// let arr = 0
// while (arr < myArr.length) {
//     console.log(`my best super heros is: ${myArr[arr]}`);
//     arr = arr +1
// }


// let mySco = 15

// do {
//     console.log(`Get my Soco is: ${mySco}`);
//    mySco++
// } while (mySco <= 10);

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Loop through contacts array
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop]; 
        } else {
          return "No such property"; 
        }
      }
    }
    for (let i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name){
          if(contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
          }else {
          return "No such contact";
          }
        }
      }
    return "No such contact"; 
    
    // Only change code above this line
  }
  
 const valshift =  lookUpProfile("Akira", "likes");

console.log(valshift);
