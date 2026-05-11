const input=
document.getElementById(
"searchInput"
)

const orb=
document.getElementById(
"reneOrb"
)

const memoryList=
document.getElementById(
"memoryList"
)

let marks=[]
let current=0

/* =====================
MEMORY
===================== */

function saveMemory(q){

let m=JSON.parse(
localStorage.getItem(
"rene-memory"
)||"[]"
)

m.unshift(q)

m=[...new Set(m)]
.slice(0,8)

localStorage.setItem(
"rene-memory",
JSON.stringify(m)
)

renderMemory()

}

function renderMemory(){

let m=JSON.parse(
localStorage.getItem(
"rene-memory"
)||"[]"
)

memoryList.innerHTML=""

m.forEach(x=>{

const c=
document.createElement("div")

c.className=
"memory-chip"

c.innerText=x

c.onclick=()=>{

input.value=x
searchWebsite(x)

}

memoryList.appendChild(c)

})

}

renderMemory()

/* =====================
CLEAR
===================== */

function clearMarks(){

marks.forEach(m=>{

const p=m.parentNode

p.replaceChild(
document.createTextNode(
m.textContent
),
m
)

p.normalize()

})

marks=[]

}

/* =====================
SEARCH
===================== */

function searchWebsite(q){

clearMarks()

if(!q)return

q=q.toLowerCase()

/* ROUTES */

const route=
RENE_CONFIG.routes.find(r=>

r.keywords.some(k=>
q.includes(k)
)

)

if(route){

location.href=route.url

return

}

if(q==="home"||q==="top"){

scrollTo({
top:0,
behavior:"smooth"
})

return

}

if(q==="end"||q==="bottom"){

scrollTo({
top:
document.body.scrollHeight,
behavior:"smooth"
})

return

}

const walker=
document.createTreeWalker(

document.body,

NodeFilter.SHOW_TEXT

)

let node

while(
node=walker.nextNode()
){

if(
!node.parentElement ||
node.parentElement.closest(
".rene-wrapper"
)
)continue

const text=
node.textContent

if(
text.toLowerCase()
.includes(q)
){

const span=
document.createElement(
"span"
)

span.className=
"rene-highlight"

span.innerHTML=
text.replace(

new RegExp(
`(${q})`,
"gi"
),

`
<mark class="rene-mark">
$1
</mark>
`

)

node.parentNode
.replaceChild(
span,
node
)

marks.push(
...span.querySelectorAll(
".rene-mark"
)
)

}

}

if(marks.length){

current=0

marks[current]
.scrollIntoView({

behavior:"smooth",

block:"center"

})

saveMemory(q)

}else{

shakeBar()

}

}

/* =====================
NEXT RESULT
===================== */

function nextResult(){

if(!marks.length)return

current++

if(current>=marks.length)
current=0

marks[current]
.scrollIntoView({

behavior:"smooth",

block:"center"

})

}

/* =====================
SHAKE
===================== */

function shakeBar(){

document.querySelector(
".rene-bar"
)

.animate([

{
transform:
"translateX(-6px)"
},

{
transform:
"translateX(6px)"
},

{
transform:
"translateX(-4px)"
},

{
transform:
"translateX(0)"
}

],{

duration:400

})

}

/* =====================
INPUT
===================== */

input.addEventListener(
"keydown",
e=>{

if(e.key==="Enter"){

searchWebsite(
input.value
)

}

if(e.key==="ArrowDown"){

nextResult()

}

if(e.key==="Escape"){

input.value=""

clearMarks()

}

})

/* =====================
ROTATING PROMPTS
===================== */

let prompts=[

"This is RENE Search",

"Navigate through website",

"Try home",

"Try end"

]

document.querySelectorAll(
"h1,h2,h3,a,button,li"
)

.forEach(e=>{

const t=
(e.innerText||"")
.trim()
.toLowerCase()

if(
t &&
t.length<20
){

prompts.push(
`Try ${t}`
)

}

})

prompts=[
...new Set(prompts)
]

let pi=0
let ci=0
let back=0

function rotate(){

if(input.value)
return setTimeout(
rotate,
400
)

let txt=
prompts[pi]

input.placeholder=
txt.substring(0,ci)

if(!back){

ci++

if(ci>txt.length){

back=1

return setTimeout(
rotate,
1200
)

}

}else{

ci--

if(ci<0){

back=0

pi=
(pi+1)
%
prompts.length

}

}

setTimeout(
rotate,
back?30:70
)

}

rotate()

/* =====================
BOT FOLLOW
===================== */

document.addEventListener(
"mousemove",
e=>{

const x=
(
innerWidth/2
-e.clientX
)/25

const y=
(
innerHeight/2
-e.clientY
)/25

orb.style.transform=
`
rotateY(${-x}deg)
rotateX(${y}deg)
`

})

/* =====================
PORTAL
===================== */

function openPortal(){

document
.getElementById(
"portal"
)

.classList
.add("active")

}

function closePortal(){

document
.getElementById(
"portal"
)

.classList
.remove("active")

}
