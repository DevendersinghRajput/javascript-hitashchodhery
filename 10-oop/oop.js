// Object literal

const user = {
    username: "Devender",
    loginCount: 8,
    singedIn: true,
    
    getUserDetails: function (){
        // console.log("Get user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
} 

// console.log(user.username)

// console.log(user.getUserDetails());

// console.log(this);


//  ## constructor function


function User (username, loginCount, isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;
    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Devender", 12, true)
const userTwo = new User("Rajput", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
