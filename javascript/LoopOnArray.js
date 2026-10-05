// ------------------for of loop------------------
// const arr=[1,2,3,4,5]
// for(const val of arr){
//     console.log(val)
// }

// const str="Rohan Babu"
// for(let val of str){
//     console.log(val)
// }

// let obj=Object(
//     {
//     a:'ron',
//     b:'bob',
//     1:23,
//     2:56
// })
// for(let itr of obj){
//     console.log(itr)
// }

// -----------------for in loop----------------
// let obj={
//     1:23,
//     2:56,
//     a:'ron',
//     b:'bab'
// }
// for(let key in obj){
//     console.log(key)
// }

// for(let val of Object.values(obj)){
//     console.log(val)
// }

// for(let val of Object.keys(obj)){
//     console.log(val)
// }

//------------------ Map()--------------

// Map is object itself and it has unique values and serialvise mean ordered value

// const map=new Map()
// map.set(1,'rohn')
// map.set(2,'bob')
// map.set('ab','hello')
// console.log(map)

// const ab=new Map()
// ab.set(1,23)
// ab.set('b','hii')
// ab.set(1,56)
// console.log(ab)

// const obj={
//     1:23,
//     2:67,
//     a:'rohan'
// }
// for(const a in obj){
//     console.log(obj[a])
// }


// Map() is not ittratable for in loop and array also
// const a=new Map()
// a.set(1,23)
// a.set(2,45)
// for(const w in a){
//     console.log(w)
// }

// ----------------forEach loop-----------

// const arr=['hii','hlo','bye','good']
// arr.forEach(function (vall){
//     // console.log(vall)
// })

// arr.forEach((item) => {
//     // console.log(item)
// })

// function printthis(item){
//     console.log(item)
// }
// arr.forEach(printthis)

// const a=[
//     {1:13,
//         2:23
//     },
//     {3:33,
//         4:44
//     },
//         {5:55,
//             6:66
//         },

// ]
// a.forEach( (item) => {
//     console.log(item[1])
// })