class User {
    constructor(username){
        this.username = username 
    }
    logme(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(usernme,email,passward){
        super(usernme)
        this.email=email
        this.password=passward
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`)
    }
}
const User2 = new Teacher ('rohan','eb@gmail',342)
console.log(User2)
User2.addCourse()
User2.logme()

const User3 = new User('Babu')
console.log(User3)
// User3.addCourse()
User3.logme()

console.log(User3 === User2)
console.log(User2 instanceof Teacher)
console.log(User2 instanceof User)