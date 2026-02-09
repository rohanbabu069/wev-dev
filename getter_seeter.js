// class user{
//     constructor(email,password){
//      this.email = email
//      this.password = password

//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password=value
//     }
// }


// ** same for email as password 

//---------------------------------------------------------------------------------------------------

/* here this._password and set method ka this._password is equal but is pure code m user class ka tyhis.password and get or set method this.password is work equally so inko different krne k liye get and ser method k this.password ko this._password m change kiya h brna ye error show krte  */

// const rohan= new user('rb@.ai','abc')
// console.log(rohan.password)

/* -------------------------- factory function -------------------------------------------------*/

const user={
    _email:'rb@345gamil.com',
    _password:'09090',

get email(){
    return this._email
},
set email(value){
    this._email=value
}
}

const var1= Object.create(user)
console.log(var1.email)

/*here getter and setter are special method which over on property(email,password)*/