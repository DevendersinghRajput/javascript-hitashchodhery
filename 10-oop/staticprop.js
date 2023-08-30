class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static creatId(){
        return `123`
    }
}

const devender = new User ("Devender");
// console.log (devender.creatId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")
console.log (iphone.logMe())