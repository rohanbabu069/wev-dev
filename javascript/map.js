// -------------------map function--------------------

// const num=[1,2,3,4,5,6,7,8,9]
// let val = num.map((item) => (item+10))
// let val = num.map( (item) => {return item +10}) /* if we use here {} then with {} we have to use return keyword if we dont use {} like above then we dont use return keyword  */

// let val = num.map( (num) => (num +100))
// console.log(val)


// -------------------chaining----------------------------

/*here we use more then one method and different method */
// const num=[1,2,3,4,5,6,7,8,9]
// let val =num.map((item)=>(item * 20)).map((item) => (item + 2)) /* here jo mne second map function use kiya h usme jo mne item yani no pass kiya h uski value bo ayegi jo first bale map function use krk item ki jo updated value hogi yani yha pr 1 nhi balki 20 ayega */
// console.log(val)

// const num=[1,2,3,4,5,6,7,8,9]
// let val=num.map((item)=>(item *30)).map((item) => (item +3)).filter((item) => (item >=93))

// // -----or-----
// let val2=num.map((item)=>(item *30)).map((item) => (item +3)).filter((item) => {return item >=93})
// console.log(val2)

// ---------------------reduce function----------------

// const a=[1,2,3,4,5]

// let ab=a.reduce( function(acc, val) {
//     console.log(`accu value is ${acc} and the return is ${val}`)
//     return acc + val}, 0)
/* here 0 mean app jo bhi accumalatter lo value doge bo bhi accept ke lega and default value is 0. ------ or with arrow function---- */ 
// let ba=a.reduce( (acc, val)=>(acc +val),0)
// console.log(ba)
// console.log(ab)

const courseprice=[{
    coursename:"Java",
    price:3000
},
{
    coursename:"python",
    price:3100
},
{
    coursename :"Javascript",
    price:3006},
{
      coursename:"c++",
    price:3340
},
{
    coursename:"Data analytics",
    price:13000
}
,]

let totalprice=courseprice.reduce((acc,item) =>(acc+item.price),0)
console.log(totalprice)