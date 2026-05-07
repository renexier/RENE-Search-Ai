<script>
document.addEventListener("DOMContentLoaded",()=>{

const old=document.querySelector(".rene-panel")

if(old) old.remove()

const panel=document.createElement("div")
panel.className="rene-panel"

panel.innerHTML=`

<div class="rene-wrap">

<button class="rene-close">×</button>

<h1>
Ask <span>RENE</span>
</h1>

<p class="rene-sub">
Adaptive AI Website Navigation Layer
</p>

<div class="rene-card">
<h2>SMART WEBSITE SEARCH</h2>
<p>
RENE intelligently scans your Framer website and finds matching sections, pages, text blocks, buttons, services, portfolios, and navigation links in real time.
</p>
</div>

<div class="rene-card">
<h2>LIVE TEXT DISCOVERY</h2>
<p>
Search behaves like PDF keyword search. RENE highlights matching content visually without damaging your website design or layout structure.
</p>
</div>

<div class="rene-card">
<h2>ARROW NAVIGATION</h2>
<p>
Use ↑ and ↓ keys to jump between multiple keyword matches instantly across your website sections.
</p>
</div>

<div class="rene-card">
<h2>FRAMER AUTO PAGE DETECTION</h2>
<p>
RENE automatically detects Framer page links like Home, About, Projects, Contact and navigates intelligently without manual setup.
</p>
</div>

<div class="rene-card">
<h2>AI MEMORY SYSTEM</h2>
<p>
Learns visitor search behavior patterns locally and improves future keyword suggestions dynamically.
</p>
</div>

<div class="rene-card">
<h2>GLASSMORPHIC UI ENGINE</h2>
<p>
Premium futuristic floating UI with adaptive glow, hover effects, responsive scaling, smooth animations, and mouse-reactive avatar motion.
</p>
</div>

<div class="rene-card">
<h2>SAFE WEBSITE INTEGRATION</h2>
<p>
Built specifically to avoid breaking Framer layouts, theme colors, sections, typography, responsiveness, and page structure.
</p>
</div>

<div class="rene-card">
<h2>EMBED ANYWHERE</h2>
<p>
RENE can be installed into portfolios, SaaS websites, agencies, dashboards, AI tools, product showcases, and business landing pages.
</p>
</div>

<div class="rene-install">
<h2>INSTALL</h2>

<code>
&lt;script src="https://renexier.github.io/RENE-Search-Ai/widget.js"&gt;&lt;/script&gt;
</code>
</div>

<div class="rene-footer">

<p>
Created by :
<span>
Mayank Alias Renexier
</span>
</p>

<a
href="https://github.com/renexier"
target="_blank"
>
Visit GitHub to know more
</a>

</div>

</div>
`

document.body.appendChild(panel)

document.querySelector(".rene-close")
.onclick=()=>panel.remove()

})
</script>

<style>

.rene-panel{
position:fixed;
inset:0;
z-index:999999999;
background:rgba(0,0,0,.55);
backdrop-filter:blur(12px);
display:flex;
justify-content:center;
align-items:center;
padding:20px;
font-family:Inter,sans-serif;
}

.rene-wrap{
width:min(960px,95vw);
max-height:92vh;
overflow:auto;
padding:42px;
border-radius:38px;
background:
linear-gradient(
145deg,
rgba(10,10,30,.96),
rgba(5,5,18,.98)
);
border:1px solid rgba(255,255,255,.08);
box-shadow:
0 0 60px rgba(140,0,255,.2);
position:relative;
}

.rene-wrap h1{
font-size:72px;
margin:0;
color:#fff;
font-weight:800;
}

.rene-wrap h1 span{
color:#b57cff;
}

.rene-sub{
color:#aaa;
font-size:20px;
margin:10px 0 40px;
}

.rene-card,
.rene-install{
padding:28px;
margin-bottom:22px;
border-radius:26px;
background:
linear-gradient(
145deg,
rgba(255,255,255,.03),
rgba(255,255,255,.01)
);
border:1px solid rgba(255,255,255,.06);
}

.rene-card h2,
.rene-install h2{
margin:0 0 14px;
font-size:18px;
color:#b57cff;
}

.rene-card p,
.rene-install code{
color:#cfcfcf;
line-height:1.7;
font-size:16px;
}

.rene-install code{
display:block;
padding:18px;
border-radius:16px;
background:rgba(255,255,255,.03);
overflow:auto;
}

.rene-footer{
margin-top:30px;
color:#888;
}

.rene-footer span{
color:#b57cff;
}

.rene-footer a{
display:inline-block;
margin-top:10px;
color:#fff;
text-decoration:none;
opacity:.8;
}

.rene-close{
position:absolute;
top:18px;
right:18px;
width:52px;
height:52px;
border:none;
border-radius:50%;
background:rgba(255,255,255,.06);
color:#fff;
font-size:28px;
cursor:pointer;
}

@media(max-width:768px){

.rene-wrap{
padding:26px;
}

.rene-wrap h1{
font-size:48px;
}

.rene-sub{
font-size:16px;
}

}

</style>
