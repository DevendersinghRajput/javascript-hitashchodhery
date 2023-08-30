class User{
    constructor (email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email (value){
        return this._email = value
    }

    get password (){
        return `${this._password}devender`
    }

    set password(value){
        this._password = value
    }
}

const devender = new User ("user@devender.ai", "abc")

console.log(devender.password );
console.log(devender.email );