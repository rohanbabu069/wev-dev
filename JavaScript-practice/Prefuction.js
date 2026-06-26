// // function func1(){
// // console.log('Hello')
// // }
// // func1()


// /* How to create function with parameter*/

// // Simple first make function then use () and pass the parameter in ()and then call the function with arrgument

// function func1(a,b)
// {
//     return a+b
// }
// let a=func1(5,6)
// console.log(a)

// console.log("hello world")
// console.log("hiiii")
// console.log("bye")

// function func1(){
//     if(true){
//         var a=10
//         var d =40
//         let b=20
//         const c=30
//     }
//     console.log(a,d)
//     console.log(b)
//     console.log(c)
// }
// funcf1()

// const person = {
//   "firstName": "John",
//   lastName: "Doe",
//   age: 50,
//   1:23,
// };

// let {firstName, lastName,age} = person 
// console.log(age)
// console.log(firstName+" " +lastName)
// let {"firstName":h} = person
// console.log(h)

// function Person(name) {
//   this.name = name;
// }

// const p = new Person("John");
// p('hii')

// --------------- callBack---------------------------

// function add(a,b,cb){
//   let result= a+b
//   // console.log(result)
//   cb(7)
// }

// add(4,9,function(a){
// // console.log(a)
// })


// function fun() {
//     console.log("Hello, World!");
// }
// function fun2(action) {
//     action();
//     action();
// }

// fun2(fun);

// function mul(factor) {
//     return function(num) {
//         return num * factor;
//     };
// }

// const mul2 = mul(2);
// console.log(mul2(3))
// // console.log(mul2(5));
// // const mul3 = mul(3);
// // console.log(mul3(5)); 


// function func1(a,b){
//  console.log(a+b)}
//   setTimeout(function func2(){
//     console.log('hello');
//     },3000)
 

// func1(2,3)

// (function (){
//   let x = 10;
//   console.log(x)
// })();


const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue" 
});
console.log(person.firstName)