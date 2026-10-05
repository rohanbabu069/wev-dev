// const promiseone= new Promise(function(resolve,reject){
//     // Do an asyc task
//     // DB calls,cryptography
//     setTimeout(function(){
//         console.log('async task is completted');
//          resolve()
//     },1000)
   
// })

// promiseone.then(function(){
//     console.log("promised1 consumed")
// })

// -------------------------------------------------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//             console.log('async task2 compleete');
//             resolve()
// },1000)
//     }).then(function(){
//     console.log("promise2 is completed")
// })

// ---------------------------------------------------------------

// const promisethree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('assync task3 complete')
//         resolve({username:'Rohan babu', email:'babu@gmail.com'})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user)
// })

// const promisefour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =true
//         if(!error){
//             resolve({username:'Rohan', email:'babu@gmail.com'})
//         }
//         else{
//             reject('something happened wrong')
//         }
//     },1000)
// })

// promisefour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('finally my code resolve and reject is run')
// })

// ---------------------------------------------------------------------------

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:'rohan', psswrd:'123'})
        }
        else{
            reject('Error: something happened wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response= await promisefive
        console.log(response)
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")

//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log('E:',error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)

}).catch((error) => {
    console.log(error)
})