// singleton


// object literals 

// Object.create

const mySym = Symbol("keys1")


const JsUser = {
    name: "Devender",
    age: 23,
    location: "Hisar",
    email: "profile@devender.dev",
    isLoggedIn: false,
    [mySym]: "mykey1",
    "full name": "Devender Rajput",
    myLastLoginDay: ["monsay", "friday", "sunday"] 
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log( typeof JsUser[mySym]);
console.log(JsUser[mySym]);

JsUser.email = "contact@devender.dev"
// Object.freeze(JsUser)
JsUser.email = "google@devender.dev";

console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello js wale");
}
JsUser.greeting2 = function () {
    console.log(`my name is ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());