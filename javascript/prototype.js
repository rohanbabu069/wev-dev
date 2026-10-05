// function multiplyBy5(num){
//     return num*5
// }

// multiplyBy5.power=2

// console.log(multiplyBy5(6))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

// function createUser(username, score){
//     this.score=score
//     this.username=username 
// } 

/*yha par this keyword ka matlab h jisne bhi usko call kiya h ya jis bhi fuction kavarable bnana h uksa varaible ban jaye */

// createUser.prototype.increment=function(){
//     this.score++
// }
// createUser.prototype.printme = function(){
//     console.log(`price is ${this.score}`)
// }
// /* yha par createrUser function k -> prototype or we can say object main hum ek functionality introduce kr rhe hain printme name ki jiska work hoga print krna  */

// const chai = new createUser('chai',30)
// const tea = new createUser('tea',300) 
// console.log(chai.printme()) /* isko print krane apr undefined bhi sath ma print ho rha h jiska means ye hai ki chai.printme ki kuchh hidden value/ functionality ho skti h qki ye ek object h or bo value/functionality abhi defined nhi h */
// console.log(tea.printme())
// tea.printme()


// --------------------- prototype --------------------------------

// let myname='Rohan'
// console.log(myname)
// console.log(myname.length)

// let myname2 = 'Rohan Babu      '
// console.log(myname2.trim().length) /*  here trim method is use to remove unwanted space in a string*/

// let array1 = ['Ironman' , 'Hulk']

// let power ={
//     Ironman:'suit',
//     Hulk: 'strenth',
//     getIronmanpower : function(){
//         length,log(`Ironman power is ${this.Ironman}`)

//     }
    
//     }
// Object.prototype.Rohan =function(){
//         console.log('Rohan is present in all object')
// }
// // power.Rohan()
// array1.Rohan()

// Array.prototype.heyRohan = function(){
//     console.log('hey Rohan')
// }

// array1.heyRohan()
// power.heyRohan()

// -------------------------- Inheritance --------------------------------

// let user={
//     username:'Rohan',
//     Islokedin:'login'
// }

// let teacher = {
//     teaching:true
// }

// let TAteam={
//    assignment:'make assignment for JS',
//    fulltime: true,
//    __proto__ :teacher /* here __proto__ is the way to use inheritance in JS*/
// }

// teacher.__proto__=user /* this is old approch*/

// //  mordern Syntax 
// Object.setPrototypeOf(teacher, user)  /*here teacher saari property accese kar skta hai user ki */


let username2 = 'Rohan Chandravanshi    '

String.prototype.trulength=function(){ /**/
    console.log(`the true lenth is ${this.trim().length}`)
    console.log(this)
    console.log(`${this}`)
}
username2.trulength()
'Babu'.trulength()