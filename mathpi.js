const descripter= Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter)
/* Output : {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
here it means its value can not be changed because we give some hardcore value enumrable, configrable = false kr rkha hai*/

// const var1={
//     name : 'Rohan',
//     Sir_name : 'Babu',
//     isAvailable : true
// }
// console.log(var1)

//----------------------------------------------------------
// console.log(Object.getOwnPropertyDescriptor(var1)) /* out put= undefined because var1= object and we use PropertyDescriptor that apply on property here property are name,Sir_name,isAvailable so the write code is ..*/

// --------------------------------------------------------
// console.log(Object.getOwnPropertyDescriptor(var1,'name')) 
// ---------------------------------------------------

// Object.defineProperty(var1, 'name',{
//     writable:false,
//     enumerable : false  
// }) 
/* here name property k baad bala {} object tells that which properties is did to false  */
// --------------------------------------------------------
//  console.log(Object.getOwnPropertyDescriptor(var1,'name'))

// ----------------------------------------------------------

const var1={
    name : 'Rohan',
    Sir_name : 'Babu',
    isAvailable : true,
    variable : function(){
        console.log('varable is not created')
    }

}
// for(let [key, value] of Object.entries(var1)){
//     console.log(`${key}: ${value}`)
// }
/* output : name: Rohan
Sir_name: Babu
isAvailable: true
variable: function(){
        console.log('varable is not created')
    }

here we dont want  'variable: function(){
        console.log('varable is not created')
    }' so remove this kind of output we need condition check example further...*/

/*---------------------------------------------------------- */
for(let [key, value] of Object.entries(var1)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
    
}