/* =========================
   RENE AI ENGINE
========================= */

const input =

document.getElementById(
  "searchInput"
)

const orb =

document.getElementById(
  "reneOrb"
)

let websiteMap = []

let memory = JSON.parse(

  localStorage.getItem(
    "reneMemory"
  )

) || {}


/* =========================
   AUTO DISCOVER WEBSITE
========================= */

function buildWebsiteMap(){

  websiteMap = []

  const allElements =

  parent.document.querySelectorAll(`
    section,
    nav,
    a,
    button,
    div,
    h1,
    h2,
    h3,
    h4,
    p
  `)

  allElements.forEach(el=>{

    const text =

    (
      el.innerText ||
      el.textContent ||
      ""
    )

    .trim()

    .toLowerCase()

    if(text.length < 2) return

    const rect =

    el.getBoundingClientRect()

    websiteMap.push({

      element:el,

      text:text,

      top:
      rect.top +

      parent.window.scrollY
    })

  })

}


/* =========================
   SMART SEARCH
========================= */

function smartSearch(query){

  query = query.toLowerCase()

  saveMemory(query)

  let bestMatch = null

  let bestScore = 0

  websiteMap.forEach(item=>{

    let score = 0

    if(
      item.text.includes(query)
    ){

      score += 10
    }

    const words =

    query.split(" ")

    words.forEach(word=>{

      if(
        item.text.includes(word)
      ){

        score += 2
      }

    })

    if(score > bestScore){

      bestScore = score

      bestMatch = item
    }

  })

  if(bestMatch){

    bestMatch.element
    .scrollIntoView({

      behavior:"smooth",
      block:"center"
    })

    pulseElement(
      bestMatch.element
    )

  }else{

    shakeBar()

  }

}


/* =========================
   SEARCH ENTER
========================= */

input.addEventListener(

  "keydown",

  (e)=>{

    if(e.key === "Enter"){

      smartSearch(
        input.value
      )

    }

  }
)


/* =========================
   MEMORY
========================= */

function saveMemory(query){

  if(memory[query]){

    memory[query]++

  }else{

    memory[query] = 1
  }

  localStorage.setItem(

    "reneMemory",

    JSON.stringify(memory)
  )

}


/* =========================
   PULSE TARGET
========================= */

function pulseElement(el){

  el.style.transition =
  "0.4s"

  el.style.boxShadow =
  "0 0 40px rgba(170,0,255,0.8)"

  el.style.transform =
  "scale(1.02)"

  setTimeout(()=>{

    el.style.boxShadow = ""

    el.style.transform = ""

  },1200)

}


/* =========================
   SHAKE BAR
========================= */

function shakeBar(){

  const bar =

  document.querySelector(
    ".rene-bar"
  )

  bar.animate([

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


/* =========================
   BOT FOLLOW
========================= */

document.addEventListener(

  "mousemove",

  (e)=>{

    const x =

    (
      window.innerWidth / 2
      - e.clientX
    ) / 25

    const y =

    (
      window.innerHeight / 2
      - e.clientY
    ) / 25

    orb.style.transform =

    `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    `
  }
)


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


/* =========================
   INIT
========================= */

setTimeout(()=>{

  buildWebsiteMap()

},1500)
