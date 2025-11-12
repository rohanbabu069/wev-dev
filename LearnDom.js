//++++++++++++++++++++++Console Programming+++++++++++++++++++++++++++


// -----------------getElementById-----------------


// document.getElementById('title');
// document.getElementById('title').id;
// document.getElementById('title').className
// document.getElementById('title').getAttribute
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').getAttribute('class') (here 'class' is an attribute.)
// document.getElementById('title').setAttribute('class', 'Babu')(here 'class' is an attribute and 'Babu' is upadted value of class. this setAttribute() will always do overrite the value. )


// -----------------------getElementsByClassName----------------------------


// document.getElementsByClassName('list-item') its also provide node list(output HTMLCollection) which does not have property foeEach loop so  document.getElementsByClassName('list-item').forEach(function (item) {console.log(item)})


// -----------------performing styling----------------


// document.getElementById('title'); or const title = document.getElementById('title'); (store in variable)
// title.style.backgroundColor="green"
// title.style.padding="35px"
// title.style.alignItem="center"
// title.style.borderRadius="25px"
// title.style.fontSize="20px"
/* title.style.innerHTML this provide whole html with all text in that tag
// title.style.innerText this provide text in that tag
/ title.style.textContent  this provide whole text in that tag and sub tag */
// getElementByClassName('heading')


// --------------querySelector--------------------


// its work like css query selector

//document.querySelector(h2) if there are same tag exam. h2,h2,h2... then it will return only first h2
//document.querySelector('#title')
//document.querySelector('.heading')
// document.querySelector('ul')
// document.querySelector('li')

/* const myul=document.querySelector('ul')
 const turnred=myul.querySelector('li')
 turnred.style.backgroundColor="red" this whole code change color of first li into red */


//  document.querySelectorAll('li') select all the query and its provide(output) like node list not array it look like array but not a array. so map it some fuction like pop(),push() and etc does not work on it.

// liList[0].style.color='red' it will work so we can say that querySelectorAll provide output a node list not a array

// headingh1[0].style.color='green'

// --------to convert node list into Array we use Array.from()-------

// const listItem=document.getElementsByClassName('list-item') it provide node list but in this list we can not perform forEach() loop then

// Array.from(listItem)