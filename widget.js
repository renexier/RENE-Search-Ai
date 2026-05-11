(()=>{

if(document.getElementById("rene-search"))return

document.body.insertAdjacentHTML("beforeend",`

<link
href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
rel="stylesheet">

<style>

#rene-search{
position:fixed;
left:50%;
bottom:90px;
transform:translateX(-50%);
width:min(92vw,780px);
z-index:999999;
font-family:Inter,sans-serif;
transition:.35s
}

#rene-bar{
position:relative;
height:76px;
display:flex;
align-items:center;
gap:14px;
padding:0 16px;
border-radius:999px;
overflow:hidden;
background:linear-gradient(
135deg,
rgba(10,10,18,.92),
rgba(18,18,35,.82)
);
border:1px solid rgba(255,255,255,.08);
backdrop-filter:blur(24px);
box-shadow:
0 0 40px rgba(120,0,255,.18),
0 8px 30px rgba(0,0,0,.4)
}

#rene-bar:before{
content:"";
position:absolute;
top:0;
left:-160px;
width:120px;
height:100%;
background:linear-gradient(
90deg,
transparent,
rgba(255,255,255,.12),
transparent
);
transform:skewX(-25deg);
animation:shine 5s linear infinite
}

@keyframes shine{
0%{left:-160px}
100%{left:120%}
}

#rene-avatar-wrap{
width:54px;
height:54px;
position:relative;
display:flex;
align-items:center;
justify-content:center
}

#rene-avatar-glow{
position:absolute;
inset:0;
border-radius:50%;
background:radial-gradient(
circle,
rgba(170,0,255,.6),
transparent 70%
);
filter:blur(16px)
}

#rene-avatar{
position:relative;
width:50px;
height:50px;
object-fit:contain;
transition:transform .08s linear;
filter:drop-shadow(
0 0 12px rgba(170,0,255,.45)
)
}

#rene-input{
flex:1;
height:100%;
background:none;
border:none;
outline:none;
color:white;
font-size:17px;
font-weight:500
}

#rene-input::placeholder{
color:rgba(255,255,255,.42)
}

.rene-btn{
width:48px;
height:48px;
border:none;
border-radius:50%;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(
135deg,
#a855f7,
#6d5cff
);
color:white;
box-shadow:
0 0 25px rgba(160,90,255,.35);
transition:.25s
}

.rene-btn:hover{
transform:scale(1.08) rotate(6deg)
}

@media(max-width:700px){

#rene-search{
width:94vw;
bottom:85px
}

#rene-bar{
height:70px;
padding:0 12px;
gap:10px
}

#rene-avatar-wrap{
width:48px;
height:48px
}

#rene-avatar{
width:44px;
height:44px
}

.rene-btn{
width:42px;
height:42px
}

#rene-input{
font-size:15px
}

}

</style>

<div id="rene-search">

<div id="rene-bar">

<div id="rene-avatar-wrap">

<div id="rene-avatar-glow"></div>

<img
id="rene-avatar"
src="https://raw.githubusercontent.com/renexier/RENE-Search-Ai/main/rene-bot.png"
>

</div>

<input
id="rene-input"
autocomplete="off"
>

<button
class="rene-btn"
id="rene-go">

<svg
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2.4"
stroke-linecap="round"
stroke-linejoin="round">

<circle
cx="11"
cy="11"
r="7">
</circle>

<line
x1="21"
y1="21"
x2="16.65"
y2="16.65">
</line>

</svg>

</button>

<button
class="rene-btn"
id="rene-info">

i

</button>

</div>

</div>

`)

const input=
document.getElementById(
"rene-input"
)

const avatar=
document.getElementById(
"rene-avatar"
)

const prompts=[

"This is RENE Search",

"Navigate using RENE",

"Try projects",

"Try about",

"Try contact",

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
t.length<22
){

prompts.push(
`Try ${t}`
)

}

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

const txt=prompts[pi]

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

function search(){

const q=
input.value
.trim()
.toLowerCase()

if(!q)return

if(q==="home"||q==="top"){

scrollTo({
top:0,
behavior:"smooth"
})

return

}

if(q==="end"){

scrollTo({
top:
document.body.scrollHeight,
behavior:"smooth"
})

return

}

const found=[
...document.querySelectorAll(
"h1,h2,h3,h4,p,a,button,li,span"
)
]

.find(x=>

(x.innerText||"")
.toLowerCase()
.includes(q)

)

if(found){

found.scrollIntoView({

behavior:"smooth",

block:"center"

})

}

}

document
.getElementById(
"rene-go"
)

.onclick=search

input.onkeydown=e=>{

if(e.key==="Enter")
search()

}

document
.getElementById(
"rene-info"
)

.onclick=()=>{

alert(
"RENE AI • Adaptive Website Navigation Layer"
)

}

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

avatar.style.transform=
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

})()