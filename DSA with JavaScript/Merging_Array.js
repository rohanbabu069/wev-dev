let arr1 =[10,60,20,70,50]
let arr2 =[30,40,80,90]
let arr3=[]
let a1=0
let a2=0
let a3=0
while(a1<arr1.length && a2<arr2.length){
    if(arr1[a1]<arr2[a2])
   {
     arr3.push(arr1[a1]);
    a1++
    }
   else{
    arr3.push(arr2[a2]);
     a2++
   }
   a3++
}
while(a2<arr2.length){
    if(arr2[a2]<arr1[a1]){
        arr3.push(arr2[a2])
        a2++
    }
    else{
        arr3.push(arr1[a1])
        a1++
    }
    arr3.push(arr2[a2])
    a3++
    }
console.log(arr3)