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
-webkit-backdrop-filter:blur(24px);
border:1px solid rgba(255,255,255,.08);
box-shadow:
0 0 40px rgba(120,0,255,.22),
0 8px 40px rgba(0,0,0,.45),
inset 0 1px 0 rgba(255,255,255,.05);
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
rgba(255,255,255,.12),
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
box-shadow:
0 0 25px rgba(170,0,255,.45),
0 0 50px rgba(170,0,255,.18);
transition:.15s;
pointer-events:none;
flex-shrink:0
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
width:44px;
height:44px;
border:none;
border-radius:50%;
background:
linear-gradient(
135deg,
#a855f7,
#7c4dff
);
color:#fff;
font-size:18px;
cursor:pointer;
transition:.25s;
box-shadow:
0 0 20px rgba(140,0,255,.35)
}

#rene-btn:hover{
transform:scale(1.06);
box-shadow:
0 0 30px rgba(140,0,255,.55)
}

#rene-note{
position:fixed;
left:50%;
bottom:175px;
transform:translateX(-50%);
background:rgba(12,12,22,.96);
color:#fff;
padding:12px 18px;
border-radius:18px;
font-size:14px;
border:1px solid rgba(255,255,255,.08);
box-shadow:
0 0 30px rgba(140,0,255,.25);
opacity:0;
pointer-events:none;
transition:.25s;
z-index:999999;
max-width:90vw;
text-align:center;
backdrop-filter:blur(20px)
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
width:40px;
height:40px
}

#rene-input{
font-size:15px
}

}
