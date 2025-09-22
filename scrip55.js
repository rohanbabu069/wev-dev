// console.log("hlo kya hal hai");

// var a= 55;
// var b= 66;
// var c= "Rohan Babu";
// var _e= 99;
// var a=88;
// console.log(a);
// if (a==88){
//     var a=90;
//     console.log(a)
// }
// // var 55d="rohan";
// console.log(_e);
// // console.log(55d);
// console.log(a+b+8);
// console.log(typeof a, typeof b, typeof c);
// const bo={
//     "a b":"hello",
//     2:"world"
// }
// console.log(bo);


// const a={
//     1:23,
//     2:34,
//     b:64,
//     c:"Rohan"
// }
// console.log(a);
// console.log(a[1]);
// console.log(a[0]);
// console.log(a[2]);
// console.log(a[a]);
// console.log(a['b']);
// console.log(a['c']);

// const a={
//     a:'Rohan',
//     b:'Babu',
//     c:'a'
// }
// console.log(a['c'])

// const a={
// }

// a.Name="Rohan"
// a.Last_Name="Babu"
// a.age=27
// a._d=34
// console.log(a)
// console.log(a["Name"])
// console.log(a["age"])

// const a=new Object({
// 1:23,
// 2:34,
// Name:"Rohan",
// Last_Name:"Babu",
// Age_is: 27,

// })
// console.log(a)
// console.log(typeof a)
// console.log(a.Name)



// sigleton object 
// Object.create
// Object.create this is the constructor and this is the way to create the singleton object

// const sym=Symbol("id");

// const a={
//     // sym:"id",
//     [sym]:"&",
//     Name:"Rohan",
//     "Last Name": "Babu",
//     Age:27,
//     Location:"Delhi",
//     email:"abcc@gmail.com",
//     isLoggedIn: false,
//     lastloginday:["Monday", "Friday"],
    
// }
// const b="Last Name" ;
// console.log(a);
// console.log(a.Age);
// console.log(a.Name);
// // console.log(a.Last_Name)
// console.log(a[b]);
// // console.log(a.sym)
// // console.log(a[sym])
// console.log(typeof a[sym]);
// console.log(typeof a.sym)clear


// const a=new Object(){}

// const ab={
//     1:23,
//     2:2,
//     3:"hiii",
//     z:"ron"
// }
// console.log(ab)
// console.log(ab[3])
// console.log(ab[1])
// console.log(ab[2])
// console.log(typeof ab)
// console.log(ab.z)

// const b={
// c:{
//     d:{
//         1:"good",
//         "hi":"value"
//     }
// }
// }
// b.name="Rohan"
// b.lastname="Babu"
// console.log(b);
// console.log(b.c.d[1])
// console.log(b.c.d.hi)

// const tinder=new Object()

// const tinder={
// }
// tinder.id="123abc"
// tinder.name="Rohan"
// tinder.isloggedin=false
// // console.log(tinder)

// const regularuser={
//     email:"abc@gmail.com",
//     fullname:{
//             userfullname:{
//                 1:1,
//                 firstname:"Rohan",
//                 lastname:"Chandravanshi"
//             }
//         }
//     }


// const ab=regularuser.fullname.userfullname.firstname;
// console.log(regularuser.fullname.userfullname[1])
// console.log(ab)

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}

// console.log(obj1)
// console.log(obj2)
// const obj3={obj1,obj2}
// console.log(obj3)

// const obj3={...obj1,...obj2}
// console.log(obj3)
// const obj3={...obj1.obj1}
// console.log(obj3)

// const obj3=Object.assign({},obj1,obj2) or
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3)

// user=[
//     {
//         id:1,
//         name:"Rohan"
//     },
//     {
//         id:2,
//         name:"Gaurav"
//     },
//     {
//         id:3,
//         name:"Abhinay"
//     }
// ]
// let a=user[1].name
// console.log(a)
// let b=user[0].name
// console.log(b)
// let c=user[2].name or

// console.log(user[2].name)
// console.log(Object.keys(user[0]))
// console.log(Object.values(user[0]))
// console.log(Object.entries(user[0]))
// console.log(Object.entries(user))
// console.log(Object.hasOwnProperty("user"))
// console.log(user.hasOwnProperty('name'))


// const cb={
//     id:23,
//     name:"Rohan"
// }
// console.log(cb.hasOwnProperty("id"));

// const db=[{
//     id:3,
//     name:"Rohan Babu"
// },{
//     an:"hihi"
// }
// ]
// // console.log(cb.hasOwnProperty(0.id));
const ab={
    name:"rohan",
    lastname:"babu"
}
console.log(ab)
// const {lastname}=ab or
const {lastname:lnm}=ab
// console.log(lastname);
console.log(lnm)