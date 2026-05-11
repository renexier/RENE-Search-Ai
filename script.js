const input=
document.getElementById(
"searchInput"
)

const orb=
document.getElementById(
"reneOrb"
)

/* =========================
AI MEMORY
========================= */

const memoryKey=
"rene-memory"

function saveMemory(q){

let m=JSON.parse(
localStorage.getItem(
memoryKey
)||"[]"
)

m.unshift(q)

m=[...new Set(m)]
.slice(0,25)

localStorage.setItem(
memoryKey,
JSON.stringify(m)
)

}

/* =========================
SEMANTIC SEARCH
========================= */

const sections=[]

;[...document.querySelectorAll(
"h1,h2,h3,p,a,button,li"
)]

.forEach(el=>{

const text=
(el.innerText||"")
.trim()
.toLowerCase()

if(
text &&
text.length<80
){

sections.push({

text,
element:el

})

}

})

function score(a,b){

const x=a.split(" ")
const y=b.split(" ")

let s=0

x.forEach(w=>{

if(y.includes(w))
s++

})

return s

}

function semanticSearch(q){

let best=null
let bestScore=0

sections.forEach(sec=>{

const s=
score(q,sec.text)

if(s>bestScore){

bestScore=s
best=sec

}

})

return best

}

/* =========================
PROMPTS
========================= */

const prompts=[

"This is RENE Search",

"Navigate using RENE",

"Try projects",

"Try contact",

"Try about",

"Try end"

]

sections
.slice(0,12)

.forEach(s=>{

prompts.push(
`Try ${s.text}`
)

})

let pi=0
let ci=0
let back=0

function rotate(){

if(input.value)
return setTimeout(
rotate,
400
)

const txt=
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

/* =========================
SEARCH
========================= */

function search(){

const q=
input.value
.trim()
.toLowerCase()

if(!q)return

saveMemory(q)

const route=
RENE_CONFIG.routes.find(r=>

r.keywords.some(k=>
q.includes(k)
)

)

if(route){

if(route.action==="top"){

scrollTo({
top:0,
behavior:"smooth"
})

return

}

if(route.action==="bottom"){

scrollTo({
top:
document.body.scrollHeight,
behavior:"smooth"
})

return

}

if(route.url){

location.href=
route.url

return

}

}

const found=
semanticSearch(q)

if(found){

found.element
.scrollIntoView({

behavior:"smooth",

block:"center"

})

}

}

document
.getElementById(
"searchBtn"
)

.onclick=search

input.onkeydown=e=>{

if(e.key==="Enter")
search()

}

/* =========================
PLAYFUL AVATAR
========================= */

document.addEventListener(
"mousemove",
e=>{

const x=
(
innerWidth/2
-e.clientX
)/22

const y=
(
innerHeight/2
-e.clientY
)/22

orb.style.transform=
`
rotateY(${-x}deg)
rotateX(${y}deg)
translateY(${
Math.sin(
Date.now()/250
)*2
}px)
`

})

/* =========================
PORTAL
========================= */

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

window.openPortal=
openPortal

window.closePortal=
closePortal
/* =========================
ANTI COPY
========================= */

document.addEventListener(
"contextmenu",
e=>e.preventDefault()
)

document.addEventListener(
"copy",
e=>e.preventDefault()
)

document.addEventListener(
"cut",
e=>e.preventDefault()
)

document.addEventListener(
"dragstart",
e=>e.preventDefault()
)

document.addEventListener(
"selectstart",
e=>e.preventDefault()
)

document.onkeydown=e=>{

if(

(e.ctrlKey||e.metaKey)

&&

["c","u","s","x","a"]
.includes(
e.key.toLowerCase()
)

){

e.preventDefault()

}

}