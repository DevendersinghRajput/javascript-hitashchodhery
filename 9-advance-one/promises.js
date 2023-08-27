// fetch('https://demo.com').then().catch().finally()

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network, 

    setTimeout(function(){
        console.log('Async Task is compelete');
        resolve()
    }, 1000)
});

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two 2");
        resolve()
    } , 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "devender", pass: "123"})
        }else {
            reject('Error: Somthing went wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
} )
.finally(() => console.log("The promise is resolved or rejected"))


const promiseFive = new Promise (function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username: "JavaScript", pass: "123"})
        }else {
            reject('Error: Js went wrong')
        }
    } , 1000)
});


async function consumePromiseFive () {
    try{
        const response = await promiseFive
    console.log(response);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers (){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//         // console.log(response);
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("ERROR", error);
//     }
// }

// getAllUsers()
// 9-advance-one/promises.js


fetch('https://api.github.com/users/DevendersinghRajput')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))