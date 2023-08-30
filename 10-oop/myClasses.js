// ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encriptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
        
    }
}

const chai = new user("devender", "devender@google.com", "123");
console.log(chai.encriptPassword());
console.log(chai.changeUsername());


// behind the scene

function User (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encriptPassword = function (){
    return `${this.password}abx`
}
User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@google.com", "123")

console.log(tea.encriptPassword());
console.log(tea.changeUsername());
