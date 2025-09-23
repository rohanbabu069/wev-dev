// "use strict"; it means treat all js code as newer version

const a=123
// a=987
console.log(a);
console.log(typeof a)

const b ="Rohan Babu"
console.log(b)
console.log(typeof b)

const c=false
console.log(c)
console.log(typeof c)

const d=3.14
console.log(d)
console.log(typeof d)

let e=23344555
console.log(e)
console.log(typeof e)

let f='@#$%'
console.log(f)
console.log(typeof f)

// let g=@
// console.log(g) shown an error

let g=BigInt(1234567890987654321)
console.log(g)

let ab={
    1:"rohan",
    2:'babu',
    3:2.3,
    "a b":2345,
    a:34.56,
    df:{
        23:"Dishu",
        gh:786,
        df:'ABC@gmail.com'
    }
}
console.log(ab)
console.log(typeof ab)

let df=['rohan','babu',23,1,3.4,true,2+4]
let gf=['dishu',23,['rohan','babu',[23,4.56,true]]]
console.log(df)
console.log(typeof df)
console.log(gf)
console.log(typeof gf)

let ad=null
console.log(ad)
console.log(typeof ad)

let sd=undefined
console.log(sd)
console.log(typeof sd)

let ds=34+'rohan'
let fd='rohan'+34
let fg='rohan'+69+'babu'
console.log(ds) // it willbe add (integer value and string value)
console.log(typeof ds)
console.log(fd)
console.log(fg)
console.log(typeof fg)

let er=2+'@'
console.log(er)
console.log(typeof er)

let as='Rohan'+' '+'Babu'
console.log(as)
let cs='Rohan'+' Babu'
console.log(cs)

let qw=23+45+'Rohan'+'Babu'
let wq='Rohan'+'Babu'+45+23
let k='A'+'B'+1+2
console.log(k)
console.log(wq)
console.log(qw)


let dr=23
dr='rohan'
dr=45.9
console.log(dr)
console.log(typeof dr)

let rd=34.00
let qd=34
console.log(rd)
console.log(qd)

let cd=321e4
console.log(cd)
let dd=4533e-5
console.log(dd)

let gh='Rohan'*4
console.log(gh)

/* 
1. Number Types
Most programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always double (64-bit floating point).

2. The strict equality operator (===) compares both the value and the type of the operands.

It returns true only if both the operands values and types are null.

The loose equality operator (==) also returns true for a null value, but it also returns true if the value is undefined.

Using == is not recommended when checking for null.
*/

let x = BigInt("123456789012345678901234567890");
console.log(x)

let bg=5
let gb=5
let gg=6
console.log(gb==bg)
console.log(gb==gg)