(()=>{

if(document.getElementById("rene-search"))
return

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
width:min(92vw,760px);
z-index:999999;
font-family:Inter,sans-serif;
transition:.35s;
user-select:none
}

#rene-search.hide{
opacity:0;
transform:translateX(-50%) translateY(120px);
pointer-events:none
}

#rene-bar{
height:72px;
display:flex;
align-items:center;
gap:12px;
padding:0 14px;
border-radius:999px;
background:
linear-gradient(
135deg,
rgba(8,8,18,.94),
rgba(18,18,35,.92)
);
backdrop-filter:blur(24px);
border:1px solid rgba(255,255,255,.08);
box-shadow:
0 0 40px rgba(120,0,255,.22),
0 8px 40px rgba(0,0,0,.45);
overflow:hidden;
position:relative
}

#rene-bar:before{
content:"";
position:absolute;
top:0;
left:-180px;
width:140px;
height:100%;
background:linear-gradient(
90deg,
transparent,
rgba(255,255,255,.1),
transparent
);
transform:skewX(-20deg);
animation:s 6s linear infinite
}

@keyframes s{
0%{left:-180px}
100%{left:130%}
}

#rene-avatar{
width:48px;
height:48px;
border-radius:50%;
object-fit:cover;
background:#fff;
padding:4px;
flex-shrink:0;
box-shadow:
0 0 24px rgba(170,0,255,.35)
}

#rene-input{
flex:1;
background:none;
border:none;
outline:none;
color:#fff;
font-size:16px;
font-weight:500;
letter-spacing:.2px
}

#rene-input::placeholder{
color:rgba(255,255,255,.42)
}

#rene-btn{
width:46px;
height:46px;
border:none;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background:
linear-gradient(
135deg,
#a855f7,
#6d5cff
);
color:#fff;
cursor:pointer;
flex-shrink:0;
transition:.25s;
box-shadow:
0 0 24px rgba(160,90,255,.35)
}

#rene-btn:hover{
transform:scale(1.06);
box-shadow:
0 0 32px rgba(160,90,255,.55)
}

@media(max-width:700px){

#rene-search{
width:94vw;
bottom:85px
}

#rene-bar{
height:66px;
padding:0 10px
}

#rene-avatar{
width:42px;
height:42px
}

#rene-btn{
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

<img
id="rene-avatar"
src="https://raw.githubusercontent.com/renexier/RENE-Search-Ai/main/rene-bot.png"
>

<input
id="rene-input"
autocomplete="off"
>

<button id="rene-btn">

<svg
width="20"
height="20"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2.4"
stroke-linecap="round"
stroke-linejoin="round"
>

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

</div>

</div>

`)

const s=
document.getElementById(
"rene-search"
)

const i=
document.getElementById(
"rene-input"
)

const b=
document.getElementById(
"rene-btn"
)

const prompts=[]

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

prompts.unshift(
"This is RENE Search",
"Navigate using RENE",
"Try home",
"Try end"
)

let pi=0
let ci=0
let back=0

function rotate(){

if(i.value)
return setTimeout(
rotate,
400
)

let txt=
prompts[pi]

i.placeholder=
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
back?35:70
)

}

rotate()

function search(){

const q=
i.value
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

const f=[
...document.querySelectorAll(
"h1,h2,h3,p,a,button,li"
)
]

.find(x=>

(x.innerText||"")
.toLowerCase()
.includes(q)

)

if(f){

f.scrollIntoView({

behavior:"smooth",

block:"center"

})

}

}

b.onclick=search

i.onkeydown=e=>{

if(e.key==="Enter")
search()

}

addEventListener(
"scroll",
()=>{

const end=
innerHeight+scrollY>=
document.body.offsetHeight-5

s.classList.toggle(
"hide",
end
)

})

})()
