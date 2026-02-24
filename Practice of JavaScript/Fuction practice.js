/* How to write JavaScript function ?
Its just Simple : write function keyword then function name use (){} after that write code in {} then call the function   */


/*Below exammple is shown the asynconouse nature of javascript  */


// function func(){
//     console.log("Hello World")
// }
// func()
// console.log('hello Rohan')
// console.log('hello babu')

// setTimeout(() => {
//     console.log('Dishu')
// },0)

// setTimeout(() => {
//     console.log('Byeeee')
// })
// console.log('hello Chandravanshi')


// ------------------callback function-----------------------


function saybye(){
    console.log('Byeeeee Baby')
    console.log('123445')
}

function greet(a,sayBye){
console.log('hello ' +a);
console.log('string')
sayBye()
}

greet('rohan', saybye)