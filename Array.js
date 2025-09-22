// const a= [1,2,3,'Rohan',true,3.4]
// const b=['Rohan','Babu']
// const c=new Array(9,8,6,'Hello',7.8,false)
// console.log(b)
// console.log(c)
// console.log(a)
// console.log(a[0])
// console.log(b[1])
// console.log(typeof [a]);


// Array Method

// const a=[1,2,3,4]
// a.push(6)
// console.log(a)
// a.push(7)
// console.log(a)
// a.pop(7)
// // we do not provide any agrgument in pop() method it simplly delete last element of array 
// console.log(a)
// a.push()
// console.log(a)
// a.pop()
// console.log(a)
// a.pop(2)
// console.log(a)
// a.pop(1)
// console.log(a)
// a.push(9)
// console.log(a)
// a.unshift(7)
// console.log(a)
// a.shift()
// console.log(a)
// we do not provide any arrgument to shift() method it delete first element of array

// const a=[0,1,2,3,4]
// const b= [5,6,7,8,9]
// console.log(a)
// const c=a.join()
// // here join() function change the array into String form
// console.log(c)
// console.log(typeof c)
// console.log("A", a)
// console.log("A", a, 23)

// const d=a.slice(1, 3)
// console.log(d)
// console.log(a)
// const e=a.splice(1,3)
// console.log(e)
// console.log(a)

// const a=[1,2,3,4,5]
// const b=[6,7,8,9]
// a.push(b)
// console.log(a)
// const c=a.push(b)
// this push() method is used to add array into 1 array as an element
// console.log(c)
// console.log(a.push(b))
// console.log(a)
// const c=a.concat(b)
// this concate() methos is used to combine more than 1 array into single aaray
// console.log(c)
// const d=a.push(b)
// console.log(d)

// const a=[1,2,3,[3,4,5,[3,4,6,7,8],8,9,0,75]]
// const b=a.flat(Infinity)
// console.log(b)

// const a=Array.isArray([1,2,3])
// console.log(a)
// const b=Array.isArray("Rohan")
// console.log(b)
// const c="Rohan Babu"
// const d=Array.from(c)
// console.log(d)
// const e="Rohan Babu"
// const f=Array.from(e)
// // Array.from() function is used to convert a string, object,into an array
// console.log(f)
// const g=true
// const h=Array.from(g)
// console.log(h)

// const a=100
// const b=30
// const c=83
// const d=Array.of(a,b,c)
// console.log(d)
// this of() method id used to make an array with all the element or we can say it amke an array with the help of elemnts