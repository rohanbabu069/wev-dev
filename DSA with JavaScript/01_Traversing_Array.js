// let a=[23,43,21,56,76,89,98]
// for(const value in a){
//     console.log(value)
// }
//------------------------------------------------------------
// for(const val of a){
//     console.log(val)
// }

// for(let val in a){
//     console.log(val)
// }
// for(let val of a){
//     console.log(val)
// }

//------------------------ traversing of Array -----------------------------------

/* Forward Traversing of Array with the help of for Loop */

// let a=[23,43,21,56,76,89,98]
// for (let i=0; i<a.length;i++){
//     console.log(a[i])
// }

//Bacward Traversing of Array with the help of for Loop

let a=[23,43,21,56,76,89,98]
for(let i=a.length-1;i>=0;i--){
    console.log(a[i])
}