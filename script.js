/* =========================
   AUTO DISCOVERY
========================= */

let discoveredRoutes = []

let memory = JSON.parse(

  localStorage.getItem(
    "reneMemory"
  )

) || {}


/* =========================
   SCAN WEBSITE
========================= */

function scanWebsite(){

  discoveredRoutes = []

  const elements =

  parent.document.querySelectorAll(
    "section, div, nav"
  )

  elements.forEach(el=>{

    const id = el.id

    if(!id) return

    const text =

    el.innerText
    .toLowerCase()

    .replace(/[^\w\s]/g,"")

    .split(" ")

    .filter(word=>

      word.length > 2
    )

    .slice(0,25)

    discoveredRoutes.push({

      keywords:[
        id.toLowerCase(),
        ...text
      ],

      target:
      `#${id}`
    })

  })

}


/* =========================
   MEMORY SAVE
========================= */

function saveSearch(query){

  query = query.toLowerCase()

  if(memory[query]){

    memory[query]++

  }else{

    memory[query] = 1
  }

  localStorage.setItem(

    "reneMemory",

    JSON.stringify(memory)
  )

  renderMemory()
}


/* =========================
   MEMORY RENDER
========================= */

function renderMemory(){

  const list =

  document.getElementById(
    "memoryList"
  )

  list.innerHTML = ""

  const sorted =

  Object.entries(memory)

  .sort((a,b)=>

    b[1] - a[1]

  )

  .slice(0,8)

  sorted.forEach(item=>{

    const keyword = item[0]

    const chip =
    document.createElement("div")

    chip.className =
    "memory-chip"

    chip.innerText =
    keyword

    chip.onclick = ()=>{

      quickSearch(keyword)
    }

    list.appendChild(chip)

  })
}


/* =========================
   SEARCH
========================= */

function searchSite(){

  const input =

  document
  .getElementById(
    "searchInput"
  )

  .value
  .toLowerCase()

  if(!input) return

  saveSearch(input)

  for(
    let route of
    discoveredRoutes
  ){

    const matched =

    route.keywords.some(
      keyword=>

      input.includes(keyword)
    )

    if(matched){

      const target =

      parent.document.querySelector(
        route.target
      )

      if(target){

        target.scrollIntoView({

          behavior:"smooth",
          block:"start"
        })

        return
      }

    }

  }

  window.open(

    "https://google.com/search?q="

    + encodeURIComponent(input),

    "_blank"
  )
}


/* =========================
   ENTER
========================= */

document
.getElementById(
  "searchInput"
)

.addEventListener(

  "keydown",

  (e)=>{

    if(e.key === "Enter"){

      searchSite()
    }

  }
)


/* =========================
   QUICK SEARCH
========================= */

function quickSearch(text){

  document
  .getElementById(
    "searchInput"
  )

  .value = text

  searchSite()
}


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
   BOT FOLLOW
========================= */

const orb =

document.getElementById(
  "reneOrb"
)

document.addEventListener(

  "mousemove",

  (e)=>{

    const x =

    (
      window.innerWidth / 2
      - e.clientX
    ) / 35

    const y =

    (
      window.innerHeight / 2
      - e.clientY
    ) / 35

    orb.style.transform =

    `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    `
  }
)


/* =========================
   INIT
========================= */

scanWebsite()

renderMemory()