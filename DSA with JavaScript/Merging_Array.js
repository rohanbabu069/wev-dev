let arr1 = [10, 60, 20, 70, 50]
let arr2 = [30, 40, 80, 90]
let arr3 = []
let a1 = 0
let a2 = 0
let a3 = 0

console.log(`first Array is ${arr1} and second Array is ${arr2} then`)
while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
        arr3.push(arr1[a1]);
        a1++
    }
    else {
        arr3.push(arr2[a2]);
        a2++
    }

    a3++

}

while(a2<arr2.length){

    arr3.push(arr2[a2])
    a2++
    a3++
}

console.log(arr3)
/* Because JavaScript variables keep their value until you change them. So its value stays whatever it became in the first loop. First loop reads:

value of a2 is 0
value of a2 is 1
value of a2 is 2

You stop at page 2.

Second loop continues reading:

value of a2 is 3
value of a2 is 4

You do not restart from page 0.

Same thing happens with a2.

✅ Conclusion

a2 does not become 0 again because:

It was already increased in the first loop

Variables keep their value

The second loop continues from the current indexso here value of a2 is start with a2=2
*/

// learn more about


/*  What You Learned About Loops

Usually when we write a loop like this:

for(let i = 0; i < 5; i++){
   console.log(i)
}

Here we initialize i = 0 because we want to start the loop from the beginning.

So normally:

initialization → condition → update

Example:

i = 0
i < 5
i++
2. But In Your Code

Your loop is not a for loop, it is a while loop.

let a2 = 0

You initialized a2 before the loop, not inside the loop.

3. First While Loop Uses a2
while(a1 < arr1.length && a2 < arr2.length)

Inside this loop we increase a2.

Example:

a2 = 0 → 1 → 2

So when the first loop finishes, a2 might be:

a2 = 2
4. Second While Loop
while(a2 < arr2.length)

Now JavaScript checks the current value of a2.

If:

a2 = 2
arr2.length = 4

Then:

2 < 4 → true

So the loop starts from index 2, not from 0.

5. Why We Do NOT Reset a2 = 0

Because we already processed some elements of arr2 in the first loop.

Example:

arr2 = [30, 40, 80, 90]

First loop already used:

30
40

So a2 becomes:

a2 = 2

Now only these elements remain:

[80, 90]

If we reset a2 = 0, we would process 30 and 40 again, which would be wrong.

6. Visual Example

After first loop:

arr2

index:   0   1   2   3
value:  30  40  80  90
              ↑
             a2

So second loop starts from 80, not from 30.

7. Important Concept

Initialization is needed only when we want to start from the beginning.

But here we want to continue from where we stopped.

So we do not reset a2.

✅ Simple Rule

for loop → usually initialize inside loop
while loop → variable can be initialized outside and reused */

// while (a2 < arr2.length) {
    //     // if(arr2[a2]<arr1[a1]){
    //     //     arr3.push(arr2[a2])
    //     //     a2++
    //     // }
    //     // else{
    //     //     arr3.push(arr1[a1])
    //     //     a1++
    //     // }
//     arr3.push(arr2[a2])
//     a3++
//     a2++
// }
// console.log(arr3) 