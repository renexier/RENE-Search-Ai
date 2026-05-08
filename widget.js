(()=>{
if(document.getElementById("rene-search"))return

document.body.insertAdjacentHTML("beforeend",`
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
-webkit-user-select:none;
user-select:none
}
#rene-search.hide{
opacity:0;
transform:translateX(-50%) translateY(120px);
pointer-events:none
}
#rene-bar{
height:68px;
display:flex;
align-items:center;
gap:10px;
padding:0 12px;
border-radius:999px;
background:rgba(10,10,20,.82);
backdrop-filter:blur(18px);
border:1px solid rgba(255,255,255,.08);
box-shadow:0 0 30px rgba(120,0,255,.18);
overflow:hidden;
position:relative
}
#rene-bar:before{
content:"";
position:absolute;
top:0;
left:-140px;
width:120px;
height:100%;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);
transform:skewX(-20deg);
animation:s 5s linear infinite
}
@keyframes s{
0%{left:-140px}
100%{left:120%}
}
#rene-avatar{
width:46px;
height:46px;
border-radius:50%;
object-fit:cover;
box-shadow:0 0 20px rgba(170,0,255,.4);
transition:.15s;
pointer-events:none
}
#rene-input{
flex:1;
background:none;
border:none;
outline:none;
color:#fff;
font-size:16px
}
#rene-input::placeholder{
color:rgba(255,255,255,.45)
}
#rene-btn{
width:42px;
height:42px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#a855f7,#6d5cff);
color:#fff;
font-size:18px;
cursor:pointer
}
#rene-note{
position:fixed;
left:50%;
bottom:170px;
transform:translateX(-50%);
background:rgba(15,15,25,.95);
color:#fff;
padding:10px 16px;
border-radius:18px;
font-size:14px;
border:1px solid rgba(255,255,255,.08);
box-shadow:0 0 25px rgba(140,0,255,.25);
opacity:0;
pointer-events:none;
transition:.25s;
z-index:999999;
max-width:90vw;
text-align:center
}
@media(max-width:700px){
#rene-search{
width:94vw;
bottom:85px
}
#rene-bar{
height:64px
}
}
</style>

<div id="rene-search">
<div id="rene-bar">

<img
id="rene-avatar"
src="https://raw.githubusercontent.com/renexier/RENE-Search-Ai/main/rene-bot.png"
>

<input id="rene-input">

<button id="rene-btn">⌕</button>

</div>
</div>

<div id="rene-note"></div>
`)

const s=document.getElementById("rene-search"),
i=document.getElementById("rene-input"),
b=document.getElementById("rene-btn"),
a=document.getElementById("rene-avatar"),
n=document.getElementById("rene-note")

const w=[
...new Set(
[...document.querySelectorAll(
"h1,h2,h3,h4,h5,a,button,li"
)]
.map(e=>
(e.innerText||"")
.replace(/\s+/g," ")
.trim()
.toLowerCase()
)
.filter(t=>
t&&
t.length>2&&
t.length<20&&
!t.includes("\n")&&
!/^[0-9]+$/.test(t)
)
)
]

if(!w.length){

w.push(
"projects",
"contact",
"services",
"portfolio",
"about"
)

}

let wi=0,ci=0,d=0

function p(){

if(i.value)return setTimeout(p,400)

let t=`Try ${w[wi]}`

i.placeholder=t.substring(0,ci)

if(!d){

ci++

if(ci>t.length){

d=1
return setTimeout(p,1200)

}

}else{

ci--

if(ci<0){

d=0
wi=(wi+1)%w.length

}

}

setTimeout(p,d?35:70)

}

p()

function note(t){

n.innerHTML=t
n.style.opacity=1

clearTimeout(n.t)

n.t=setTimeout(()=>{
n.style.opacity=0
},3000)

}

function search(){

let q=i.value.trim().toLowerCase()

if(!q)return

if(q=="top"){

scrollTo({
top:0,
behavior:"smooth"
})

return note("⬆️ Top")

}

if(q=="bottom"||q=="end"){

scrollTo({
top:document.body.scrollHeight,
behavior:"smooth"
})

return note("⬇️ Bottom")

}

let e=[
...document.querySelectorAll(
"h1,h2,h3,h4,h5,p,span,a,button,li"
)
]

let f=e.find(x=>
!x.closest("#rene-search") &&
(x.innerText||"")
.toLowerCase()
.includes(q)
)

if(f){

f.scrollIntoView({
behavior:"smooth",
block:"center"
})

note(`✨ Found ${q}`)

}else{

note(
`⚠️ Invalid keyword<br>Try: <b>${
w.sort(()=>.5-Math.random())
.slice(0,3)
.join(" • ")
}</b>`
)

}

}

b.onclick=search

i.onkeydown=e=>{
if(e.key=="Enter")search()
}

addEventListener("mousemove",e=>{

let x=(innerWidth/2-e.clientX)/35,
y=(innerHeight/2-e.clientY)/35

a.style.transform=
`rotateY(${-x}deg) rotateX(${y}deg)`

})

addEventListener("scroll",()=>{

let bottom=
innerHeight+scrollY>=
document.body.offsetHeight-5

s.classList.toggle("hide",bottom)

})

document.addEventListener(
"copy",
e=>e.preventDefault()
)

document.addEventListener(
"contextmenu",
e=>{
if(e.target.closest("#rene-search"))
e.preventDefault()
})

})()
