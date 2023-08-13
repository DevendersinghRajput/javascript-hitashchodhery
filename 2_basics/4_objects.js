// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Devender"
tinderUser.isLogedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "devender@google.com",
    fullname: {
        userFullName: {
            firstName: "Devender",
            lastName: "Rajput"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b", };
const obj2 = {3: "a", 4: "b", };
const obj4 = {5: "a", 6: "b", };

// const obj3 = {obj1, obj2}
// const obj3 =  Object.assign({}, obj1, obj2, obj4)
const obj3 = {... obj1, ...obj2, ...obj4} 

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "d@google.com"
    },
    {
        id: 1,
        email: "d@google.com"
    },
    {
        id: 1,
        email: "d@google.com"
    }
     
]


users[1].email

console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogedIn'));


const coures = {
    couresname: "js in hindi",
    price: 999,
    couresInstructor: "hitesh"

}
// coures.couresInstructor

const {couresInstructor: instructor} = coures
// console.log(couresInstructor);
console.log(instructor);

// {
//     "name": "devender",
//     "couresname": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



// objects di sturctur
// const navbar = ({company}) => {

// }

// navbar(company = "shiftingway")