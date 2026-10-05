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

/* IIFE if immediate function invoke then we have to use double parentheses ()() the first one is for function definetion end the second one is for function execution and one importent thing is here we have more then one block of IIFE function then we have to use ';' because it will explicitly seprate the code example
(function a(){console.log('hey')})();
(function two(){console.log('hi)})() */

// function a(){
//     console.log('helo bhai Rohan')
// }
// a()

//  (()=>{
//     console.log('heyy babyy')
//  })
//  ()

// (function one(){
//     console.log('heyy Rohan')
// })
// ()

// function one(){
//     console.log('hii')
// }
// (one())

// (()=>{console.log('dishu')})();
// (()=>{console.log('babu')})()

// const a=(b,c)=>(b+c)
// console.log(a(2,3))

// function applyOperation(a, b, opr) {
//     return opr(a, b);
// }
// function add(x, y) {
//     return x + y;
// }
// console.log(applyOperation(2, 3, add));

// function func1(a,b){
//     function func2(c,d){
//         return c+d
//     }
//     console.log(a+b)
//     return func2(3,5)
// }
// console.log(func1(5,7))



// function func1(b){
//     for(i=0;i<b.length;i++){
//         console.log(b[i])
//     }
// }
// let a = prompt("Enter the String Value");
// func1(a)

// function func1(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(...c)

// }
// func1(1,2,3,4,5,6,7,8)

// loginUser()
//     .then(getProfile)
//     .then(getPosts)
//     .then(getComments)
//     .then(function(comments) {
//         console.log(comments);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

//     loginUser()

// function sayHello() {
//   return "Hello World";
// }

// let greeting = sayHello();
// console.log(greeting)

// function printNumbers(n) {

//     if (n === 0) {
//         return;
//     }

//     console.log(n);

//     printNumbers(n - 1);
// }

// printNumbers(5);

function fibonacci(n) {
    let first = 0;
    let second = 1;

    for (let i = 1; i <= n; i++) {
        console.log(first);

        let next = first + second;
        first = second;
        second = next;
    }
}

// Take input from the user
let num = Number(prompt("Enter the number of terms:"));

fibonacci(num);
