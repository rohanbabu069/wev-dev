// let button = document.getElementById('btn')
// button.addEventListener('click',() =>{
//     alert('I was clicked.Yayy')
// })

/*----------------------------- mouse event ------------------------------- */


// let button = document.getElementById('btn')
// button.addEventListener('click',(e) => {
//     document.querySelector('.box').innerHTML = "<b>Yayy you were clicked</b>Enjoy your click!"
// })

/*-------------------------------------- keybord event ------------------------ */

// button.addEventListener('keydown',(e) => {
//     console.log(e)
// })
document.addEventListener('keydown',(e) =>{
    console.log(e.key,e.keyCode)
})