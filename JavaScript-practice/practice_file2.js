// // How to use parameter and argument in function of javascript 

// function func1(a,b){
//     console.log(a+b)    
// }
// func1(3,5)

// function func1(a,b,operation){
// return operation(a,b)
// }
// function add(x,y){
//     return x+y
// }
// function multiply(c,d){
//     return  c*d
// }
// console.log(func1(3,5,add))

// function func1(){
//     console.log('helo')
// }
// function func2(arg){
//     arg()
//     arg()
// }
// func2(func1)

// console.log('3')

// function func1(a){
// for(i=0;i<a.length;i++){
//     console.log(a[i])
// }
// }
// func1('rohan')

// (()=>{
//     console.log('rohan')
// })
// ()

// const a=function (){
//     console.log('hello')
// }
// a()

// function Person(name, age) {
//   this.a = name;
//   this.b = age;
// }

// const user = new Person("Neha", 22);
// console.log(user.a);

// const a="rohan"

// function func1(){
//     for(i=0;i<a.length;i++){
//         console.log(a[i])
//     }
// }
// func1()

// const a=()=>{
//     console.log('Rohan')
// }
// a()

// function func1(a,b,c){
//     if(a>b & b>c){
//         console.log(`${a} is largest no.`)
//     }
//    if (b>a & a>c){
//     console.log(`${b} is the largest no`)
//    } 
//    else{
//     console.log(`${c} is the largest no.`)
//    }
// }
// func1(5,2,8)


// function fibonacci(n) {

//     if (n == 0) {
//         return 0;
//     }

//     if (n == 1) {
//         return 1;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6));

// setTimeout(()=>{console.log('hello')},3000)

// function sortArray(arr) {

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] > arr[j]) {

//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }

//         }

//     }

//     return arr;
// }

// console.log(sortArray([5, 2, 8, 1, 4]));