console.log('hello world')
/* hello world
1.document.body
<body>​<div class=​"container">​…​</div>​<script src=​"practice_child.js">​</script>​</body>​
2.document.body.children
HTMLCollection(2) [div.container, script]0: div.container1: scriptlength: 2[[Prototype]]: HTMLCollection
3.document.body.chileNodes
undefined
4.document.body.childNodes
NodeList(5) [text, div.container, text, script, text]
5.document.body.childNodes[0]
#text
6.document.body.childNodes[1]
<div class=​"container">​…​</div>​
7.document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
8.let cont=document.body.childNodes[1]
undefined
9.cont.childNodes[1]
<div class=​"box">​Box1​</div>​
10.cont.childNodes[0]
#text
11. cont.firstElementChild
<div class=​"box">​Box1​</div>​
12. cont.lastElementChild
<div class=​"box">​Box5​</div>​
13. cont.lastElementChild.style.color='red'
'red'
14. cont.lastElementChild.style.backgroundColor='yellow'
'yellow'
15. cont.lastElementChild.parentElement
<div class=​"container">​…​</div>​
16. document.body.firstElementChild.childNodes
NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
17. document.body.firstElementChild.children
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

18. document.body.firstElementChild.children[3]
<div class=​"box">​Box4​</div>​
19. document.body.firstElementChild.children[3].previousElementSibling
<div class=​"box">​Box3​</div>​
20. document.body.firstElementChild.children[3].nextElementSibling
<div class="box">Box5</div>
21. document.body.firstElementChild.children[3].nextSibling
#text
*/