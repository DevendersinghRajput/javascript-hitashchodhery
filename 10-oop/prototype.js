// let myName = "Devender     "

// console.log(myName.trueLength);

let myHero = ["Thor", "Spiderman"]

let heroPawer = {
    thor: "hammer",
    spider: "sling",

    getSpiderPower: function (){
        console.log(`Spidy Power is ${this.spider}`);
    }
}

Object.prototype.devender = function(){
    console.log(`devender is persent in all objects`);
}

Array.prototype.hiDevender = function (){
    console.log(`devender says hello`);
}

// heroPawer.devender()
// myHero.devender()
// myHero.hiDevender()
// heroPawer.hiDevender()



// ### inheritance 

const User = {
    name: "Chai",
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssingnment: 'Js Assinfnment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// mordern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let myName = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    // console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength()
// "devender".trueLength()
// "iceTea".trueLength()