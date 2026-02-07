class User{
    constructor(usernmae){
        return `${this.usernmae=usernmae}`
    }
    logme(){
        console.log(`username is ${this.usernmae}`)
    }
    static createID(){
        return `234`
    }
}

const User1 = new User('rohan')
console.log(User1)
User1.logme()
console.log(User1.createID())
// 'static' keyword use hota h harkisi ko kis method ka access rokne k liye mostly use in inheritance