<script>
(()=>{

if(document.getElementById("rene-ai"))return

const css=`
#rene-ai{
position:fixed;
left:50%;
bottom:20px;
transform:translateX(-50%);
width:min(92vw,850px);
z-index:999999;
font-family:Inter,sans-serif;
pointer-events:none
}
#rene-bar{
height:72px;
border-radius:999px;
display:flex;
align-items:center;
gap:14px;
padding:0 14px;
pointer-events:auto;
background:linear-gradient(135deg,rgba(15,15,30,.92),rgba(25,25,45,.65));
backdrop-filter:blur(25px);
border:1px solid rgba(255,255,255,.08);
box-shadow:0 0 40px rgba(128,0,255,.18);
position:relative;
overflow:hidden
}
#rene-bar:before{
content:"";
position:absolute;
top:0;
left:-200px;
width:120px;
height:100%;
background:linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent);
transform:skewX(-25deg);
animation:shine 4s linear infinite
}
@keyframes shine{
0%{left:-200px}
100%{left:120%}
}
#rene-avatar{
width:48px;
height:48px;
border-radius:50%;
object-fit:cover;
box-shadow:0 0 20px rgba(170,0,255,.45);
transition:.15s
}
#rene-input{
flex:1;
background:none;
border:none;
outline:none;
font-size:16px;
color:#fff
}
#rene-input::placeholder{
color:rgba(255,255,255,.45)
}
#rene-info{
width:44px;
height:44px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#9b4dff,#6d5cff);
color:#fff;
font-weight:700;
cursor:pointer
}
.rene-mark{
outline:2px solid rgba(180,80,255,.9)!important;
border-radius:10px!important;
box-shadow:0 0 24px rgba(170,0,255,.45)!important;
transition:.2s
}
#rene-panel{
position:fixed;
inset:0;
background:rgba(0,0,0,.55);
backdrop-filter:blur(10px);
display:none;
align-items:center;
justify-content:center;
z-index:9999999
}
#rene-box{
width:min(92vw,950px);
background:linear-gradient(135deg,#080814,#050510);
border:1px solid rgba(255,255,255,.08);
border-radius:34px;
padding:42px;
color:#fff;
position:relative
}
#rene-box h1{
font-size:70px;
margin:0 0 10px
}
#rene-box h1 span{
color:#b57cff
}
.rene-card{
margin-top:22px;
padding:28px;
border-radius:28px;
background:rgba(255,255,255,.03);
border:1px solid rgba(255,255,255,.06)
}
.rene-card h2{
margin:0 0 10px;
color:#b57cff
}
#rene-close{
position:absolute;
right:20px;
top:20px;
font-size:28px;
cursor:pointer;
opacity:.7
}
@media(max-width:700px){
#rene-box h1{font-size:46px}
#rene-bar{height:64px}
}
`

document.head.insertAdjacentHTML(
"beforeend",
`<style>${css}</style>`
)

document.body.insertAdjacentHTML(
"beforeend",
`
<div id="rene-ai">
<div id="rene-bar">
<img id="rene-avatar" src="https://raw.githubusercontent.com/renexier/RENE-Search-Ai/main/rene-bot.png">
<input id="rene-input" placeholder="Ask RENE anything...">
<button id="rene-info">i</button>
</div>
</div>

<div id="rene-panel">
<div id="rene-box">

<div id="rene-close">×</div>

<h1>Ask <span>RENE</span></h1>

<p style="opacity:.7">
Adaptive AI Website Navigation Layer
</p>

<div class="rene-card">
<h2>AUTO DISCOVERY</h2>
<p>
RENE intelligently scans pages, sections,
buttons and content automatically.
</p>
</div>

<div class="rene-card">
<h2>SMART PAGE NAVIGATION</h2>
<p>
Finds matching pages like Home,
About, Projects and Contact instantly.
</p>
</div>

<div class="rene-card">
<h2>LIVE TEXT SEARCH</h2>
<p>
Highlights matching text directly on the
website without damaging visuals.
Arrow keys navigate between results.
</p>
</div>

<div class="rene-card">
<h2>AI MEMORY</h2>
<p>
Learns repeated search patterns and adapts
future suggestions intelligently.
</p>
</div>

<div class="rene-card">
<h2>GLASS UI ENGINE</h2>
<p>
Premium floating glassmorphism interface
with adaptive lighting and motion effects.
</p>
</div>

<div class="rene-card">
<h2>WEBSITE INSTALL</h2>
<p style="font-family:monospace;opacity:.8">
&lt;script src="https://renexier.github.io/RENE-Search-Ai/widget.js"&gt;&lt;/script&gt;
</p>
</div>

<div style="margin-top:28px;opacity:.75">
Created by : <span style="color:#b57cff">Mayank Alias Renexier</span>
<br><br>
Visit GitHub to know more
</div>

</div>
</div>
`
)

const i=document.getElementById("rene-input")
const p=document.getElementById("rene-panel")
const inf=document.getElementById("rene-info")
const cls=document.getElementById("rene-close")
const av=document.getElementById("rene-avatar")

let marks=[]
let idx=0

function clearMarks(){
marks.forEach(e=>e.classList.remove("rene-mark"))
marks=[]
idx=0
}

function search(q){

clearMarks()

if(!q.trim())return

q=q.toLowerCase()

const pages=[...document.querySelectorAll("a")]

for(let a of pages){

const t=(a.innerText||"").toLowerCase()

if(
t===q||
t.includes(q)
){
a.click()
return
}
}

document.querySelectorAll(
"h1,h2,h3,h4,h5,p,span,li,a,button"
).forEach(el=>{

if(el.closest("#rene-ai"))return

const txt=(el.innerText||"").toLowerCase()

if(txt.includes(q)){

el.classList.add("rene-mark")

marks.push(el)
}
})

if(marks[0]){
marks[0].scrollIntoView({
behavior:"smooth",
block:"center"
})
}
}

function nav(n){

if(!marks.length)return

idx=(n+marks.length)%marks.length

marks[idx].scrollIntoView({
behavior:"smooth",
block:"center"
})
}

i.addEventListener("input",e=>{
search(e.target.value)
})

i.addEventListener("keydown",e=>{

if(e.key==="ArrowDown"){
e.preventDefault()
nav(idx+1)
}

if(e.key==="ArrowUp"){
e.preventDefault()
nav(idx-1)
}

if(e.key==="Escape"){
clearMarks()
i.value=""
}

})

inf.onclick=()=>p.style.display="flex"

cls.onclick=()=>p.style.display="none"

p.onclick=e=>{
if(e.target===p)p.style.display="none"
}

document.addEventListener("mousemove",e=>{

const x=(innerWidth/2-e.clientX)/35
const y=(innerHeight/2-e.clientY)/35

av.style.transform=
`rotateY(${-x}deg) rotateX(${y}deg)`
})

})()
</script>
