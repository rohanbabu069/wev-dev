// function SayMyName(){
//  console.log("R")
// console.log("O")
// console.log("H")
// console.log("A")
// console.log("N")   
// }

// SayMyName()
// SayMyName()

// function sumtwonumber(num1,num2){
//     console.log(num1+num2)
// }
// const b=sumtwonumber(3,6) 
// console.log(b)

/* by default a rule in javascript programming is that after use of return keyword anything will not be executed*/

// function subtract(num1,num2){
//     let sub=num1-num2
//     return sub
//     console.log("Rohan")

// }

// const c=subtract(9,3)
// console.log(c)


// function SumTwoNumber(num1,num2){
//     return num1+num2
// }

// const a=SumTwoNumber(2,3)
// console.log(a)

// function MyName(username){
// return`${username} just logged in`
// }

// let a=MyName("Rohan")
// console.log(a)
 
// function cardprice(num1){
// return num1
// }
// let a=cardprice(300)
// console.log(a)

// function calculateprice(...num1){
//     return num1
// }
/* here (...num1) is rest operator not a seprate opretor it is immilar to seprate operator333 */
// let price=calculateprice(100,200,300)
// console.log(price)


/* line 60 this is incorrect code  */
// function price (num1,num2,...num){
// return (num1,num2,...num)
// }
/* Incorrect return syntax:

The expression (num1, num2, ...num) is invalid in a return statement.

The spread operator ... cannot be used in a plain expression like this.

Misuse of the comma operator:

In JavaScript, (a, b, c) returns only the value of the last expression (c). This is the comma operator.

So even if it didn’t throw a syntax error, return (num1, num2, ...num) would still behave unexpectedly.*/ 

// the correct code is line 70 and 84

// function price(...nums) {
//   return nums;
// }

// console.log(price(1, 2, 3, 4)); // [1, 2, 3, 4]


// function price(num1, num2, ...rest) {
//   return [num1, num2, ...rest];
// }

// console.log(price(10, 20, 30, 40)); // [10, 20, 30, 40]

/* ... is only valid in function parameters, array literals, or argument passing.

You cannot use ... like this: return (num1, num2, ...num);

If you're trying to return all values together, use an array or object.*/

// const user={
//     username:"Rohan",
//     phoneno : 8888654300
// }

// function handleobject(anyobject){
// console.log(`the user name is ${anyobject.username} and the price is ${anyobject.phoneno}`)
// }

// handleobject(user)
/*yha hum object ko function m pass krane pr object ka name user nahi pass krate hai uski jagah hum anyobject ya apni traf se koi bhi suitable name use krte h   */

// const price={
//     price1:100,
//     price2:200
// }
// function measureprice(price){
//     console.log(`first price is ${price.price1} and second price is ${price.price2}`)
// }
// measureprice(price)

// const array=[12,3,4,5,6]
// function getarray(num1){
//     console.log(num1[0])
// }

// getarray(array)