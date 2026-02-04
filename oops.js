// const user={
//     username:'Rohan',
//     loginCount:9,
//     signedIn:true,

//     getUserDetails : function(){
//         // console.log('username')
//         console.log(this.username)
//     }
// }

// console.log(user)
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(user.getUserDetails())
// console.log(user.getUserDetails())

// ----------------------------------------------------------------------


function User(username, loggedIn, verify){
    this.username=username;
    this.loggedIn=loggedIn;
    this.verify=verify;

    return this
}
// console.log(User('rohan'))
// console.log(User())
// console.log(User('rohan','loggedin',true))
// console.log(User('rohan','loggedin',true))

// const userone=User('Rohan', 19, true)
// const usertwo=User('Babu', 40, false)


/* here we use new key word because without this my value of fuction were changing so we use new key word so that  we get copy of function and we can change any value in it seprately 
"--------- 'new' keyword works-----------"
1️⃣ Create a new empty object 
2️⃣ Link the object to the constructor’s prototype
3️⃣ Bind this to the new object
4️⃣ Return the object (unless you return another object)
**Arrow functions don’t have their own this
*/ 

// const userone=new User('Rohan', 19, true)
// const usertwo=new User('Babu', 40, false)
console.log(userone);
console.log(usertwo)