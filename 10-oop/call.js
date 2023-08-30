function SetUserName(username){
    // compalex DB call 
    this.username = username
    
}

function creatUser(username, email, password){
    SetUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new creatUser( "chai", "chai@google.com", "123", ) 
console.log(chai);