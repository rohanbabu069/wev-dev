// const user ={
//     username:"Rohan Babu",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to my website`)
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="Dishu"
// user.welcomeMessage()
// user.welcomeMessage()
// console.log(this)

// function one(){
// let a=23
// console.log("Hello Rohan")
// console.log(this)
// }
// one()

// const hi=function one(){
// let a=23
// console.log("Hello Rohan")
// console.log(this)
// }
// hi()
// // console.log(this)

// const a=()=>{
//     console.log('heyy')
// }
// a()

// const a=(num1,num2)=>{
//     return num1+num2
// }
// console.log(a(3,7))

/* If I want to print the object then i have to use parentheses () for print the object like ({user:23})*/
// const a=()=>({username:'rohan'})
// console.log(a())

/* implicitlly function here we are not use return keyword but if we use curly braces {} then i  have to use return keyword like const a=(num1,num2)=>{
    return num1+ num2}*/
// const a=(num1,num2)=>(num1+num2)
// console.log(a(9,6))