 class User {
   constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
   }

   encryptpassword(){
    return `${this.password}abc`

   }
}

const user1 = new User('rohan','ab@gmail',345)
console.log(user1.encryptpassword())
console.log(user1.password)
console.log(user1.email)
console.log(user1.username)
