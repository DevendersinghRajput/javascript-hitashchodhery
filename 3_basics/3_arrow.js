const user = {
    username: "Devender",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "devenderRajput"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "Devender"
//     console.log(this.username);
// }


const chai =  () => {
    let username = "Devender"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({USERNAME: "devender"})


console.log(addTwo(3,5));


const myArray = [1, 2, 3, 4, 5, 6]

// myArray.array.forEach(function () { });
// myArray.array.forEach( () => {});
// myArray.array.forEach( );